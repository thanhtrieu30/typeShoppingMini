import AccountHeader from 'src/components/accountHeader'
import Footer from 'src/components/footer'

interface Props {
  children: React.ReactNode
}

export default function AccountLayout({ children }: Props) {
  return (
    <div>
      <AccountHeader />
      {children}
      <Footer />
    </div>
  )
}
