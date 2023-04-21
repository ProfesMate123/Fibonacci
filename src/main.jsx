import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import{Rutas} from './Rutas/Rutas'
import { BrowserRouter } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rutas/>
    </BrowserRouter>
  </React.StrictMode>
)
