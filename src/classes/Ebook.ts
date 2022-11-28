import { getEBook } from "../methods/book/ebook/getEBook";
import { getEBookmark } from "../methods/book/ebook/getEbookmark";
import { setEBookmark } from "../methods/book/ebook/setEBookmark";
import type { JWT, SingleSignToken } from "../types/types";

export class Ebook {
	constructor(
		private token: SingleSignToken,
		private JWT: JWT,
		private consumableID: string,
		private kidsMode: boolean
	) { }

	download = async () => {
		const ebook = await getEBook(this.token, this.consumableID);
		return ebook;
	}

	getBookmark = async () => {
		const bookmark = await getEBookmark(this.JWT, this.consumableID);
		return bookmark;
	}

	setBookmark = async (position: number) => {
		const bookmark = await setEBookmark(this.JWT, position, this.kidsMode, this.consumableID);
		return bookmark;
	}
}