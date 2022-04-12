interface Bird {
  fly(): number,
  age: number,
}

interface Fish {
  swim(): number
}
function doSomething(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim() // swim 속성이 있으니깐 Fish 타입이구나
  } else {
    animal.fly() // fly 속성이 있으니깐 Bird 타입이구나
  }
}