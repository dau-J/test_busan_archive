import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '부산항일 demo ver',
  description: '설계test_ver',
  generator: '정현성',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
