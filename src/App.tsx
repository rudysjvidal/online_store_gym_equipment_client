import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Online Store App</h1>
      <ProductList />
    </>
  )
}

export default App
