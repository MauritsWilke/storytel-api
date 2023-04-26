import { SingleSignToken } from "../../../types/types";

const URL = "https://www.storytel.com/mp3streamRangeReq?startposition=0&programId={ID}&token={TOKEN}";

export async function download(token: SingleSignToken, id: number) {
	const formattedURL = URL
		.replace("{ID}", id.toString())
		.replace("{TOKEN}", token);

	const response = await fetch(formattedURL);
	if (!response.ok) throw new Error(response.statusText);

	console.log(formattedURL)

	const blob = await response.arrayBuffer();

	return blob;
}