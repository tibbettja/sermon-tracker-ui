import NextAuth, { NextAuthOptions } from 'next-auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_noStore as noStore } from 'next/cache'
import DiscordProvider from 'next-auth/providers/discord'
import { getLogger } from '@/utils/logger'

const logger = getLogger('AUTH')

export const authOptions = (
  DISCORD_CLIENT_ID: string,
  DISCORD_CLIENT_SECRET: string
): NextAuthOptions => ({
  providers: [
    DiscordProvider({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET
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
    error(
      code: string,
      metacode: Error | { [key: string]: unknown; error: Error }
    ) {
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
      process.env.DISCORD_CLIENT_SECRET || ''
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
      process.env.DISCORD_CLIENT_SECRET || ''
    )
  )
}
