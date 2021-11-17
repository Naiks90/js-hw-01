const total = 100;
const orderedInputRef = document.querySelector('input');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {
  const ordered = Number(orderedInputRef.value);

  if (ordered > total) {
    alert(`"На складе недостаточно твоаров!"`);
  } else {
    alert(`"Заказ оформлен, с вами свяжется менеджер"`);
  }
});
