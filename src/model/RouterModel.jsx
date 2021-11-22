import Homepage from "../pages/homepage"
import Dogpage from "../pages/Dogpage"
import Catpage from "../pages/Catpage"


export const Main_Router =[
    {
        id:1,
        routerName:"Home",
        routerPath:"/user/home",
        routerComponent:<Homepage/>
    },
    {
        id:2,
        routerName:"Dog",
        routerPath:"/user/dog",
        routerComponent:<Dogpage/>
    },
    {
        id:3,
        routerName:"Cat",
        routerPath:"/user/cat",
        routerComponent:<Catpage/>
    }
    
]

export const AUTH_ROUTER = []