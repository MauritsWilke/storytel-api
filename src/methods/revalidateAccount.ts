import type { SingleSignToken, User } from "../types/types";

const URL = "https://www.storytel.com/api/v2/account/revalidation";

export async function revalidateAccount(token: SingleSignToken) {
	const response = await fetch(URL, {
		method: 'POST',
		body: JSON.stringify({
			token: token
		})
	});

	const json = await response.json() as User;

	if (response.status !== 200) {
		throw new Error(json.message);
	}

	return json;
}