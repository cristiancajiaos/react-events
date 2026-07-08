import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  const shoot = () => {
    alert('Great shot!')
  }

  const shootText = (text) => {
    alert(text);
  }

  return (
    <section className="container my-2">
      <button className="btn btn-primary" onClick={shoot}>Shoot</button>

      <hr/>

      <button className="btn btn-success" onClick={() => shootText("Goal!")}>
        Shoot to Goal
      </button>
    </section>
  )
}

export default App
