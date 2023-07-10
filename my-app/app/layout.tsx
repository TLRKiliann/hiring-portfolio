import Layout from '@/components/layout'
import '../styles/globals.scss'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
}

export default function RootLayout({ children }: {
  children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
