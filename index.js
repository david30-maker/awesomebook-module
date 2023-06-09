import Display from './modules/showFunction.js';
import { DateTime } from './modules/luxon.js';

const booksList = document.querySelector('.books-list');
const addBooks = document.querySelector('.add-book');
const contactInfo = document.querySelector('.contact-info');
const books = document.querySelector('.books');
const forms = document.querySelector('.form');
const contact = document.querySelector('.cont-1');
const tag = document.querySelector('h1');
const showCurrTime = document.querySelector('.current-time');

books.style.display = 'none';
forms.style.display = 'block';
contact.style.display = 'none';
tag.style.display = 'none';

booksList.addEventListener('click', () => {
  forms.style.display = 'none';
  contact.style.display = 'none';
  books.style.display = 'block';
  tag.style.display = 'block';
});
addBooks.addEventListener('click', () => {
  forms.style.display = 'block';
  books.style.display = 'none';
  contact.style.display = 'none';
  tag.style.display = 'none';
});
contactInfo.addEventListener('click', () => {
  forms.style.display = 'none';
  books.style.display = 'none';
  tag.style.display = 'none';
  contact.style.display = 'block';
});

window.addEventListener('DOMContentLoaded', () => {
  Display.displayBooks();
});
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  Display.addBook();
  form.reset();
});

const showDateTime = () => {
  const time = DateTime.now();
  const dayTime = time.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

  showCurrTime.textContent = dayTime;
};
setInterval(showDateTime, 1000);
