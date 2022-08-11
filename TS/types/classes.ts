import { IUser } from './interfaces';
export class User implements IUser {
	private privateField: string = "";
	public publicField: string = "";
	protected protectedField: string = "";
	constructor(
		public id: string,
		public firstName: string,
		public lastName: string,
		public email: string,
		public age: number
	) {}
}