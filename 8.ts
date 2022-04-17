interface Dog {
  legs: 4;
  bark(): void;
}

interface Bird {
  legs: 2;
  fly(): void;
}

const choi: Dog = { 
  legs: 4,
  bark() { 
    console.log('bark! bark!');
  } 
};

function flyAway (bird: Bird): void {
	console.log('날아 오르기 시작!');
  bird.fly();
}

flyAway(choi as any as Bird);