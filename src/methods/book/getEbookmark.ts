import { ResponseBookmark } from "../../types/book";
import { JWT } from "../../types/types";

const URL = "https://api.storytel.net/bookmarks/positional?consumableIds={ID}&version=22.43.0"

export async function getEBookmark(jwt: JWT, consumableID: string) {
	const formattedURL = URL.replace("{ID}", consumableID);

	const response = await fetch(formattedURL, {
		headers: {
			'authorization': `bearer ${jwt}`
		}
	})

	if (!response.ok) throw new Error(response.statusText);

	const json = await response.json();
	const bookmark = json.bookmarks.filter((bookmark: ResponseBookmark) => bookmark.type === "ebook")[0] as ResponseBookmark;

	return bookmark;
}