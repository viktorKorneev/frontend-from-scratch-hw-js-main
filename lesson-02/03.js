/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 39; // тестовое значение, можно изменять
let grade;
// your code

// if (grade = score >= 0 && score <= 49) {
//     console.log('F');
// } else if (grade = score >= 50 && score <= 69) {
//     console.log('D');
// } else if (grade = score >= 70 && score <= 79) {
//     console.log('C');
// } else if (grade = score >= 80 && score <= 89) {
//     console.log('B');
// } else {
//     console.log('A');
// }

switch ((grade = score >= 0 && score <= 49)) {
  case true:
    console.log("F");
    break;
//   case true:
//     console.log("D");
//     break;
//   case true:
//     grade = score >= 70 && score <= 79;
//     console.log("C");
//     break;
//   case true:
//     grade = score >= 80 && score <= 89;
//     console.log("B");
//     break;
//   case true:
//     grade = score >= 90 && score <= 100;
//     console.log("A");
}
