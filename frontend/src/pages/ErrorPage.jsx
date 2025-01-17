import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MainNavigation from '../components/navigation/MainNavigation'

export default function ErrorPage() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }, [])

  return (
    <>
      <MainNavigation />
      <h1>Some error happened!</h1>
    </>
  )
}
