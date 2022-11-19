import { getBookshelf } from "./methods/getBookshelf.js";
import { getAccountInfo } from "./methods/getAccountInfo.js"
import { revalidateAccount } from "./methods/revalidateAccount.js";

import type { SingleSignToken, LoginResponse } from "./types/types";

export class User {
	private singleSignToken: SingleSignToken;
	LoginResponse: LoginResponse;

	constructor(user: LoginResponse) {
		this.LoginResponse = user;
		this.singleSignToken = user.accountInfo.singleSignToken as SingleSignToken;
	}

	revalidateAccount = async (token?: string | null) => {
		token ??= this.singleSignToken;
		if (!token) throw new Error("No single sign token found.");
		const user = await revalidateAccount(token as SingleSignToken);
		this.singleSignToken = user.accountInfo.singleSignToken as SingleSignToken;

		return user;
	}

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