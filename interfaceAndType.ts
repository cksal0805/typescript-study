type TPerson = {
	name: string,
	age: number,
}

interface Person extends TPerson {
	age: number,
}

interface Person2 {
	age: number,
}

interface IPerson extends Person2 {
	name: string,
	age: number,
}

const me: Person = {
	name: "밸리",
	age: 22
}

interface IData {
	age: number,
}

type TData = IData & {
	name: string,
}

const data: TData = {
	name: "밸리",
	age: 22,
}

type TData1 = {
	food: string
}

type TData2 = TData1 & {
	name: string,
	age: number,
}

type TURL = string;

interface UserProfile {
	name: string;
	image: TURL,
}

const obj: UserProfile = {
	name: '',
	image: '',
}

type NumberToStringConverter = {
  convert: (value: number) => string;
}

type BidirectionalStringNumberConverter = NumberToStringConverter & {
  convert: (value: string) => number;
}

type type2 = { a: 1 } & { b: 2 } // 잘 머지됨
type type3 = { a: 1; b: 2 } & { b: 3 } // resolved to `never`

const t2: type2 = { a: 1, b: 2 } // good
const t3: type3 = { a: 1, b: 3 } // Type 'number' is not assignable to type 'never'.(2322)
const t3: type3 = { a: 1, b: 2 } // Type 'number' is not assignable to type 'never'.(2322)
