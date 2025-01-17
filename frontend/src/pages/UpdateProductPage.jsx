import { Suspense } from 'react'
import { Await, useRouteLoaderData } from 'react-router-dom'
import Modal from '../components/modal/Modal'
import UpdateProductForm from '../components/products/update/UpdateProductForm'

export default function UpdateProductPage() {
  const { unresolvedData } = useRouteLoaderData('product-detail')

  return (
    <Suspense
      fallback={
        <h1 className="text-center ">
          <div>Está carregando...</div>
        </h1>
      }
    >
      <Await resolve={unresolvedData}>
        {(product) => (
          <Modal>
            <UpdateProductForm product={product} />
          </Modal>
        )}
      </Await>
    </Suspense>
  )
}

