import { Inter } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/util/SessionProvider'
import Navbar from '@/components/Navbar'
import ReactToast from '@/components/react-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next auth',
  description: 'Created for testing next-auth',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navbar/>
          {children}
          <ReactToast/>
        </SessionProvider>
      
      </body>
    </html>
  )
}
