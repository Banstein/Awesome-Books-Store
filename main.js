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
    storeBooks();
    displayBooks();
  }; 
 
};

// add Button
btnAdd.addEventListener('click', () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  addBook(title, author);
});

//store books into local storage
function storeBooks () {
  localStorage.setItem('books', JSON.stringify(books));
  document.querySelector('.input-title').value = '';
  document.querySelector('.input-author').value = '';
}

//display Books
function displayBooks () { 
  const displayBook = document.querySelector('ul');

  books.forEach(bookObj => {
    displayBook.innerHTML += `
    <h3>${bookObj.title}</h3>
    <h3>${bookObj.author}</h3>
    <input type='button' value='Remove'>
  `
  });    
}

// remove books
function removeBooks() {
  
}