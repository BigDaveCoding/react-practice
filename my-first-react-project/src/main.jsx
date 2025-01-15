import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyFirstGreeting, MyFavouriteFoods, BookConstructor } from './greeting.jsx'


const fav_foods = ['Pizza', 'Pasta', 'Burger', 'Sandwich', 'Hotdog']
const book_01 = new BookConstructor('The Hobbit', 'J.R.R. Tolkien', 295, true)
const book_02 = new BookConstructor('The Lord of the Rings', 'J.R.R. Tolkien', 1178, false)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFirstGreeting />
    <MyFavouriteFoods foods={fav_foods} />
    <div>
      {book_01.bookInfo()}
      {book_02.bookInfo()}
    </div>
    <App />
  </StrictMode>,
)
