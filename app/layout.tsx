import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baisoft Global',
  description: 'Baisoft Global',
  icons: {
    icon: "/favicon.png",
  },
}

import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-white text-gray-900`}>{children}</body>
    </html>
  )
}
