// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
let num;
function findLargest(a, b, c) {
  if (a > b && a > c) {
    num = a;
    console.log(a);
  } else if (b > a && b > c) {
    num = b;
    console.log(b);
  } else {
    num = c;
    console.log(c);
  }
  return num;
}
findLargest(20, 12, 40);
