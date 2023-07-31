import type { RegisterOptions } from 'react-hook-form'

type Rule = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const rules: Rule = {
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
    }
  }
}
