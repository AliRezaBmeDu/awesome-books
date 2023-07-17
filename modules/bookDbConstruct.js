class BookDB {
    constructor() {
      this.books = [
        {
          title: 'Hamlet',
          author: 'Shakespeare',
        },
        {
          title: 'Deception Point',
          author: 'Dan Brown',
        },
        {
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
        },
        {
          title: 'The Song of Ice and Fire',
          author: 'George R.R. Martin',
        },
      ]; // initializing the book database
    }
  
    retrieveFromStorage() {
      const storedBookDB = localStorage.getItem('bookDB');
      if (storedBookDB) {
        this.books = JSON.parse(storedBookDB);
      }
    }
  
    storeToStorage() {
      localStorage.setItem('bookDB', JSON.stringify(this.books));
    }
  
    createBookshelf() {
      const bookshelf = document.getElementById('books');
      bookshelf.innerHTML = '';
  
      this.books.forEach((book) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('singlebook');
        bookElement.innerHTML = `
            <div class="book-detail">"<strong>${book.title}</strong>"  <strong>by</strong> ${book.author}</div>
            <button class="remove" onclick="bookDB.removeBook('${book.title}', '${book.author}')">remove</button>
            `;
        bookshelf.appendChild(bookElement);
      });
    }
  
    clickToAdd() {
      const title = document.getElementById('new-title');
      const author = document.getElementById('new-author');
  
      const newTitle = title.value;
      const newAuthor = author.value;
  
      if (newTitle && newAuthor) {
        const newBook = { title: newTitle, author: newAuthor };
        this.books.push(newBook);
        this.storeToStorage();
        this.createBookshelf();
      } else {
        this.createBookshelf();
      }
    }
  
    removeBook(title, author) {
      this.books = this.books.filter((book) => book.title !== title || book.author !== author);
      this.storeToStorage();
      this.createBookshelf();
    }
  }
  
  export const bookDB = new BookDB();