import { encryptPassword } from "../utils/utils.js";
import type { LoginResponse } from "../types/types.js";

const URL = "https://www.storytel.com/api/login.action?m=1&uid={UID}&pwd={PASSWORD}";

export async function login(email: string, password: string) {
	const encrypted = encryptPassword(password);
	const formattedURL = URL
		.replace("{UID}", email)
		.replace("{PASSWORD}", encrypted);

	const response = await fetch(formattedURL);
	const JSON = await response.json() as LoginResponse;

	if (response.status !== 200) {
		throw new Error(JSON.message);
	}

	return JSON;
}