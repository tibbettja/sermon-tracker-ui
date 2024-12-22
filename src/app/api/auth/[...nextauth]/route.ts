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
  AUTH_ENABLED: boolean
): NextAuthOptions => ({
  providers: [
    DiscordProvider({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET
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
      process.env.AUTH_ENABLED === '1'
    )
  )
}
