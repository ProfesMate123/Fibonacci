import { Route, Routes } from "react-router-dom"
import {Menu} from "../Menu/Menu"
import { Home } from "../Home/Home"

export function Rutas(){

    return (
        <>

        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        </>
       
      )


}

   


