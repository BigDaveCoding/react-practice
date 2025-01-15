import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyFirstGreeting from './greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFirstGreeting />
    <App />
  </StrictMode>,
)
