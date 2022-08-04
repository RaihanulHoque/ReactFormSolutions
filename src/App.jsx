import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/style.css'
import LuckPointSet from './components/LuckPointSet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
        
        <h2 className='app-heading'>Player vs Player Luck Challenge</h2>
        <div className="blog_post">
          <div className="container_copy">
            <LuckPointSet />
          </div>
          
          </div>
    </div>
  )
}

export default App
