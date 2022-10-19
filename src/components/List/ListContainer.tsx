import React from 'react'

type Props = {
    children: JSX.Element | JSX.Element[]
}

const ListContainer: React.FC<Props> = ({children}) => {
  return (
    <ul>{children}</ul>
  )
}

export default ListContainer