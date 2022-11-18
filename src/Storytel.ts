import { login } from "./methods/login.js";
import { getBookshelf } from "./methods/getBookshelf.js";
import type { SingleSignToken } from "./types/types.js";

export class Storytel {
	private refreshToken: string | null = null;
	private singleSignToken: SingleSignToken | null = null;

	constructor() { };

	login = async (username: string, password: string) => {
		const user = await login(username, password);
		this.refreshToken = user.accountInfo.refreshToken;
		this.singleSignToken = user.accountInfo.singleSignToken as SingleSignToken;

		return user;
	}

	getRefreshToken = () => this.refreshToken;
	getSingleSignToken = () => this.singleSignToken

	getBookshelf = async () => {
		if (!this.singleSignToken) throw new Error("No single sign token found.");
		const bookshelf = await getBookshelf(this.singleSignToken);
		return bookshelf;
	}
}