/* eslint-disable no-var */
function multiplesOf3and5(number) {

  var finalSum = 0;
  
  for (let i = 0; i < number; i++)
  {
    if(i%3 == 0 || i%5 == 0)
    {
      finalSum = finalSum + i;
    }
  }

  return finalSum;
}

multiplesOf3and5(1000);
