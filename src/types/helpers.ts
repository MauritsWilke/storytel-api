type Brand<K, T> = K & { __brand: T };
type isoValues = "nl" | "en" | "ar" | "tr" | "de" | "fr" | "es" | "it" | "sv";
type CreatedAt = `${number}-${number}-${number}T${number}:${number}:${number}`;
type Duration = `${number}HH ${number}MM`;
type ReleaseDate = `${number}-${number}-${number}`;
type InsertDate = `${CreatedAt}.${number}+${number}`;

interface LanguageObject {
	checkedByDefault: boolean,
	id: number,
	isoValue: string,
	localizedName: string,
	name: string
}