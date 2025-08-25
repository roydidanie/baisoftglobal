import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Next App',
  description: 'Built with Next.js & Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
