import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import ProductsList from '../components/products/ProductsList'

export default function ProductsPage() {
  const { unresolvedData } = useLoaderData()
  return (
    <>
      <Suspense
        fallback={
          <h1 className="text-center ">
            <div>Está carregando...</div>
          </h1>
        }
      >
        <Await resolve={unresolvedData}>{(products) => <ProductsList data={products} />}</Await>
      </Suspense>
    </>
  )
}

const fetchProducts = async (params) => {
  const filter = params?.tag ? `?tag=${params.tag}` : ''
  const response = await fetch(`${process.env.BASE_URL}${filter}`)
  const resData = await response.json()
  return resData
}

export function productsLoader(data) {
  return { unresolvedData: fetchProducts(data.params) }
}

