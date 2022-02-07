const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const btnAdd = document.querySelector('.btn-add');
const books = [];

const addBook = (title, author) => {
  const id = Date.now();
  const bookObj = { id, title, author };
  books.push(bookObj);
  localStorage.setItem('books', JSON.stringify(books));
};

// add Button
btnAdd.addEventListener('click', () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  addBook(title, author);
});