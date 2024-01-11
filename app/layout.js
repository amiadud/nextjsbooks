import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className max-w-7xl mx-auto text-black dark:bg-slate-800`} >
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
