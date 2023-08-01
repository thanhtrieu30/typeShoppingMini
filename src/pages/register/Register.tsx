import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/input'
import { schema, Schema } from 'src/rules/rules'
import { yupResolver } from '@hookform/resolvers/yup'

type TypeForm = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<TypeForm>({
    resolver: yupResolver(schema)
  })

  // const rules = getRules(getValues)
  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    () => {
      const password = getValues('password')
      console.log(password)
    }
  )
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
          <Input
            type='email'
            placeholder='Email'
            register={register}
            errorMessage={errors.email?.message}
            name='email'
            // rules={rules.email}
            autocomplete='on'
            // className='p-2  w-full outline-none border-gray-300 border mt-4 focus:shadow-md'
          />
          <Input
            type='password'
            placeholder='Password'
            register={register}
            errorMessage={errors.password?.message}
            name='password'
            // rules={rules.password}
            autocomplete='on'
            // className='p-2  w-full outline-none border-gray-300 border mt-4 focus:shadow-md'
          />
          <Input
            type='password'
            placeholder='Nhập lại Password'
            register={register}
            errorMessage={errors.confirm_Password?.message}
            name='confirm_Password'
            // rules={rules.confirm_password}
            autocomplete='on'
            // className='p-2  w-full outline-none border-gray-300 border mt-4 focus:shadow-md'
          />

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
