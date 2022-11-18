export interface Account {
	SQLTableName: string,
	acceptNewsletter: boolean,
	acceptSMS: boolean,
	active: string,
	anonymous: boolean,
	brand: null | any, // Unknown
	citizenId: null | any, // Unknown
	commercialTitle: null | any, // Unknown
	country: {
		browserCode: string,
		id: number,
		isoValue: isoValue,
		name: string,
		prefix: string
	},
	dateOfBirth: string,
	email: string,
	enthusiast: boolean,
	errorReporter: boolean,
	firstName: string,
	hasStartedListening: boolean,
	id: number,
	inMemoryGuest: boolean,
	inMemoryGuestOrInPreview: boolean,
	inMemoryPreview: boolean,
	insertDate: DateTimeFormat,
	lastName: string,
	model: null | any, // Unknown
	name: string,
	numberOfPurchasedBooks: number,
	numberOfReviews: number,
	numberOfUnlimitedBooks: number,
	operator: string,
	phoneNumber: string,
	preview: boolean,
	programCredit: number,
	setOfCreditCard: null | any, // Unknown
	setOfCustomerOrder: null | any, // Unknown
	signature: null | any, // Unknown
	taxId: null | any, // Unknown
	temporaryAccount: boolean,
	userAgent: null | any, // Unknown
	username: null | any, // Unknown
	usernameOrId: string
}