
import type { Book as BookType, Author } from "./types/book";

export class Book {
	readonly metadata: BookType;

	readonly title: string;
	readonly authors: Author[];
	readonly description: string;
	readonly id: number;

	constructor(book: BookType) {
		this.metadata = book;

		this.title = book.book.name;
		this.authors = book.book.authors;
		this.description = book.ebook?.description || book.abook.description || "";
		this.id = book.book.id;
	}

	// Audiobook functions

	// play
	// pause
	// skip
	// update bookmark


	// Ebook functions
	// Get the entire epub format ebook
	// Update bookmark
}