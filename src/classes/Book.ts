import { getAverageRating } from "../methods/book/getAverageRating";
import { getBookDetails } from "../methods/book/getBookDetails";

import type { Book as BookType, Author } from "../types/book";
import { JWT, SingleSignToken } from "../types/types";
import { Ebook } from "./Ebook";
import { Audiobook } from "./Audiobook";

export class Book {
	readonly metadata: BookType;

	readonly title: string;
	readonly authors: Author[];
	readonly description: string;
	readonly id: number;
	readonly consumableID: string;

	readonly ebook: Ebook | null;
	readonly audiobook: Audiobook | null;

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

		const sharedData: [SingleSignToken, JWT, string, boolean] = [this.token, this.JWT, this.consumableID, this.kidsMode];
		this.ebook = this.metadata.ebook ? new Ebook(...sharedData) : null;
		this.audiobook = this.metadata.abook ? new Audiobook(...sharedData, this.metadata.abook) : null;
	}


	getBookDetails = async () => {
		const details = await getBookDetails(this.consumableID, this.JWT);
		return details;
	}

	getAverageRating = async () => {
		const reviews = await getAverageRating(this.consumableID);
		return reviews;
	}
}