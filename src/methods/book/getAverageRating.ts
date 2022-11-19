import type { AverageRating } from "../../types/book";

const URL = "https://api.storytel.net/review-service/ratings/{ID}/averageRating";

export async function getAverageRating(id: number) {
	const formattedURL = URL.replace("{ID}", id.toString());

	const response = await fetch(formattedURL);
	const json = await response.json() as AverageRating;

	return json;
}