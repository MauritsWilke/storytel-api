import { getBookshelf } from "./methods/user/getBookshelf.js";
import { getAccountInfo } from "./methods/user/getAccountInfo.js"
import { revalidateAccount } from "./methods/user/revalidateAccount.js";

import type { SingleSignToken, LoginResponse, JWT } from "./types/types";

export class User {
	private singleSignToken: SingleSignToken;
	private JWT: JWT;
	LoginResponse: LoginResponse;

	constructor(user: LoginResponse) {
		this.LoginResponse = user;
		this.singleSignToken = user.accountInfo.singleSignToken as SingleSignToken;
		this.JWT = user.accountInfo.jwt as JWT;
	}

	revalidateAccount = async (token?: string | null) => {
		token ??= this.singleSignToken;
		if (!token) throw new Error("No single sign token found.");
		const user = await revalidateAccount(token as SingleSignToken);
		this.singleSignToken = user.accountInfo.singleSignToken as SingleSignToken;

		return user;
	}

	getSingleSignToken = () => this.singleSignToken;
	getJWT = () => this.JWT;

	getBookshelf = async () => {
		if (!this.singleSignToken) throw new Error("No single sign token found.");
		const bookshelf = await getBookshelf(this.singleSignToken, this.JWT);
		return bookshelf;
	}

	getAccountInfo = async () => {
		if (!this.singleSignToken) throw new Error("No single sign token found.");
		const accountInfo = await getAccountInfo(this.singleSignToken);
		return accountInfo;
	}
}