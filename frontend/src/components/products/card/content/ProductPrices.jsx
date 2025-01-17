const convertCurrency = (price) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

export default function ProductPrices({ price }) {
  const prevPriceInCurrency = convertCurrency(price.prev)
  const currPriceInCurrency = convertCurrency(price.curr)
  const installmentPriceInCurrency = convertCurrency(price.installments.price)

  return (
    <div className="my-3">
      <p className="text-sm line-through text-gray-600">{prevPriceInCurrency}</p>
      <p className="text-base font-bold">{currPriceInCurrency}</p>
      <p className="text-xs text-gray-600">{`${price.installments.amount}x de ${installmentPriceInCurrency}`}</p>
    </div>
  )
}
