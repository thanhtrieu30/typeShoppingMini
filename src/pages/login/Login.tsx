import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='mt-10 max-h-full max-w-4xl px-12 lg:px-0 lg:max-w-6xl m-auto rounded shadow-lg grid grid-cols-1 lg:grid-cols-2'>
      <div>
        <img
          src='https://cdn.vietnambiz.vn/1881912202208555/images/2023/06/28/shopee-x-blackpink-high-res-20230628101344244.png?width=640'
          alt=''
          className='lg:rounded-r-none rounded-md m-auto'
        />
      </div>
      <div className='px-12'>
        <div className='text-lg font-normal text-center'>Đăng nhập</div>
        <form>
          <div>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='p-2  w-full outline-none border-gray-300 border mt-5 focus:shadow-md'
            />
            {/* <div className='text-xs mt-1 text-red-600 ml-3'>Email không hợp lệ !</div> */}
          </div>
          <div>
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='p-2  w-full outline-none border-gray-300 border mt-3 focus:shadow-md'
            />
          </div>
          <div>
            <button className='mt-3 w-full p-2 text-center bg-orange text-white '>Đăng nhập</button>
          </div>
        </form>
        <div className='mt-2 text-center text-sm'>
          <p>
            Bạn chưa có tài khoản ?{' '}
            <Link to='/register' className='text-sky-700'>
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
