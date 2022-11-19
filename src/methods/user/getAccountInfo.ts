import { Account } from "../../types/account";
import type { SingleSignToken } from "../../types/types";

const URL = "https://www.storytel.com/api/getPersonAccountInfo.action?token={TOKEN}";

export async function getAccountInfo(token: SingleSignToken): Promise<Account> {
	const formattedURL = URL.replace("{TOKEN}", token);

	const response = await fetch(formattedURL);
	const json = await response.json();

	if (response.status !== 200 || !json?.personInfo) {
		throw new Error(json.message);
	}

	const accountInfo = json.personInfo as Account;

	return accountInfo;
}