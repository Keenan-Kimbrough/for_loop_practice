function first10NaturalNums(maxNumber) {
  for (let x = 1; x <= maxNumber; x++) {
    console.log(x);
  }
}

/* 2 */function sumNatNum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;

    console.log(sum);
  }
  console.log(`the sum is ${sum}`);
}

/* 3 */function natural_Sum(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum = sum + i;
  }
  console.log(`this is the ${sum} this is the number of items ${number}`);
}

/* 4 */function keyboard(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers; i++) {
    sum = sum + i;
  }
  let avg = sum / numbers;
  console.log(`this is the avg ${avg} and this is the sum ${sum}`);
}

/* 5 */function cubed(numbers) {
  let cubed = 1;
  for (let i = 0; i <= numbers; i++) {
    cubed = i ** 3;
    console.log(`the number is :${numbers} the cube of ${numbers} is ${cubed}`);
  }
}

/* 6 */ function m_rule(numbers) {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = numbers * i;

    console.log(`${numbers} X ${i} = ${sum} `);
  }
}
 


/* 7 */ function game(numbers) {
  let i = 1;
  let j = 1;

  for (let i = 1; i <= 10; i++) {
    for (j = 1; j <= numbers; j++) {
       
        console.log(`| ${j}  x ${i} = ${i * j} |`);
    }
    
    
  }
  console.log("\n");
}
game(8)


/* 8 */




/* 9. */ function rightTriangle(rows) {
  triangle = new Array();
  let newrow = new Array(rows);
  let number = 0;

  for (let i = 0; i < rows; i++) {
    number = number + 1;

    for (let j = 1; j <= 1; j++) {
      newrow.push(number);

      console.log(newrow.join(""));
    }
  }
}

