import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function ProductSeeMoreLink() {
  return (
    <Link className="flex w-full items-center text-xs font-bold gap-2 text-teal-900 ">
      <span className="">Veja Mais</span>
      <FaChevronRight />
    </Link>
  )
}
