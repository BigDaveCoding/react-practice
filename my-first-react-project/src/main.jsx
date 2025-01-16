import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { MyFirstGreeting, MyFavouriteFoods, BookConstructor } from './greeting.jsx'

// import { CreateBook, BookForm, My_books, DisplayBooks } from './library.jsx'




const fav_foods = ['Pizza', 'Pasta', 'Burger', 'Sandwich', 'Hotdog']

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyFirstGreeting />
    <DisplayBooks /> */}
    <App />
  </StrictMode>,
)
