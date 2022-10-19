import React from 'react'

type Props = {
    children: JSX.Element
}

const Navbar: React.FC<Props> = ({children}) => {
  return (
    <nav className='flex gap-x-6 justify-between'>
        <h2 className='font-bold text-3xl text-black dark:text-white'>Lista de la compra 🛒</h2>
        {children}
    </nav>
  )
}

export default Navbar