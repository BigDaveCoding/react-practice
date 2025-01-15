import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyFirstGreeting, MyFavouriteFoods, BookConstructor } from './greeting.jsx'

import { CreateBook, AddToLibrary, BookForm } from './library.jsx'

const my_books = []

AddToLibrary(new CreateBook('The Hobbit', 'J.R.R. Tolkien', 295, true), my_books)
console.log(my_books)


const fav_foods = ['Pizza', 'Pasta', 'Burger', 'Sandwich', 'Hotdog']

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFirstGreeting />
    <MyFavouriteFoods foods={fav_foods} />
    {my_books.map((book, index) => (
      <div key={`book_${index}`}>
        {book.bookInfo()}
      </div>
    ))}
    <BookForm />
    <App />
  </StrictMode>,
)
