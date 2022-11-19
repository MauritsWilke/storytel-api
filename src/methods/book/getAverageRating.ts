import type { AverageRating } from "../../types/book";

const URL = "https://api.storytel.net/review-service/ratings/{ID}/averageRating";

export async function getAverageRating(id: string) {
	const formattedURL = URL.replace("{ID}", id.toString());

	const response = await fetch(formattedURL);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const json = await response.json() as AverageRating;

	return json;
}