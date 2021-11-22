import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Main_Router } from '../model/RouterModel'
import { Button } from 'antd';

const NavBar = () => {
    const [mainRouter,setMainRouter] = useState(Main_Router)
    return (
        <header>
            <nav>
                <ul>
                {mainRouter.length !== 0 ? <>
               {mainRouter.map((res,i)=>{
                   return <li key={i}>
                       <NavLink to={res.routerPath}>  <>
    <Button >{res.routerName}</Button>
  </> </NavLink>
                   </li>
               
                })}
               
               </> : <></>}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar