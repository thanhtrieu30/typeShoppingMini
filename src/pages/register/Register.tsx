import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/input'
import { schema, Schema } from 'src/rules/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from 'src/api/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ResponseAPI } from 'src/types/utils.type'

type TypeForm = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<TypeForm>({
    resolver: yupResolver(schema)
  })
  // logic register
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<TypeForm, 'confirm_Password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_Password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseAPI<Omit<TypeForm, 'confirm_Password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<TypeForm, 'confirm_Password'>, {
                message: formError[key as keyof Omit<TypeForm, 'confirm_Password'>],
                type: 'Server'
              })
            })
          }
          // if (formError?.email) {
          //   setError('email', {
          //     message: formError.email,
          //     type: 'Server'
          //   })
          // }
          // if (formError?.password) {
          //   setError('password', {
          //     message: formError.password,
          //     type: 'Server'
          //   })
          // }
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
