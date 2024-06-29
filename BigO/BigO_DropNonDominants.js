function dropNonDominants(numbers) {
  console.log("These are the numbers : ");
  numbers.forEach((number) => {
    console.log(number);
  });

  console.log(" These are the sums ");
  numbers.forEach((number1) => {
    numbers.forEach((number2) => {
      console.log(number1 + number2);
    });
  });
}

dropNonDominants([1,2,3,4,5,6])

/*
O(n + n^2)
BigO = O(n^2)
*/