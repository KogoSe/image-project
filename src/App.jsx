import './App.scss'
import 'antd/dist/antd.css';
import NavBar from './pages/NavBar';
import Routerindex from './router/Routerindex';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Routerindex/>
    </div>
  )
}

export default App
