import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { loginAccount } from 'src/api/auth.api'
import Input from 'src/components/input'
import { Schema, schema } from 'src/rules/rules'
import { ResponseAPI } from 'src/types/utils.type'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'

type TypeForm = Omit<Schema, 'confirm_Password'>
const loginSchema = schema.omit(['confirm_Password'])

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<TypeForm>({
    resolver: yupResolver(loginSchema)
  })

  //logic login
  const loginAccountMutation = useMutation({
    mutationFn: (body: Omit<TypeForm, 'confirm_Password'>) => loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseAPI<TypeForm>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof TypeForm, {
                message: formError[key as keyof Omit<TypeForm, 'confirm_Password'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
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
        <div className='text-lg font-normal text-center'>Đăng nhập</div>
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
