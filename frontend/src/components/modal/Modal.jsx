import { useNavigate } from 'react-router-dom'
import classes from './Modal.module.css'

export default function Modal({ children, onClickOut, isOpen = true }) {
  const navigate = useNavigate()
  const closeHandler = () => (onClickOut ? onClickOut() : navigate('/'))

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open={isOpen} className={classes.modal}>
        {children}
      </dialog>
    </>
  )
}
