let input;
let total = 0;

while (true) {
  input = prompt(`Введите число`);
  if (input == null) {
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert(`Нужно вводить число`);
  } else {
    total += input;
  }
}
alert(`Общая сума числа ${total}`);
