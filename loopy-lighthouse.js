let number = 100
for (number = 100; number <= 200; number++) {

  if (number % 3 === 0 && number % 4 !== 0) {
    console.log('Loopy');
  } else if (number % 4 === 0 && number % 3 !== 0) {
    console.log('Lighthouse');
  } else if (number % 3 === 0 && number % 4 === 0) {
    console.log('LoopyLighthouse');
  } else {
    console.log(number);
  }
}