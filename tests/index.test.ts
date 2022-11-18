import * as dotenv from "dotenv";
dotenv.config();

import { expect, it, describe } from "vitest";
import Storytel from "../src/index";

describe("User", async () => {
	if (!process.env.EMAIL || !process.env.PASSWORD) throw new Error("Make sure you have a .env in root with your EMAIL and PASSWORD");

	const client = new Storytel();
	const user = await client.login(process.env.EMAIL, process.env.PASSWORD);

	console.log(user)

	it("context.user should be logged in and refreshToken and singleSignToken should be set", () => {
		expect(user.accountInfo.loginStatus).not.toEqual(-1);
		expect(client.getRefreshToken()).toBeDefined();
		expect(client.getSingleSignToken()).not.toBeNull();

		console.log(client.getRefreshToken(), client.getSingleSignToken())
	})
})