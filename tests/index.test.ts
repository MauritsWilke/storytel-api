import * as dotenv from "dotenv";
dotenv.config();

import { expect, it, describe, expectTypeOf } from "vitest";
import Storytel from "../src/index";
import type { Book } from "../src/types/book";

describe("User", async () => {
	if (!process.env.EMAIL || !process.env.PASSWORD) throw new Error("Make sure you have a .env in root with your EMAIL and PASSWORD");

	const client = new Storytel();
	const user = await client.signIn(process.env.EMAIL, process.env.PASSWORD);

	it("context.user should be logged in and refreshToken and singleSignToken should be set", () => {
		expect(user.LoginResponse.accountInfo.loginStatus).not.toEqual(-1);
		expect(user.getSingleSignToken()).not.toBeNull();
	})

	it("should get the users bookshelf", async () => {
		const bookshelf = await user.getBookshelf();
		expectTypeOf(bookshelf[0]).toMatchTypeOf<Book>; // This is such a cool feature
	})

	it("should get the users account info", async () => {
		const accountInfo = await user.getAccountInfo();
		expect(accountInfo.id).toBeDefined();
	})

	it("should log in using user1's token", async () => {
		const user2 = await client.signInUsingSingleSignToken(user.getSingleSignToken());
		expect(user2.LoginResponse.accountInfo.loginStatus).not.toEqual(-1);
	})
})