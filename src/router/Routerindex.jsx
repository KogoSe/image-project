import React,{useState} from "react";
import { Main_Router } from "../model/RouterModel";
import {Routes,Route} from 'react-router-dom'


const Routerindex = () => {
    const[mainRouter,setmainRouter] = useState(Main_Router)
    return (
        <>
           <Routes>
               <Route path="user">{mainRouter.length !== 0 ? <>
               {mainRouter.map((res,i)=>{
                   return <Route key={i} path={res.routerPath} element={res.routerComponent}/>
                    
                })}
               
               </> : <></>}</Route>
               
            </Routes> 
        </>
    )
}

export default Routerindex