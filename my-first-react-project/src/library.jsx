import './library.css'


export function CreateBook(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.bookInfo = function() {
        return <p>{this.title} by {this.author}, {this.pages} pages, {this.read ? 'read' : 'not read yet'}</p>
    }
}

export function AddToLibrary(book_obj, library){
    library.push(book_obj)
    return library
}

export function BookForm(){

    const handleAddBook = (e) => {
        e.preventDefault()
        if (document.getElementById('book_title').value === '' || document.getElementById('book_author').value === '' || document.getElementById('book_pages').value === ''){
            alert('Please fill in all fields')
        } else {
            let title = document.getElementById('book_title').value
            let author = document.getElementById('book_author').value
            let pages = document.getElementById('book_pages').value
            let read = document.getElementById('book_read').checked

            let new_book = new CreateBook(title, author, pages, read)
            console.log(new_book)

            // Reset the input fields
            document.getElementById('book_title').value = ''
            document.getElementById('book_author').value = ''
            document.getElementById('book_pages').value = ''
            document.getElementById('book_read').checked = false
        }
    }

    return (
        <>
            <form id="book_form">
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


