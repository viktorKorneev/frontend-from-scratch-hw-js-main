/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let value = 0;

while (value < 20) {
  value = value + 1;

  if (value % 2) {
    sum = sum + value;
  }
  console.log(sum);
}


