import type { BookDetails } from "../types/book";
import type { JWT } from "../types/types";

const URL = "https://api.storytel.net/book-details/consumables/"

export async function getBookDetails(id: number, jwt: JWT) {
	const response = await fetch(`${URL}${id}`, {
		headers: {
			'authorization': `bearer ${jwt}`,
		}
	});

	const details = await response.json() as BookDetails;

	return details
}