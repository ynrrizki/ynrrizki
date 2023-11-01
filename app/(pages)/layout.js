// 'use client'
import Navbar from '../components/Navbar';
import '../globals.css';
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: 'Yanuar Rizki Sanjaya @Portfolio',
  description: 'Web Development | Mobile Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-sans text-[#050505]'>
        <NextTopLoader
          color='#050505'
          showSpinner={false}
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
