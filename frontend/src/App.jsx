import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { findProductLoader } from './components/products/ProductLoaders'
import { productUpsertAction } from './components/products/update/UpdateProductForm'
import RootLayout from './layouts/RootLayout'
import ErrorPage from './pages/ErrorPage'
import ProductsPage, { productsLoader } from './pages/ProductsPage'
import UpdateProductPage from './pages/UpdateProductPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductsPage />, loader: productsLoader, action: productUpsertAction },
      { path: '/filter/:tag', element: <ProductsPage />, loader: productsLoader },
      {
        path: 'product/:productId',
        id: 'product-detail',
        loader: findProductLoader,
        children: [
          {
            path: 'edit',
            element: <UpdateProductPage />,
            action: productUpsertAction,
          },
        ],
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
