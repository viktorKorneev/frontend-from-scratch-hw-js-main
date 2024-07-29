// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

let num;

function isEven(a) {
  if (a % 2 == 0) {
    num = true;
    console.log(true);
  } else {
    num = false;
    console.log(false);
  }
  return num;
}
isEven(30);
