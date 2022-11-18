import { createCipheriv } from "crypto";
import type { EncryptedPassword } from "../types";

// Huge thanks to @javsanpar for decompiling the Storytel app and retrieving these:
const KEY = "VQZBJ6TD8M9WBUWT";
const IV = "joiwef08u23j341a";

export function encryptPassword(password: string): EncryptedPassword {
	const cipher = createCipheriv("aes-128-cbc", KEY, IV);
	let encrypted = cipher.update(password, 'utf-8', 'hex');
	encrypted += cipher.final("hex");

	return encrypted as EncryptedPassword;
}