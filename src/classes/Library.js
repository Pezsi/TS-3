"use strict";
// src/classes/Library.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (id) {
        this.books = this.books.filter(function (book) { return book.id !== id; });
    };
    Library.prototype.findBookById = function (id) {
        return this.books.find(function (book) { return book.id === id; });
    };
    Library.prototype.listAllBooks = function () {
        return this.books;
    };
    return Library;
}());
exports.Library = Library;
