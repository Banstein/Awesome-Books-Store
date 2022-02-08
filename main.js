const bookList = document.querySelector('#book-list');
const addBtn = document.querySelector('#add-btn');
let books = [];

const printErrorMsg = (message) => {
  const errMsg = document.querySelector('.err-msg');
  errMsg.style.color = 'red';
  document.querySelector('.err-msg').textContent = message;
  setTimeout(() => {
    document.querySelector('.err-msg').textContent = '';
  }, 2000);
};

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  static addBook(id, title, author) {
    if (title === '' || author === '') {
      printErrorMsg('Please fill all the fields');
    } else {
      const newBook = new Book(id, title, author);
      books.push(newBook);
      localStorage.setItem('books', JSON.stringify(books))
    }
  }
  static removeBook(id) {
    books = books.filter((book) => book.id !== id);
  }
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = Date.now()
  addBook(id, title, author)
});