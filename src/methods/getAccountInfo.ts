import { Account } from "../types/account";
import type { SingleSignToken } from "../types/types";

const URL = "https://www.storytel.com/api/getPersonAccountInfo.action?token={TOKEN}";

export async function getAccountInfo(token: SingleSignToken): Promise<Account> {
	const formattedURL = URL.replace("{TOKEN}", token);

	const response = await fetch(formattedURL);
	const JSON = await response.json();

	if (response.status !== 200 || !JSON?.personInfo) {
		throw new Error(JSON.message);
	}

	const accountInfo = JSON.personInfo as Account;

	return accountInfo;
}