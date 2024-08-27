import { useState } from 'react'
import SearchBox from './components/SearchBox'
import Card from './components/Card'
import CardGrid from './components/CardGrid'


function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='text-center text-6xl mt-20 font-royal text-primary-light '>
            Write 4 Somebody        
          </div>
          <div className='text-center text-2xl mt-20 font-royal text-primary-dark'>
          Leave messages for people, strangers or loved ones to read (or) find what people have left for you...  
          </div>
          <SearchBox setSearchValue={setSearchValue} />
          
        </div>
        <CardGrid searchValue={searchValue} />
        

      </div>
    </>
  )
}

export default App
