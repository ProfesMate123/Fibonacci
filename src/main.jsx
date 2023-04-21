import React from 'react'
import ReactDOM from 'react-dom/client'

//IMPORTANDO BOOSTRAP
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import { Carrusel } from './Carrusel/Carrusel'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Carrusel/>
  </React.StrictMode>,
)
