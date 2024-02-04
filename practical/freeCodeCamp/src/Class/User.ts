import { v4 as uuidv4 } from 'uuid';
import { Library } from './Library';

class User {
  id: string;
  username: string;
  bookCollection: { bookId: string; pageNo: number }[];
  fontSize: number;
  activeBook: string | null;

  constructor({ username }: { username: string }) {
    this.id = uuidv4();
    this.username = username;
    this.bookCollection = [];
    this.activeBook = '';
    this.fontSize = 12;
  }

  addBookToCollection({
    bookId,
    pageNo = 0,
  }: {
    bookId: string;
    pageNo?: number;
  }) {
    this.bookCollection.push({ bookId, pageNo });
  }

  getBookTitle({ library, bookId }: { library: Library; bookId: string }) {
    return library.bookCatalogue[bookId].title;
  }

  getActiveBook({ library }: { library: Library }) {
    const activeBook = this.activeBook
      ? this.activeBook
      : this.bookCollection[0].bookId;

    return { ...library.bookCatalogue[activeBook], fontSize: this.fontSize };
  }

  changeFontSize({ size }: { size: number }) {
    this.fontSize = size;
  }
}

export { User };
