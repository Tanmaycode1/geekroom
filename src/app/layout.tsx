import Footer from "@/Components/Footer/Footer"
import Navbar from "@/Components/Navbar/Navbar"
import '@/Styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Geek Room',
  description: 'Welcome to GeekRoom',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}