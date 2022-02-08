const displayBooks = document.querySelector('#book-list');
const addBtn = document.querySelector('#add-btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

let books = [];

const addLocalStorage = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

const printErrorMsg = (message) => {
  document.querySelector('.err-msg').innerHTML = message;
  setTimeout(() => {
    document.querySelector('.err-msg').innerHTML = '';
  }, 2000);
};

const displayBook = (id, books) => {
  displayBooks.innerHTML = '';
  books.forEach((book) => {
    const li = document.createElement('li');
    const br = document.createElement('br');
    li.innerHTML = `
    <h3>${book.title}</h3>
    <h3>${book.author}</h3>
    <br>
    <hr>`;
    const removeBookBtn = document.createElement('button');
    removeBookBtn.textContent = 'Remove';
    li.insertBefore(removeBookBtn, li.lastElementChild);
    li.appendChild(br);
    displayBooks.appendChild(li);
    removeBookBtn.addEventListener('click', () => {
      books = books.filter((book) => {
        if (book.id !== id) {
          return true;
        }
        return false;
      });
      addLocalStorage(books);
      li.remove();
    });
  });
};

class Book {
  constructor(title, author) {
    this.id = Date.now();
    this.title = title;
    this.author = author;
  }

  static addBook(title, author) {
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

const addNewBook = () => {
  Book.addBook(titleInput.value, authorInput.value);
  titleInput.value = '';
  authorInput.value = '';
  addLocalStorage(books);
  displayBook(displayBooks, books);
};

books.forEach((book) => {
  displayBooks(book.id, book.title, book.author);
});

addBtn.addEventListener('click', addNewBook);
