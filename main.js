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

  const validateInput = () => {
    let inputValue = document.querySelector('ul input').value;
    let validate = document.getElementsByClassName('.validate')
    if(inputValue === '') {
      validate.innerHTML = 'input must be filled out'
    }
  }
});