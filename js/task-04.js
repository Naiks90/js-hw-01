const credits = 23580;
const pricePerDroid = 3000;
// let totalPrice = pricePerDroid * countDroid;

const countDroid = prompt('Сколько дроидов Вам нужно');
if (countDroid === '' || isNaN(countDroid)) {
  alert(`'Вы вели не число'`);
} else if (countDroid <= null) {
  alert(`'Отменено пользователем!'`);
} else if (true) {
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
