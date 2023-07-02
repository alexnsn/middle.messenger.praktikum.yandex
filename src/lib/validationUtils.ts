export function testLoginOnLength(username: string): boolean {
  const isMatch = typeof username === "string" && /^.{3,20}$/.test(username);
  if (!isMatch) {
    console.log("Логин. Длина: 3-20 символов");
  }
  return isMatch;
}

export function testLoginOnSymbols(username: string): boolean {
  const isMatch = typeof username === "string" && /^[a-zA-Z0-9_-]+$/.test(username);
  if (!isMatch) {
    console.log("Логин. Допустимые символы: _- и латиница");
  }
  return isMatch;
}

export function testPassword(password: string): boolean {
  const isMatch = typeof password === "string" && /^(?=.*[A-Z])(?=.*\d).+$/.test(password);
  if (!isMatch) {
    console.log("Пароль. Должна быть заглавная буква и цифра.");
  }
  return isMatch;
}

export function testPasswordOnLength(password: string): boolean {
  const isMatch = typeof password === "string" && /^.{8,40}$/.test(password);
  if (!isMatch) {
    console.log("Пароль. Длина: 8-40 символов");
  }
  return isMatch;
}

export function testMessage(message: string): boolean {
  const isMatch = typeof message === "string" && message.length > 0;
  if (!isMatch) {
    console.log("Сообщение должно быть непусто");
  }
  return isMatch;
}

export function testName(name: string): boolean {
  const isMatch = typeof name === "string" && /^[А-ЯЁа-яёA-Za-z]+$/.test(name);
  if (!isMatch) {
    console.log("Имя и Фамилия. Латиница или кириллица");
  }
  return isMatch;
}

export function testNameFirstLetter(name: string): boolean {
  const isMatch = typeof name === "string" && /^[А-ЯЁA-Z][А-ЯЁа-яёa-z]*$/.test(name);
  if (!isMatch) {
    console.log("Имя и Фамилия. Первая буква должна быть заглавной");
  }
  return isMatch;
}

export function testPhone(phone: string): boolean {
  const isMatch = typeof phone === "string" && /^\+?\d{10,15}$/.test(phone);
  if (!isMatch) {
    console.log("Телефон. 10-15 цифр");
  }
  return isMatch;
}

export function testEmail(phone: string): boolean {
  const isMatch =
    typeof phone === "string" && /^[a-zA-Z0-9_.-]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/.test(phone);
  if (!isMatch) {
    console.log("Невалидный email");
  }
  return isMatch;
}

export function testFieldByID(id: string, temp: string): boolean {
  switch (id) {
    case "login":
      return testLoginOnLength(temp) && testLoginOnSymbols(temp);
    case "password":
      return testPassword(temp) && testPasswordOnLength(temp);
    case "message":
      return testMessage(temp);
    case "first_name":
      return testName(temp) && testNameFirstLetter(temp);
    case "second_name":
      return testName(temp) && testNameFirstLetter(temp);
    case "phone":
      return testPhone(temp);
    case "email":
      return testEmail(temp);
    case "mail":
      return testEmail(temp);
    default:
      console.log(`No matching test function found for field with ID: ${id}`);
      return false;
  }
}
