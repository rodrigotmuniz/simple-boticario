import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/navigation/MainNavigation'

export default function RootLayout() {
  return (
    <div className=" w-full lg:max-w-screen-lg  md:max-w-screen-md sm:max-w-screen-sm sm:m-auto h-screen">
      <MainNavigation />
      <Outlet />
    </div>
  )
}
