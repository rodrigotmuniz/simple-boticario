import { FaChevronRight, FaShoppingBag } from "react-icons/fa";

export default function ProductActionButton() {
  return (
    <button className="bg-teal-700 flex items-center justify-center text-white gap-2 w-full p-3 rounded-md my-2">
      <FaShoppingBag />
      <span className="uppercase font-bold text-sm">Compre Agora</span>
      <FaChevronRight />
    </button>
  )
}
