import React from 'react'
import { Formulario } from './Formulario/Formulario.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Formulario/>
  </React.StrictMode>,
)
