import React, { useState, useEffect } from 'react'
import { Navbar, ListContainer, ListItem } from './components'
import { BsFillMoonStarsFill, BsFillSunFill, BsFillTrashFill } from 'react-icons/bs'

const App = () => {
  const [isDark, setIsDark] = useState(false)

  const switchTheme = () => {setIsDark(!isDark)}

  let tmp = ['Agua', 'Pasta', 'Masa de pizza', 'Queso Chéddar', 'Coca Cola', 'Patatas']

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setIsDark(true)
  }, [])

  return (
    <main className={isDark ? 
      `dark w-screen min-h-screen flex flex-col justify-center bg-slate-900` : 
      `min-h-screen w-screen flex flex-col justify-center bg-slate-50`
    }>
      <div className='max-w-md mx-auto bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md dark:shadow-[#ffffff1d]'>
        <Navbar>
          <button className='text-xl p-4 rounded-full bg-[#00000011] dark:bg-[#ffffff11]' onClick={switchTheme}>{isDark ? <BsFillSunFill /> : <BsFillMoonStarsFill />}</button>
        </Navbar>
        <ListContainer>
          {tmp.map((objeto, index): JSX.Element => {
            return(
              <ListItem key={index}>
                <>
                  <p>{objeto}</p>
                  <button><BsFillTrashFill /></button>
                </>
              </ListItem>
            )
          })}
        </ListContainer>
      </div>
    </main>
  )
}

export default App
