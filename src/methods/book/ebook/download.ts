import { SingleSignToken } from "../../../types/types";


const URL = "https://www.storytel.com/api/ebookStream.action?token={TOKEN}&consumableId={ID}";

export async function download(token: SingleSignToken, id: string) {
	const formattedURL = URL
		.replace("{TOKEN}", token)
		.replace("{ID}", id.toString());

	const response = await fetch(formattedURL);
	if (!response.ok) throw new Error(response.statusText);
	const location = response.url;

	const ebookResponse = await fetch(location);
	if (!ebookResponse.ok) throw new Error(ebookResponse.statusText);
	const ebookBuffer = ebookResponse.arrayBuffer();

	return ebookBuffer;
}