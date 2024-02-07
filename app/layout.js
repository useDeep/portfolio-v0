import './globals.scss'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react';

const myFont = localFont({
  src: './w95fa.woff2',
})

export const metadata = {
  title: 'Deepak👋',
  description: 'Windows 95 themed portfolio of Deepak',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
