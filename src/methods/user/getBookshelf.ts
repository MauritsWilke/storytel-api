import { Book } from "../../classes/Book.js";
import type { Book as BookType } from "../../types/book";
import type { JWT, SingleSignToken } from "../../types/types";

const URL = "https://www.storytel.com/api/getBookShelf.action?token={TOKEN}";

export async function getBookshelf(token: SingleSignToken, jwt: JWT, kidsMode: boolean): Promise<Book[]> {
	const formattedURL = URL.replace("{TOKEN}", token);

	const response = await fetch(formattedURL);
	const json = await response.json();

	if (!response.ok || !json?.books) throw new Error(json.message);


	const books = json.books.map((v: BookType) => new Book(v, jwt, token, kidsMode))

	return books;
}