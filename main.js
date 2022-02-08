const bookList = document.querySelector('#book-list');
const addBtn = document.querySelector('#add-btn');
let books = [];

class Book {
  constructor(title, author) {
    this.id = Date.now();
    this.title = title;
    this.author = author;
  }

  static addBook(title) {
    if (title === '' || author === '') {
      printErrorMsg('Please fill all the fields');
    } else {
      const newBook = new Book(title, author);
      books.push(newBook);
    }
  }

  static removeBook(id) {
    books = books.filter((book) => book.id !== id);
  }
}