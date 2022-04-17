interface Empty<T> {
}
let emp1: Empty<number> = { data: 10 };
const emp2: Empty<string>

// emp2 = emp1;

interface NotEmpty<T> {
  data: T;
}
let notEmp1: NotEmpty<number> = { data: 10 };
let notEmp2: NotEmpty<string>;

notEmp2 = notEmp1;

interface Obj {
  data: string,
  num: number
}

const myData: Obj[] = []

let div = document.querySelector('div');
div!.innerText;

interface Me {
  name: string;
  age: number;
}

const valley = {} as Me;
valley.name = 'valley';
valley.age = 22