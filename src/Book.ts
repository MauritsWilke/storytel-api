import { getAverageRating } from "./methods/getAverageRating";
import { getBookDetails } from "./methods/getBookDetails";

import type { Book as BookType, Author } from "./types/book";
import { JWT } from "./types/types";

export class Book {
	private JWT: JWT;

	readonly metadata: BookType;

	readonly title: string;
	readonly authors: Author[];
	readonly description: string;
	readonly id: number;

	constructor(book: BookType, jwt: JWT) {
		this.JWT = jwt;

		this.metadata = book;

		this.title = book.book.name;
		this.authors = book.book.authors;
		this.description = book.ebook?.description || book.abook.description || "";
		this.id = book.book.id;
	}

	getBookDetails = async () => {
		const details = await getBookDetails(this.id, this.JWT);
		return details;
	}

	getAverageRating = async () => {
		const reviews = await getAverageRating(this.id);
		return reviews;
	}

	getSimilarBooks = () => {

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