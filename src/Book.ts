import { getAverageRating } from "./methods/book/getAverageRating";
import { getBookDetails } from "./methods/book/getBookDetails";
import { getEBook } from "./methods/book/ebook/getEBook";
import { getEBookmark } from "./methods/book/ebook/getEbookmark";
import { setEBookmark } from "./methods/book/ebook/setEBookmark";

import type { Book as BookType, Author } from "./types/book";
import { JWT, SingleSignToken } from "./types/types";

export class Book {
	private JWT: JWT;
	private token: SingleSignToken;
	private kidsMode: boolean;

	readonly metadata: BookType;

	readonly title: string;
	readonly authors: Author[];
	readonly description: string;
	readonly id: number;
	readonly consumableID: string;

	constructor(book: BookType, jwt: JWT, token: SingleSignToken, kidsMode: boolean) {
		this.JWT = jwt;
		this.token = token;
		this.kidsMode = kidsMode;

		this.metadata = book;

		this.title = book.book.name;
		this.authors = book.book.authors;
		this.description = book.ebook?.description || book.abook.description || "";
		this.id = book.book.id;
		this.consumableID = book.book.consumableId;
	}

	getBookDetails = async () => {
		const details = await getBookDetails(this.consumableID, this.JWT);
		return details;
	}

	getAverageRating = async () => {
		const reviews = await getAverageRating(this.consumableID);
		return reviews;
	}

	// Audiobook functions

	// play
	// pause
	// skip
	// update bookmark

	getEBook = async () => {
		const ebook = await getEBook(this.token, this.consumableID);
		return ebook;
	}

	getEBookmark = async () => {
		const bookmark = await getEBookmark(this.JWT, this.consumableID);
		return bookmark;
	}

	setEBookmark = async (position: number) => {
		const bookmark = await setEBookmark(this.JWT, position, this.kidsMode, this.consumableID);
		return bookmark;
	}
}