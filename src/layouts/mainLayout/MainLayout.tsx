import React from 'react'
import Footer from 'src/components/footer'
import Header from 'src/components/mainHeader'

interface Props {
  children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
