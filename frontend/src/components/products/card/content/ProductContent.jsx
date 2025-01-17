import ProductStarRating from "./ProductStarRating"
import ProductPrices from "./ProductPrices"

export default function ProductContent({product}) {
  const {brand, title, rating, price} = product
  return (
    <>
      <p className="uppercase text-xs font-bold">{brand}</p>
      <p className="text-sm mb-3 hover:text-green-800">{title}</p>
      <ProductStarRating rating={+rating} />
      <ProductPrices price={price} />
    </>
  )
}
