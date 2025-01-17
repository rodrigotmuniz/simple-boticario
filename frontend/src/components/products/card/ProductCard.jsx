import { useState } from 'react'
import UpdateProductPage from '../../../pages/UpdateProductPage'
import ProductContent from './content/ProductContent'
import ProductFooter from './footer/ProductFooter'
import ProductHeader from './header/ProductHeader'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)

  const mouseEnterHandler = () => setIsHovered(() => true)
  const mouseLeaveHandler = () => setIsHovered(() => false)
  const toggleUpdateModalHandler = () => setShowUpdateModal((cur) => !cur)

  return (
    <div
      className="h-[526px] p-[10px] border border-gray-200 rounded-sm font-product flex flex-col"
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
    >
      {showUpdateModal && <UpdateProductPage product={product} onToggleUpdateModal={toggleUpdateModalHandler} />}
      {/* <Link to={`product/${product._id}/edit`}> */}
        <ProductHeader product={product} onToggleUpdateModal={toggleUpdateModalHandler} />
        <ProductContent product={product} />
      {/* </Link> */}
      <ProductFooter isHovered={isHovered} product={product} />
    </div>
  )
}
