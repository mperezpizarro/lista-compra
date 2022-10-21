import React, { useState, useEffect, useCallback } from 'react'
import { Navbar, ListContainer, ListItem } from './components'
import { BsFillMoonStarsFill, BsFillSunFill, BsFillTrashFill } from 'react-icons/bs'

const App = () => {
  const [isDark, setIsDark] = useState(false)
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState<String[]>([])

  const switchTheme = () => {setIsDark(!isDark)}

  const addItem = (e: React.FormEvent) => {
    e.preventDefault()
    setItems(previous => [...previous, newItem])
    setNewItem('')
  }

  const deleteItem = (index: number) => {
    let tmp = items
    tmp.splice(index, 1)
    setItems(tmp)
    //Forces list to re-render
    setNewItem('‎')
  }

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
        <form onSubmit={addItem} className='my-4'>
          <div className='flex gap-x-4 border-2 border-black dark:border-white rounded-md'>
            <input 
              type="text" name="itemName" id="itemName" placeholder='¿Qué necesitas comprar?' value={newItem} onChange={(e)=>{setNewItem(e.target.value)}}
              className='flex-1 bg-transparent dark:text-white outline-none border-transparent px-4 py-2' 
            />
            <button type="submit" className='bg-black text-white dark:bg-white dark:text-black hover:opacity-80 px-4 py-2'>Añadir</button>
          </div>
        </form>
        <ListContainer>
          {items.map((objeto, index): JSX.Element => {
            return(
              <ListItem key={index}>
                <>
                  <p>{objeto}</p>
                  <button className='text-xl' onClick={() => deleteItem(index)}><BsFillTrashFill /></button>
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
