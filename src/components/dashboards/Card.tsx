import { twMerge } from 'tailwind-merge'

interface Props {
  name: string
  children?: React.ReactNode
  className?: string
}

export default function Card({ name, children, className = '' }: Props) {
  return (
    <div
      className={twMerge(
        'rounded-lg border border-gray-200 p-4 shadow-md shadow-gray-100',
        className
      )}>
      <h3 className="mb-2 text-sm text-gray-500">{name}</h3>
      {children}
    </div>
  )
}
