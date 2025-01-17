import { NavLink } from "react-router-dom"

const NAV = [
  { path: '/', name: 'Produtos' },
  { path: '/filter/new-arrivals', name: 'Lançamentos' },
  { path: '/filter/gifts', name: 'Presentes' },
  { path: '/filter/promotions', name: 'Promos' },
  { path: '/filter/fragrances', name: 'Perfumaria' },
]

export default function NavigationSection(isMenuOpen) {
  const setActiveClassName = ({ isActive }) => {
    const defaultClasses = 'hover:underline underline-offset-4 decoration-2'
    return `${defaultClasses} ${isActive ? 'underline underline-offset-4 decoration-2 font-bold' : ''}`
  }

  return <div className={` ${isMenuOpen ? 'block' : 'hidden'} lg:block border-b  border-gray-500 mb-4`}>
  <nav>
    <ul className="flex flex-col items-center sm:flex-row justify-center flex-wrap lg:flex-nowrap gap-8 p-4">
      {NAV.map(({ path, name }) => (
        <li key={path}>
          <NavLink to={path} end className={setActiveClassName}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
</div>
}