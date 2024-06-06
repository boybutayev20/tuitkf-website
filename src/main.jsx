import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './sections/header/header.jsx'
import Hero from './sections/hero/Hero.jsx'
import News from './sections/news/News.jsx'
import { Footer } from 'flowbite-react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
       
  </React.StrictMode>,
)
