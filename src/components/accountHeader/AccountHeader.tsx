import { Link } from 'react-router-dom'

export default function AccountHeader() {
  return (
    <header className='py-5 '>
      <div className='px-4 mx-auto  max-w-6xl'>
        <nav className='flex items-center justify-between '>
          <div className='font-semibold'>ĐĂNG KÝ</div>
          <Link to='/' className=''>
            <img src='https://ygflshop.net/wp-content/uploads/logo-1.png' alt='' className='max-h-10  h-auto' />
          </Link>
          <div className='float-right'>Bạn cần giúp đỡ ?</div>
        </nav>
      </div>
    </header>
  )
}
