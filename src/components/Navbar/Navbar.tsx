import React from 'react'

type Props = {
    children: JSX.Element
}

const Navbar: React.FC<Props> = ({children}) => {
  return (
    <nav className='flex gap-x-6 justify-between items-center text-black dark:text-white'>
        <h2 className='font-bold text-3xl'>Lista de la compra 🛒</h2>
        {children}
    </nav>
  )
}

export default Navbar