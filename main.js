// const auth = require("registry-auth-token");

const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const btnAdd = document.querySelector('.btn-add');
const books = [];

// add Book
const addBook = (title, author) => {
  if (title === '' || author === '') {
    const validate = document.querySelector('.validate');
    validate.innerHTML = 'input must be filled out';
  } else {
    const id = Date.now();
    const bookObj = { id, title, author };
    books.push(bookObj);
    localStorage.setItem('books', JSON.stringify(books));
    document.querySelector('.input-title').value = '';
    document.querySelector('.input-author').value = '';
  }
};

// add Button
btnAdd.addEventListener('click', () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  addBook(title, author);
});
