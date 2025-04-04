import { Space_Grotesk, Noto_Sans, MuseoModerno } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

const notoSans = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans'
})

const museoModerno = MuseoModerno({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  style: ['italic', 'normal'],
  variable: '--font-museo-moderno'
})

const fonts = {
  spaceGrotesk,
  notoSans,
  museoModerno
}

export default fonts
