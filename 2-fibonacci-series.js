// Using for loop
var fibonacciSeries = function (x) {
  const arr = [0, 1];

  for (let i = 2; i <= x; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[x];
};
console.log(fibonacciSeries(5));

// Using recursion
var fibonacciSeriesRecursion = (x) => {
  if (x <= 1) return x;

  return fibonacciSeriesRecursion(x - 1) + fibonacciSeriesRecursion(x - 2);
};
console.log(fibonacciSeriesRecursion(5));
