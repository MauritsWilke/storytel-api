// HELPER TYPES
type Brand<K, T> = K & { __brand: T };
type isoValues = "nl" | "en" | "ar" | "tr" | "de" | "fr" | "es" | "it" | "sv";
type CreatedAt = `${number}-${number}-${number}T${number}:${number}:${number}`;
interface LanguageObject {
	checkedByDefault: boolean,
	id: number,
	isoValue: string,
	localizedName: string,
	name: string
}

// EXPORTS
export type EncryptedPassword = Brand<string, "EncryptedPassword">;

export interface User {
	accountInfo: {
		allLanguageObjects: LanguageObject[],
		allLanguages: {},
		connectedSocialId: null | string,
		countryId: 1,
		countryIso: isoValues,
		createdAt: CreatedAt,
		eligibleForTrial: boolean,
		email: null | string,
		emailVerified: boolean,
		enthusiast: boolean,
		jwt: null | string,
		lang: null | isoValues,
		loginStatus: number,
		loginStatusEnum: string,
		maximumNumberOfflineBooks: 100,
		paymentIssues: boolean,
		phoneNumber: null | string,
		preview: boolean,
		refreshToken: null,
		singleSignToken: null | string,
		userId: number
	},
	customerCurrentLocation: string,
	customerId: number,
	lang: null | string,
	message: string,
	optionalBooks: number,
	premiumRealised: boolean,
	result: string,
	serverDateMillis: number
}