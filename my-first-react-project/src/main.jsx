import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyFirstGreeting, MyFavouriteFoods } from './greeting.jsx'


const fav_foods = ['Pizza', 'Pasta', 'Burger', 'Sandwich', 'Hotdog']

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFirstGreeting />
    <MyFavouriteFoods foods={fav_foods} />
    <App />
  </StrictMode>,
)
