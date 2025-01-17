import ProductDescription from './ProductDescription'
import ProductAction from './ProductAction'

export default function ProductFooter({ isHovered, product }) {
  const { description } = product
  return (
    <>
      {/* For Web */}
      <div className="sm:flex flex-auto hidden">
        {isHovered ? ( //
          <ProductAction />
        ) : (
          <ProductDescription description={description} />
        )}
      </div>

      {/* For Mobile */}
      <div className="flex flex-col sm:hidden">
        <ProductDescription description={description} />
        <ProductAction />
      </div>
    </>
  )
}
