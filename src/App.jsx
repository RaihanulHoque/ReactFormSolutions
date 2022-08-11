import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/style.css'
import ControlledForm from './components/ControlledForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ width:"1250px", textAlign:"center" }}> 
        <h2 className='app-heading'>Form Solutions with React</h2>
        <div className="blog_post" style={{ margin:"0 auto" }}>
            <div className="container_copy">
                <ControlledForm />
            </div>  
        </div>
    </div>
  )
}

export default App
