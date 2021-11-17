const credits = 23580;
const pricePerDroid = 3000;
// let totalPrice = pricePerDroid * countDroid;

let countDroid = prompt('Сколько дроидов Вам нужно');
countDroid = Number(countDroid);
if (countDroid === '' || Number.isNaN(countDroid)) {
  alert(`'Вы ввели не число'`);
} else if (countDroid <= null) {
  alert(`'Отменено пользователем!'`);
} else {
  const totalPrice = pricePerDroid * countDroid;
  if (totalPrice > credits) {
    alert(`'Недостаточно средств на счету!'`);
  } else {
    alert(
      `'Вы купили ${countDroid} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.'`
    );
  }
}
