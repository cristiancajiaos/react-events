import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  const shoot = () => {
    alert('Great shot!')
  }

  return (
    <section className="container my-2">
      <button className="btn btn-primary" onClick={shoot}>Shoot</button>
    </section>
  )
}

export default App
