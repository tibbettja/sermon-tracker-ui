'use client'

import { useSession } from 'next-auth/react'

const Client = () => {
  const { data: session } = useSession()

  return (
    <>
      <pre>{JSON.stringify(session, null, 4)}</pre>
    </>
  )
}

export default Client
