const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const btnAdd = document.querySelector('.btn-add');
const displayBook = document.querySelector('.inject');
let books = [];

// store books into local storage
function storeBooks() {
  localStorage.setItem('books', JSON.stringify(books));
  document.querySelector('.input-title').value = '';
  document.querySelector('.input-author').value = '';
}

// display Books
function displayBooks(id, title, author) {
  displayBook.innerHTML += `
  <li>
  <h3>${title}</h3>
  <h3>${author}</h3>
  <input type='button' value='Remove' class='remove-btn'>
  </li>
`;
}

// add Book
const addBook = (title, author) => {
  if (title === '' || author === '') {
    const validate = document.querySelector('.validate');
    validate.innerHTML = 'input must be filled out';
  } else {
    const id = Date.now();
    const bookObj = { id, title, author };
    books.push(bookObj);
    storeBooks();
    displayBooks(bookObj.id, bookObj.title, bookObj.author);
  }
};

// add Button
btnAdd.addEventListener('click', () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  addBook(title, author);
});


const getBookFromStorage = JSON.parse(localStorage.getItem('books'));
if (getBookFromStorage) {
  books = getBookFromStorage;
}

books.forEach((book) => {
  displayBooks(book.id, book.title, book.author);
});

// remove books
function removeBooks() {
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.addEventListener('click', () => {
    books.filter(book => book !== bookObj.id);   
  })

}