import { downloadAudiobook } from "../methods/book/abook/downloadAudiobook";
import { getBookmark } from "../methods/book/abook/getBookmark";
import { setBookmark } from "../methods/book/abook/setBookmark";

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
		const buffer = await downloadAudiobook(this.token, this.audiobookData.id);
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