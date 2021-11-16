const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const psswordUser = prompt('В ведите пароль');
if (psswordUser === null) {
  message = "'Отменено пользователем!'";
} else if (psswordUser === ADMIN_PASSWORD) {
  message = "'Добро пожаловать!'";
} else {
  message = "'Доступ запрещен, неверный пароль!'";
}

alert(message);
