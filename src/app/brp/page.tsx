import BRPClient from './client'

import { cookies } from 'next/headers'

const BRP = async () => {
  const cookieList = await cookies()
  const brpProgress = cookieList.get('tibbettja.brp-progress')

  return <BRPClient progress={brpProgress} />
}

export default BRP
