/* eslint-disable  max-classes-per-file */
/*import Book from './in.js';

export default class Display {
  static getBooks = () => {
    let books;
    if (localStorage.getItem('books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  };

  static addRemoveEvent = () => {
    const removeBtn = document.querySelectorAll('.removeBtn');
    removeBtn.forEach((Btn) => Btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.removeBook(Btn.id);
    }));
  };

  static displayBooks = () => {
    const book = document.querySelector('.books');
    const books = Display.getBooks();
    let display = '';
    books.forEach((book, i) => {
      display += `
          <div class="booksAdded" id="book-display">
          <p>"${book.title}" by ${book.author}</p>
          <button class="removeBtn" id="${i}">Remove</button>
          </div>`;
    });
    book.innerHTML = display;
    this.addRemoveEvent();
  };

  static addBook = () => {
    const titleInput = document.querySelector('#f-name').value;
    const authorInput = document.querySelector('#l-name').value;
    if (titleInput !== '' && authorInput !== '') {
      const newBook = new Book(titleInput, authorInput);
      const books = Display.getBooks();
      books.push(newBook);
      localStorage.setItem('books', JSON.stringify(books));
      this.displayBooks();
    }
  };

  static removeBook = (id) => {
    const books = Display.getBooks();
    books.splice(id, 1);
    localStorage.setItem('books', JSON.stringify(books));
    this.displayBooks();
  };
}*/
