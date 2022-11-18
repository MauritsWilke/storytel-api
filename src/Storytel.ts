import { login } from "./methods/login.js";
import { getBookshelf } from "./methods/getBookshelf.js";
import { getAccountInfo } from "./methods/getAccountInfo.js"
import { revalidateAccount } from "./methods/revalidateAccount.js";
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

	revalidateAccount = async (token?: string | null) => {
		token ??= this.singleSignToken;
		if (!token) throw new Error("No single sign token found.");
		const user = await revalidateAccount(token as SingleSignToken);
		this.refreshToken = user.accountInfo.refreshToken;
		this.singleSignToken = user.accountInfo.singleSignToken as SingleSignToken;

		return user;
	}

	getRefreshToken = () => this.refreshToken;
	getSingleSignToken = () => this.singleSignToken;

	getBookshelf = async () => {
		if (!this.singleSignToken) throw new Error("No single sign token found.");
		const bookshelf = await getBookshelf(this.singleSignToken);
		return bookshelf;
	}

	getAccountInfo = async () => {
		if (!this.singleSignToken) throw new Error("No single sign token found.");
		const accountInfo = await getAccountInfo(this.singleSignToken);
		return accountInfo;
	}
}