import { login } from "./methods/login.js";

export class Storytel {
	private refreshToken: string | null = null;
	private singleSignToken: string | null = null;

	constructor() { };

	login = async (username: string, password: string) => {
		const user = await login(username, password);
		this.refreshToken = user.accountInfo.refreshToken;
		this.singleSignToken = user.accountInfo.singleSignToken;

		return user;
	}
}