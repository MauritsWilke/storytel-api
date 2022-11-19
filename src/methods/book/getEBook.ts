import { SingleSignToken } from "../../types/types";


const URL = "https://www.storytel.com/api/ebookStream.action?token={TOKEN}&consumableId={ID}";

export async function getEBook(token: SingleSignToken, id: string) {
	const formattedURL = URL
		.replace("{TOKEN}", token)
		.replace("{ID}", id.toString());

	const response = await fetch(formattedURL);
	const location = response.url;

	const ebookResponse = await fetch(location);
	const ebookBuffer = ebookResponse.arrayBuffer();

	return ebookBuffer;
}