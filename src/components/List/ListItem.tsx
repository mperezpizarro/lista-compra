import React from 'react'

type Props = {
  children: JSX.Element
}

const ListItem: React.FC<Props> = ({children}) => {
  return (
    <li className='flex justify-between text-lg flex-nowrap gap-x-6 border-b-[.1px] border-black/30 dark:border-white/30'>
      {children}
    </li>
  )
}

export default ListItem