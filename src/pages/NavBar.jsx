import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Main_Router } from '../model/RouterModel'


const NavBar = () => {
    const [mainRouter,setMainRouter] = useState(Main_Router)
    return (
        <header>
            <nav>
                <ul>
                {mainRouter.length !== 0 ? <>
               {mainRouter.map((res,i)=>{
                   return <li key={i}>
                       <NavLink to={res.routerPath}> {res.routerName}</NavLink>
                   </li>
               
                })}
               
               </> : <></>}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar