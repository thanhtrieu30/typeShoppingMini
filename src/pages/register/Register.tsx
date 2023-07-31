import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { rules } from 'src/rules/rules'

interface TypeForm {
  email: string
  password: string
  confirm_Password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TypeForm>()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
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
        <div className='text-lg font-normal text-center'>Đăng ký</div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type='email'
              placeholder='Email'
              {...register('email', rules.email)}
              className='p-2  w-full outline-none border-gray-300 border mt-4 focus:shadow-md'
            />
            <div className='text-xs mt-1 text-red-600 ml-3'>{errors.email?.message}</div>
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              {...register('password', rules.password)}
              className='p-2  w-full outline-none border-gray-300 border mt-2 focus:shadow-md'
            />
            <div className='text-xs mt-1 text-red-600 ml-3'>{errors.password?.message}</div>
          </div>
          <div>
            <input
              type='password'
              placeholder='Nhập lại Password'
              {...register('confirm_Password', rules.confirm_password)}
              className='p-2  w-full outline-none border-gray-300 border focus:shadow-md mt-2'
            />
            <div className='text-xs mt-1 text-red-600 ml-3'>{errors.confirm_Password?.message}</div>
          </div>
          <div>
            <button type='submit' className='mt-3 w-full p-2 text-center bg-orange text-white '>
              Đăng ký
            </button>
          </div>
        </form>
        <div className='mt-2 text-center text-sm'>
          <p>
            Bạn đã có tài khoản ?{' '}
            <Link to='/login' className='text-sky-700'>
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
