export type EncryptedPassword = Brand<string, "EncryptedPassword">;
export type SingleSignToken = Brand<string, "SingleSignToken">;

export interface User {
	accountInfo: {
		allLanguageObjects: LanguageObject[],
		allLanguages: {},
		connectedSocialId: null | string,
		countryId: 1,
		countryIso: isoValue,
		createdAt: DateTimeFormat,
		eligibleForTrial: boolean,
		email: null | string,
		emailVerified: boolean,
		enthusiast: boolean,
		jwt: null | string,
		lang: null | isoValue,
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