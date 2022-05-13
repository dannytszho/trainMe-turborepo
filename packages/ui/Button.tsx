import * as React from 'react'

interface IProps {
  description: string
}

const Button = ({ description }: IProps) => {
  return (
    <button
      type="button"
      className="cursor-pointer rounded-full bg-blue-400 px-4 py-1 text-white drop-shadow-lg"
    >
      {description}
    </button>
  )
}
export default Button
