/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let newWord = str.split(" ")
  for(let i = 0; i < newWord.length; i++){
    newWord[i] = newWord[i][0].toUpperCase() + newWord[i].slice(1)
  }
  return newWord.join(" ")
  }
console.log(capitalizeWords("hello world from javascript"));
