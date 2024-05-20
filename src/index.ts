// src/index.ts

import { Book } from "./classes/Book";
import { Library } from "./classes/Library";
import { User } from "./classes/User";

// Példa adatok
const book1 = new Book("1", "TypeScript Basics", "John Doe", 29.99);
const book2 = new Book("2", "Advanced TypeScript", "Jane Doe", 39.99);

const library = new Library();
library.addBook(book1);
library.addBook(book2);

const user = new User("user1", "Alice Smith", "alice@example.com");

console.log("Könyvek a könyvtárban:");
console.log(library.listAllBooks());

console.log("Alice kölcsönöz egy könyvet:");
const borrowedBook = user.borrowBook(library, "1");
console.log(borrowedBook);

console.log("Könyvek a könyvtárban kölcsönzés után:");
console.log(library.listAllBooks());