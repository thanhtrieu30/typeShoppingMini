import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'
type Rule = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc !')
    .email('Email không hợp lệ !')
    .min(6, 'Vui lòng điền 6 ký tự trở lên !')
    .max(160, 'Vượt quá ký tự'),
  password: yup
    .string()
    .required('Password là bắt buộc !')
    .max(160, 'Vượt quá ký tự')
    .min(6, 'Vui lòng điền 6 ký tự trở lên !'),
  confirm_Password: yup
    .string()
    .required('Nhập lại password là bắt buộc !')
    .max(160, 'Vượt quá ký tự')
    .min(6, 'Vui lòng điền 6 ký tự trở lên !')
    .oneOf([yup.ref('password')], 'Password không trùng khớp !')
})
export type Schema = yup.InferType<typeof schema>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValue?: UseFormGetValues<any>): Rule => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc !'
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Email không hợp lệ !'
    },
    maxLength: {
      value: 160,
      message: 'Vượt quá ký tự'
    },
    minLength: {
      value: 6,
      message: 'Vui lòng điền 6 ký tự trở lên !'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc !'
    },
    maxLength: {
      value: 160,
      message: 'Vượt quá ký tự'
    },
    minLength: {
      value: 6,
      message: 'Vui lòng điền 6 ký tự trở lên !'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password là bắt buộc !'
    },
    maxLength: {
      value: 160,
      message: 'Vượt quá ký tự'
    },
    minLength: {
      value: 6,
      message: 'Vui lòng điền 6 ký tự trở lên !'
    },
    validate:
      typeof getValue === 'function'
        ? (value) => value === getValue('password') || 'Password không trùng khớp !'
        : undefined
  }
})
