//import useSWR from 'swr'
//import Link from 'next/link'
import React, { PropsWithChildren } from "react";
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }: PropsWithChildren) {
  //const { data, error } = useSWR('/api/navigation', fetcher)
 
  //if (error) return <div>Failed to load</div>
  //if (!data) return <div>Loading...</div>
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}