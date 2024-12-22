FROM node:23.0.0-apline
USER root

FROM base AS deps
WORKDIR /app
RUN chmod -R 777 /app/
COPY package.json yarn.lock .npmrc ./

FROM base AS loader
WORKDIR /app
USER root
COPY ./start-app.sh ./start-app.sh
RUN chmod +x ./start-app.sh

FROM base as BUILDER
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
ENV NODE_EXTRA_CA_CERTS=/app/ssl/ca.crt

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN adduser --uid 10101 -S nextjs
RUN chown -R 10101 /app
COPY --from-builder --chown=10101:10101 /app/public ./public
COPY --from-builder --chown=10101:10101 /app/.next/standalone ./
COPY --from-builder --chown=10101:10101 /app/.next/static ./.next/static
COPY --from-builder --chown=10101:10101 /app/start-app.sh ./start-app.sh
USER 10101
ENV PORT 8080
EXPOSE 8080

ENTRYPOINT ["/bin/sh", "-c", "/app/start-app.sh"]