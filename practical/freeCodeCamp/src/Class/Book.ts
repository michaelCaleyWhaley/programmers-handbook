import { v4 as uuidv4 } from 'uuid';

type BookType = { title: string };

class Book {
  id: string;
  title: string;
  content: string[];

  constructor({ title }: BookType) {
    this.id = uuidv4();
    this.title = title;
    this.content = ['book content'];
  }
}

export { Book };
