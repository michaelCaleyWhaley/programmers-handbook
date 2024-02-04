import { Book } from './Book';

class Library {
  id: string;
  bookCatalogue: Record<string, Book>;

  constructor() {
    this.bookCatalogue = {};
  }

  addBookToCatalogue({ title }: { title: string }) {
    const newBook = new Book({ title });
    this.bookCatalogue[newBook.id] = newBook;
  }
}

export { Library };
