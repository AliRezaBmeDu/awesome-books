import showSection from './modules/navigation.js';
import bookDB from './modules/bookDbConstruct.js';
import { DateTime } from "luxon";

document.addEventListener('DOMContentLoaded', () => {
  const listBtn = document.querySelector('.list-section');
  const addBtn = document.querySelector('.add-section');
  const contactBtn = document.querySelector('.contact-section');
  const clockDiv = document.querySelector('.clock');

  listBtn.addEventListener('click', () => showSection('list'));
  addBtn.addEventListener('click', () => showSection('form'));
  contactBtn.addEventListener('click', () => showSection('contact'));

  showSection('list');

  function updateClock() {
      const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
      clockDiv.textContent = now;
    }

    // Update the clock initially
    updateClock();

    // Update the clock every second
    setInterval(updateClock, 1000);

});

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
  bookDB.clickToAdd();
});


bookDB.retrieveFromStorage();
bookDB.createBookshelf();
