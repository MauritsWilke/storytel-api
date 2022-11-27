import { getAverageRating } from "./methods/book/getAverageRating";
import { getBookDetails } from "./methods/book/getBookDetails";
import { getEBook } from "./methods/book/ebook/getEBook";
import { getEBookmark } from "./methods/book/ebook/getEbookmark";
import { setEBookmark } from "./methods/book/ebook/setEBookmark";
import { downloadAudiobook } from "./methods/book/abook/downloadAudiobook"

import type { Book as BookType, Author } from "./types/book";
import { JWT, SingleSignToken } from "./types/types";

export class Book {
	readonly metadata: BookType;

	readonly title: string;
	readonly authors: Author[];
	readonly description: string;
	readonly id: number;
	readonly consumableID: string;

	constructor(
		book: BookType,
		private JWT: JWT,
		private token: SingleSignToken,
		private kidsMode: boolean
	) {
		this.metadata = book;

		this.title = book.book.name;
		this.authors = book.book.authors;
		this.description = book.ebook?.description || book.abook?.description || "";
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
	hasAudiobook = () => this.metadata.abook ? true : false; // yea !! exist ik ik

	downloadAudiobook = async () => {
		if (!this.hasAudiobook()) throw new Error("This book has no AudioBook");
		const buffer = await downloadAudiobook(this.token, this.metadata.abook!.id); // "!" because of the check above;
		return buffer;
	}


	// Ebook functions
	hasEbook = () => this.metadata.ebook ? true : false; // Yes I know I can do !!

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