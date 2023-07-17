import { showSection }  from './modules/navigation.js';
import { bookDB } from './modules/bookDbConstruct.js';

document.addEventListener('DOMContentLoaded', () => {
  const listBtn = document.querySelector('.list-section');
  const addBtn = document.querySelector('.add-section');
  const contactBtn = document.querySelector('.contact-section');

  listBtn.addEventListener('click', () => showSection('list'));
  addBtn.addEventListener('click', () => showSection('form'));
  contactBtn.addEventListener('click', () => showSection('contact'));

  showSection('list');
});

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
  bookDB.clickToAdd();
});

bookDB.retrieveFromStorage();
bookDB.createBookshelf();
