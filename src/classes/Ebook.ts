import { download } from "../methods/book/ebook/download.js";
import { getBookmark } from "../methods/book/ebook/getBookmark.js";
import { setBookmark } from "../methods/book/ebook/setBookmark.js";
import type { JWT, SingleSignToken } from "../types/types";

export class Ebook {
	constructor(
		private token: SingleSignToken,
		private JWT: JWT,
		private consumableID: string,
		private kidsMode: boolean
	) { }

	download = async () => {
		const ebook = await download(this.token, this.consumableID);
		return ebook;
	}

	getBookmark = async () => {
		const bookmark = await getBookmark(this.JWT, this.consumableID);
		return bookmark;
	}

	setBookmark = async (position: number) => {
		const bookmark = await setBookmark(this.JWT, position, this.kidsMode, this.consumableID);
		return bookmark;
	}
}