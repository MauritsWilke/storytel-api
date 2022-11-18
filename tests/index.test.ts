import * as dotenv from "dotenv";
dotenv.config();

import { beforeEach, expect, it, describe } from "vitest";
import Storytel from "../src/index";
import type { User } from "../src/types";

describe("User", async () => {
	if (!process.env.EMAIL || !process.env.PASSWORD) throw new Error("Make sure you have a .env in root with your EMAIL and PASSWORD");

	const client = new Storytel();
	const user = await client.login(process.env.EMAIL, process.env.PASSWORD);

	it("context.user should be logged in", () => {
		expect(user.accountInfo.loginStatus).not.toEqual(-1);
	})
})