import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className='py-12 mt-6 '>
      <div className='px-12 max-w-7xl m-auto grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm'>
        <div>
          <p className='mb-4 font-semibold text-orange'>Project được xây dựng trên mục đích học tập</p>
          <p className='mb-2'>Theo dõi tôi qua :</p>
          <div className='flex  '>
            <a href='https://www.facebook.com/3ILLION' target='_blank' className='text-2xl mr-4' rel='noreferrer'>
              <BsFacebook />
            </a>
            <a href='/#' target='_blank' className='text-2xl mr-4'>
              <BsInstagram />
            </a>
            <a href='/#' target='_blank' className='text-2xl'>
              <BsGithub />
            </a>
          </div>
        </div>
        <div>
          <p className='mb-4 font-semibold'>CÁC CHỨC NĂNG CỦA PROJECT</p>
          <div className='flex flex-col space-y-3 text-xs'>
            <p>Trung Tâm Trợ Giúp</p>
            <p>Hướng Dẫn Mua Hàng</p>
            <p>Hướng Dẫn Bán Hàng</p>
            <p>Trả Hàng & Hoàn Tiền</p>
            <p>Chăm Sóc Khách Hàng</p>
            <p>Chính Sách Bảo Hành</p>
          </div>
        </div>
        <div>
          <p className='mb-4 font-semibold'>Project TypeScript Shopping Mini</p>
          <div className='flex flex-col space-y-3 text-xs'>
            <p>ReactTypescript</p>
            <p>React Hook Form</p>
            <p>TailwindCSS</p>
            <p>ESLINT</p>
            <p>Github</p>
          </div>
        </div>
        <div>
          <p className='mb-4 font-semibold'>Mời mọi người xem và đánh giá project này !</p>
        </div>
      </div>
      <div className='flex justify-center mt-16'>
        <p>© 2023 Trương Thanh Triều.</p>
      </div>
    </footer>
  )
}
