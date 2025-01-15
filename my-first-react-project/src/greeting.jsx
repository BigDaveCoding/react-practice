export function MyFirstGreeting() {
    return <h1>Hello, world! This is my first greeting using React</h1>
}

export function MyFavouriteFoods({foods}) {
    const food_list = foods.map((food, index) => <li key={`food_${index}`}>{food}</li>)
    return food_list
}

export function BookConstructor(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.bookInfo = function() {
        return <p>{this.title} by {this.author}, {this.pages} pages, {this.read ? 'read' : 'not read yet'}</p>
    }
}