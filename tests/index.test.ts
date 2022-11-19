import * as dotenv from "dotenv";
dotenv.config();

import { writeFileSync } from "fs";

import { expect, it, describe, expectTypeOf } from "vitest";
import { Book } from "../src/Book";
import Storytel from "../src/index";

describe("User", async () => {
	if (!process.env.EMAIL || !process.env.PASSWORD) throw new Error("Make sure you have a .env in root with your EMAIL and PASSWORD");

	const client = new Storytel();
	const user = await client.signIn(process.env.EMAIL, process.env.PASSWORD);

	it.concurrent("context.user should be logged in and refreshToken and singleSignToken should be set", () => {
		expect(user.LoginResponse.accountInfo.loginStatus).not.toEqual(-1);
		expect(user.getSingleSignToken()).not.toBeNull();
		expect(user.getJWT).not.toBeNull();
	})

	it.concurrent("should get the users bookshelf", async () => {
		const bookshelf = await user.getBookshelf();
		expect(bookshelf[0]).toBeInstanceOf(Book);
	})

	it.concurrent("should get the users account info", async () => {
		const accountInfo = await user.getAccountInfo();
		expect(accountInfo.id).toBeDefined();
	})

	it.concurrent("should log in using user1's token", async () => {
		const user2 = await client.signInUsingSingleSignToken(user.getSingleSignToken());
		expect(user2.LoginResponse.accountInfo.loginStatus).not.toEqual(-1);
	})

	describe("Book", async () => {
		const bookshelf = await user.getBookshelf();
		const book = bookshelf[0];

		it.concurrent("should return the book details", async () => {
			const details = await book.getBookDetails();
			expect(details).toBeDefined();
		})

		it.concurrent("should return the average book rating", async () => {
			const averageRating = await book.getAverageRating();
			expect(averageRating).toBeDefined();
		})

		it.concurrent("should return the epub file", async () => {
			const ebook = await book.getEBook();

			// You have to manually test if this is a valid ebook
			// But assuming you haven't touched the getEBook() file
			writeFileSync("./tests/ebook.epub", Buffer.from(ebook));

			expectTypeOf(ebook).toMatchTypeOf<ArrayBuffer>;
		})
	})
})