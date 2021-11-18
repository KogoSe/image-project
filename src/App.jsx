import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import 'antd/dist/antd.css';
import DogIndex from './components/Dog_components/DogIndex';
import CatIndex from './components/Cat_components/CatIndex';

function App() {
  const [count, setCount] = useState(0)
  return (
    <DogIndex/>
  )
}

export default App
