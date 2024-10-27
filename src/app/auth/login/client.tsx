'use client'

import React from 'react'
import { signIn } from 'next-auth/react'

const LoginClient = () => {
  return (
    <>
      <div>
        <button onClick={() => signIn('discord', { callbackUrl: '/' })}>
          Sign in with Discord
        </button>
      </div>
    </>
  )
}

export default LoginClient