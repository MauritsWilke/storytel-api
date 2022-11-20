import type { ResponseBookmark } from "../../../types/book";
import type { JWT } from "../../../types/types";

const URL = "https://api.storytel.net/bookmarks/positional?version=22.43.0";

export async function setEBookmark(jwt: JWT, position: number, kidsMode: boolean, consumableId: string) {
	const response = await fetch(URL, {
		method: "POST",
		headers: {
			'content-type': 'application/json', // Required, otherwise unsupported media type
			'authorization': `bearer ${jwt}`
		},
		body: JSON.stringify({
			"consumableId": consumableId,
			"kidsMode": kidsMode,
			"position": position,
			"secondsSinceCreated": 0,
			"type": "ebook"
		})
	})

	if (!response.ok) throw new Error(response.statusText);

	const json = await response.json();
	const bookmark = json.bookmark as ResponseBookmark;

	return bookmark;
}