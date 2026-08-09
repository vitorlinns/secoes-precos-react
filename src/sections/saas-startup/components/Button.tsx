import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'dark'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-green-600 text-white hover:bg-green-700',
  dark: 'bg-slate-900 text-white hover:bg-slate-700',
}

export function Button({ variant = 'dark', className = '', ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`cursor-pointer rounded-lg px-4 py-3.5 text-sm font-semibold transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
}
