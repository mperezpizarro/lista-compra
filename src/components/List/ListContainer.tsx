import React from 'react'

type Props = {
    children: JSX.Element | JSX.Element[]
}

const ListContainer: React.FC<Props> = ({children}) => {
  return (
    <ul className='my-6 flex flex-col gap-y-8 text-black dark:text-white font-light'>
      {children}
    </ul>
  )
}

export default ListContainer