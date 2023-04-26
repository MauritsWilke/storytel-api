import { download } from "../methods/book/abook/download.js";
import { getBookmark } from "../methods/book/abook/getBookmark.js";
import { setBookmark } from "../methods/book/abook/setBookmark.js";

import type { abook } from "../types/book";
import type { JWT, SingleSignToken } from "../types/types";

export class Audiobook {
	constructor(
		private token: SingleSignToken,
		private JWT: JWT,
		private consumableID: string,
		private kidsMode: boolean,
		private audiobookData: abook
	) { }

	download = async () => {
		const buffer = await download(this.token, this.audiobookData.id);
		return buffer;
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