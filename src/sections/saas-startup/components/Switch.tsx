interface SwitchProps {
  checked: boolean
  onChange: () => void
  label?: string
}

export function Switch({ checked, onChange, label }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className="relative h-7 w-12 shrink-0 cursor-pointer rounded-full bg-slate-900 transition-colors"
    >
      <span
        className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  )
}
