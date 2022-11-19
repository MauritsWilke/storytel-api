import { login } from "./methods/login.js";
import { revalidateAccount } from "./methods/revalidateAccount.js";
import { User } from "./User.js";

import type { SingleSignToken } from "./types/types.js";

export class Storytel {
	constructor() { };

	signIn = async (username: string, password: string) => {
		const LoginResponse = await login(username, password);
		const user = new User(LoginResponse);

		return user;
	}

	signInUsingSingleSignToken = async (token: string) => {
		if (!token) throw new Error("No single sign token found.");
		const LoginResponse = await revalidateAccount(token as SingleSignToken);
		const user = new User(LoginResponse);

		return user;
	}
}