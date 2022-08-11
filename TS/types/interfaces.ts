export interface IUser {
	id: string,
	firstName: string,
	lastName: string,
	email: string,
	age: number
}

export interface ISocialUser extends IUser {
	socialInformation: {
		facebook: string,
		linkedin: string,
		instagram: string
	},
	contact(message: string): boolean,
}

export interface ITehnicalUser extends IUser {
	tehnicInformation: {
		facebook: string,
		linkedin: string,
		instagram: string
	},
	issue(message: string): boolean,
}