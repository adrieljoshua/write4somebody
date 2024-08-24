import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className='text-center text-6xl mt-20 font-royal text-primary-light '>
          Write 4 Somebody        
        </div>
        <div className='text-center text-2xl mt-20 font-royal text-primary-dark'>
        Leave messages for people, strangers or loved ones to read (or) find what people have left for you...  
        </div>
      </div>
    </>
  )
}

export default App
