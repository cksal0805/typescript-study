type Test<T> = (arg: string extends T ? never : T) => void

const fn:Test<string> = (arg: string) => {
  console.log(arg)
} 

const fn2:Test<number> = (arg) => {
  console.log(arg)
}
