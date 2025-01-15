import React, { useState } from 'react';
import './library.css'

export const My_books = [
    new CreateBook('The Hobbit', 'J.R.R. Tolkien', 295, true),
];

export function CreateBook(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.bookInfo = function() {
        return <p>{this.title} by {this.author}, {this.pages} pages, {this.read ? 'read' : 'not read yet'}</p>
    }
}

// export function AddToLibrary(book_obj, library){
//     library.push(book_obj)
//     return library
// }

export function BookForm({ setBooks }){

    const handleAddBook = (e) => {
        e.preventDefault()
        if (document.getElementById('book_title').value === '' || document.getElementById('book_author').value === '' || document.getElementById('book_pages').value === ''){
            console.log('All fields must be filled')
            return
        } else {
            let title = document.getElementById('book_title').value
            let author = document.getElementById('book_author').value
            let pages = document.getElementById('book_pages').value
            let read = document.getElementById('book_read').checked

            const new_book = new CreateBook(title, author, pages, read)
            // AddToLibrary(new_book, My_books)
            // console.log(My_books)

            setBooks((prev_books) => [...prev_books, new_book])

            // Reset the input fields
            document.getElementById('book_title').value = ''
            document.getElementById('book_author').value = ''
            document.getElementById('book_pages').value = ''
            document.getElementById('book_read').checked = false
            // document.getElementsByClassName('.book_form').reset()
            document.querySelector('.book_form').classList.add('hidden');
        }
    }

    return (
        <>
            
            <form className="book_form hidden">

                <h2 className="form_title">Add a Book</h2>

                <label htmlFor="book_title">Title</label>
                <input placeholder="book title" type="text" id="book_title"/>

                <label htmlFor="book_author">Author</label>
                <input placeholder="book author" type="text" id="book_author"/>

                <label htmlFor="book_pages">Pages</label>
                <input placeholder="pages" type="number" id="book_pages"/>

                <label htmlFor="book_read">Read</label>
                <input type="checkbox" id="book_read"/>

                <span></span>
                <input type="submit" id="submit" value="Add Book" onClick={handleAddBook}/>

            </form>
        </>
    )
}

export function DisplayBooks(){

    const [books, setBooks] = useState(My_books)

    return (
        <>
            <div className="container">
                <h2>My Books</h2>
                
                {books.map((book, i) => (
                    <div className="book_div" key={`book_${i}`}>
                        {book.bookInfo()}
                    </div>
                ))}

                <button id="add_book" onClick={() => document.querySelector('.book_form').classList.toggle('hidden')}>Add Book</button>

                <BookForm setBooks={setBooks} />
                
            </div>
        </>
    )
}
