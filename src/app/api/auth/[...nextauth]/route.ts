import NextAuth, { NextAuthOptions } from 'next-auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_noStore as noStore } from 'next/cache'
import DiscordProvider from 'next-auth/providers/discord'
import { getLogger } from '@/@core/util/logger'
import CredentialsProvider from 'next-auth/providers/credentials'

const logger = getLogger('AUTH')

export const authOptions = (
  DISCORD_CLIENT_ID: string,
  DISCORD_CLIENT_SECRET: string,
  DISCORD_ROLE_SERVER_ID: string,
  DISCORD_BOT_TOKEN: string,
  AUTH_ENABLED: boolean
): NextAuthOptions => ({
  providers: [
    DiscordProvider({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      authorization: {
        url: 'https://discord.com/oauth2/authorize',
        params: {
          scope: 'identify email guilds guilds.members.read'
        }
      },
      async profile(profile, token) {
        console.log(token.access_token)
        if (profile.avatar === null) {
          const defaultAvatarNumber = parseInt(profile.discriminator) % 5
          profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
        } else {
          const format = profile.avatar.startsWith('a_') ? 'gif' : 'png'
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
        }
        let serverInfo = { roles: [] }
        try {
          const severRes = await fetch(
            `https://discord.com/api/v10/users/@me/guilds/${DISCORD_ROLE_SERVER_ID}/member`,
            {
              method: 'GET',
              headers: { Authorization: `Bearer ${token.access_token}` }
            }
          )
          if (severRes.ok) {
            serverInfo = await severRes.json()
            if (serverInfo.roles.length > 0) {
              const roleRes = await fetch(`https://discord.com/api/v10/guilds/${DISCORD_ROLE_SERVER_ID}/roles`, {
                method: 'GET',
                headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` }
              })
              if (roleRes.ok) {
                const roleLookup = await roleRes.json()
                serverInfo.roles.map((roleId: string) => roleLookup.find((role: { id: string }) => role.id === roleId))
              } else {
                console.log(await roleRes.json())
              }
            }
          }
        } catch (e) {
          console.log(e)
        }
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.image_url,
          accentColor: `#${profile.accent_color.toString(16)}`,
          bannerColor: profile.banner_color,
          clan: profile.clan,
          primaryGuild: profile.primary_guild,
          locale: profile.locale,
          premiumType: profile.premium_type,
          verified: profile.verified,
          scope: token.scope,
          ...serverInfo,
          user: undefined
        }
      }
    }),
    CredentialsProvider({
      name: 'local',
      id: 'local',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'kaladin.stormblessed' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize() {
        if (AUTH_ENABLED) {
          return null
        } else {
          return {
            firstName: 'Kaladin',
            lastName: 'Stormblessed',
            groups: [],
            email: 'testing@example.com',
            name: 'Stormbless, Kaladin',
            id: '123456'
          }
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error' // Error code passed in query string as ?error=
  },
  session: {
    maxAge: 3900
  },
  logger: {
    error(code: string, metacode: Error | { [key: string]: unknown; error: Error }) {
      logger.error(code, metacode)
    },
    warn(code: string) {
      logger.warn(code)
    },
    debug(code: string, metacode: unknown) {
      logger.debug(code, metacode)
    }
  },
  callbacks: {
    jwt: async ({ token, trigger, user }) => (trigger && trigger === 'signIn' ? { ...user, sub: undefined } : token),
    session: async ({ session, token }) => ({
      user: { ...token, iat: undefined, exp: undefined, jti: undefined },
      expires: session.expires
    })
  }
})

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  noStore()

  return await NextAuth(
    req,
    res,
    authOptions(
      process.env.DISCORD_CLIENT_ID || '',
      process.env.DISCORD_CLIENT_SECRET || '',
      process.env.DISCORD_ROLE_SERVER_ID || '',
      process.env.DISCORD_BOT_TOKEN || '',
      process.env.AUTH_ENABLED === '1'
    )
  )
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  noStore()

  return await NextAuth(
    req,
    res,
    authOptions(
      process.env.DISCORD_CLIENT_ID || '',
      process.env.DISCORD_CLIENT_SECRET || '',
      process.env.DISCORD_ROLE_SERVER_ID || '',
      process.env.DISCORD_BOT_TOKEN || '',
      process.env.AUTH_ENABLED === '1'
    )
  )
}
