// src/classes/User.ts

import { Library } from "./Library";
import { Book } from "./Book";

export class User {
  constructor(
    public userId: string,
    public name: string,
    public email: string
  ) {}

  borrowBook(library: Library, bookId: string): Book | undefined {
    const book = library.findBookById(bookId);
    if (book) {
      library.removeBook(bookId);
    }
    return book;
  }
}