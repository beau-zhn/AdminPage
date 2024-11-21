import { Inter } from 'next/font/google'
import { Nunito_Sans } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ subsets: ['latin'] })
const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Farmers Market',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  )
}
