const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

export function formatPrice(value: number): string {
  return formatter.format(value)
}

export function yearlyDiscountPercent(monthly: number, yearly: number): number {
  if (monthly <= 0) return 0
  const fullYear = monthly * 12
  return Math.round(((fullYear - yearly) / fullYear) * 100)
}
