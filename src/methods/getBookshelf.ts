import { Book } from "../Book.js";
import type { Book as BookType } from "../types/book";
import type { SingleSignToken } from "../types/types";

const URL = "https://www.storytel.com/api/getBookShelf.action?token={TOKEN}";

export async function getBookshelf(token: SingleSignToken): Promise<Book[]> {
	const formattedURL = URL.replace("{TOKEN}", token);

	const response = await fetch(formattedURL);
	const JSON = await response.json();

	if (response.status !== 200 || !JSON?.books) {
		throw new Error(JSON.message);
	}

	const books = JSON.books.map((v: BookType) => new Book(v))

	return books;
}