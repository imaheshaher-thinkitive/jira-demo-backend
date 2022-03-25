function singleNumber(n) {
  sum = 0;
  while (n > 0) {
    r = n % 10;
    n = parseInt(n / 10);
    sum = sum + r;
  }
  if (sum >= 10) {
    sum = singleNumber(sum);
  }
  return sum;
}
console.log(singleNumber(150));
