function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined
}

function some(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim() // animal은 Fish 타입이 확실함
  } else {
    animal.fly() // animal은 Fish 타입이 아니니깐 Bird 타입이 확실함
  }
}




