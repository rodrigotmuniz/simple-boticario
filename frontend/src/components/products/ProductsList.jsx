import ProductCard from './card/ProductCard'

export default function ProductsList({ data: products }) {
  return (
    <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {products.map((product) => (
        <li key={product._id} className=''>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}
