function multiplesOf3and5(number) {
  let finalSum = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      finalSum += i;
    }
  }

  return finalSum;
}

multiplesOf3and5(1000);
