import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/header/iconHeader'
import './index.css'
import { Context } from './context/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context>
)
