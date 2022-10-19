import React from 'react'

type Props = {
    children: JSX.Element
}

const Navbar: React.FC<Props> = ({children}) => {
  return (
    <nav>
        Navbar
        {children}
    </nav>
  )
}

export default Navbar