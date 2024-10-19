import React from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LoginClient from './client'

const Login = async () => {
  await getServerSideProps()

  return <LoginClient />
}

const getServerSideProps = async () => {
  const session = await getServerSession(
    authOptions(
      process.env.DISCORD_CLIENT_ID || '',
      process.env.DISCORD_CLIENT_SECRET || ''
    )
  )

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/' } }
  }
}

export default Login
