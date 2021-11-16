const delivery = prompt('В какую страну нужно доставить товар?');
let price;
const deliveryLowerCase = delivery.toLocaleLowerCase();

switch (deliveryLowerCase) {
  case 'китай': {
    price = 100;
    alert(`'Доставка в ${delivery} будет стоить ${price} кредитов'`);
    break;
  }

  case 'чили': {
    price = 250;
    alert(`'Доставка в ${delivery} будет стоить ${price} кредитов'`);
    break;
  }

  case 'австралия': {
    price = 170;
    alert(`'Доставка в ${delivery} будет стоить ${price} кредитов'`);
    break;
  }

  case 'индия': {
    price = 80;
    alert(`'Доставка в ${delivery} будет стоить ${price} кредитов'`);
    break;
  }

  case 'ямайка': {
    price = 120;
    alert(`'Доставка в ${delivery} будет стоить ${price} кредитов'`);
    break;
  }

  default:
    alert(`'В вашей стране доставка не доступна'`);
}

// alert(`'Доставка в ${delivery} будет стоить ${price} кредитов'`);

// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
