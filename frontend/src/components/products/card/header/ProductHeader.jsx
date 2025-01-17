import { FaEdit,  } from 'react-icons/fa'
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'

export default function ProductHeader({ product, onToggleUpdateModal }) {
  const navigate = useNavigate()

  function editNavigateHandler() {
    navigate(`/product/${product._id}/edit`)
  }

  const { imagePath, title } = product
  return (
    <div className="relative w-full max-w-md">
      {/* Image */}
      <div>
        <img src={imagePath} alt={title} className="w-full h-52 object-contain" />
      </div>

      {/* Icon/Button
      <button
        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center"
        onClick={editNavigateHandler} 
      >
        <RiDeleteBinLine className="text-gray-400 w-6 h-6" />
      </button> */}
      {/* Icon/Button */}
      <button
        className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center"
        onClick={editNavigateHandler} 
      >
        <FaEdit className="text-gray-400 w-6 h-6" />
      </button>
    </div>
  )
}

