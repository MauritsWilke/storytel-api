import { downloadAudiobook } from "./methods/book/abook/downloadAudiobook";

import type { abook } from "./types/book";
import type { JWT, SingleSignToken } from "./types/types";

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
}