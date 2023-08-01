import { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  name: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>

  rules?: RegisterOptions
  errorMessage?: string
  autocomplete?: string
}

export default function Input({ type, name, placeholder, register, errorMessage, rules, autocomplete }: Props) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className='p-2  w-full outline-none border-gray-300 border mt-2 focus:shadow-md'
        autoComplete={autocomplete}
      />
      <div className='text-xs mt-1 text-red-600 ml-3'>{errorMessage}</div>
    </div>
  )
}
