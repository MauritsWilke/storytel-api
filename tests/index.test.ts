import * as dotenv from "dotenv";
dotenv.config();

import { expect, it, describe, expectTypeOf } from "vitest";
import Storytel from "../src/index";
import type { Book } from "../src/types/book";

describe("User", async () => {
	if (!process.env.EMAIL || !process.env.PASSWORD) throw new Error("Make sure you have a .env in root with your EMAIL and PASSWORD");

	const client = new Storytel();
	const user = await client.login(process.env.EMAIL, process.env.PASSWORD);

	it("context.user should be logged in and refreshToken and singleSignToken should be set", () => {
		expect(user.accountInfo.loginStatus).not.toEqual(-1);
		expect(client.getRefreshToken()).toBeDefined();
		expect(client.getSingleSignToken()).not.toBeNull();
	})

	it("should get the users bookshelf", async () => {
		const bookshelf = await client.getBookshelf();
		expectTypeOf(bookshelf[0]).toMatchTypeOf<Book>; // This is such a cool feature
	})
})