type Brand<K, T> = K & { __brand: T };
type isoValue = "nl" | "en" | "ar" | "tr" | "de" | "fr" | "es" | "it" | "sv";
type DateTimeFormat = `${number}-${number}-${number}T${number}:${number}:${number}`;
type Duration = `${number}HH ${number}MM`;
type ReleaseDate = `${number}-${number}-${number}`;
type InsertDate = `${DateTimeFormat}.${number}+${number}`;
type FormatReleaseDate = `${DateTimeFormat}Z`;
type UpdatedTimestamp = `${DateTimeFormat}.${number}Z`;

interface LanguageObject {
	checkedByDefault: boolean,
	id: number,
	isoValue: string,
	localizedName: string,
	name: string
}