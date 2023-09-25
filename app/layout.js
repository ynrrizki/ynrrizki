import Navbar from './components/navbar'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
// import { Poppins } from 'next/font/google'

// const poppins = Poppins({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// })

export const metadata = {
  title: 'Yanuar Rizki Sanjaya @Portofolio',
  description: 'Web Development | Mobile Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={poppins.className}>{children}</body> */}
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
