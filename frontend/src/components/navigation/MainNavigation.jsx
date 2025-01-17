import { NavLink, useNavigation } from 'react-router-dom'
import { useState } from 'react'
import NavigationSection from './NavigationSection'
import LogoSection from './LogoSection'

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <header className=" flex flex-col">
      <LogoSection toggleMenu={toggleMenu} />
      <NavigationSection isMenuOpen={isMenuOpen} />
    </header>
  )
}
