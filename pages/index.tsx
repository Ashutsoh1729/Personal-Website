import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from '@/components/Profile'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <h1 className=''>Hello World!</h1> */}
      {/* First div is for profile */}
      <Profile profileImgHight={470} profileImgWidth={470} />
      <Footer/>
    </>
  )
}
