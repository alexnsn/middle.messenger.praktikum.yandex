interface MyObject {
  field1: boolean;
  field2?: string;
}

export function testLogin(username: string): MyObject {
  let isMatch = typeof username === "string" && /^.{3,20}$/.test(username);
  if (!isMatch) {
    console.log("Логин. Длина: 3-20 символов");
    return { field1: false, field2: "Логин. Длина: 3-20 символов" };
  }
  isMatch = typeof username === "string" && /^[a-zA-Z0-9_-]+$/.test(username);
  if (!isMatch) {
    console.log("Логин. Допустимые символы: _- и латиница");
    return { field1: false, field2: "Логин. Допустимые символы: _- и латиница" };
  }
  return { field1: true };
}

export function testPassword(password: string): MyObject {
  let isMatch = typeof password === "string" && /^(?=.*[A-Z])(?=.*\d).+$/.test(password);
  if (!isMatch) {
    console.log("Пароль. Должна быть заглавная буква и цифра.");
    return { field1: false, field2: "Пароль. Должна быть заглавная буква и цифра." };
  }
  isMatch = typeof password === "string" && /^.{8,40}$/.test(password);
  if (!isMatch) {
    console.log("Пароль. Длина: 8-40 символов");
    return { field1: false, field2: "Пароль. Длина: 8-40 символов" };
  }
  return { field1: true };
}

export function testMessage(message: string): MyObject {
  const isMatch = typeof message === "string" && message.length > 0;
  if (!isMatch) {
    console.log("Сообщение должно быть непусто");
    return { field1: false, field2: "Сообщение должно быть непусто" };
  }
  return { field1: true };
}

export function testName(name: string): MyObject {
  let isMatch = typeof name === "string" && /^[А-ЯЁа-яёA-Za-z]+$/.test(name);
  if (!isMatch) {
    console.log("Имя и Фамилия. Латиница или кириллица");
    return { field1: false, field2: "Имя и Фамилия. Латиница или кириллица" };
  }
  isMatch = typeof name === "string" && /^[А-ЯЁA-Z][А-ЯЁа-яёa-z]*$/.test(name);
  if (!isMatch) {
    console.log("Имя и Фамилия. Первая буква должна быть заглавной");
    return { field1: false, field2: "Имя и Фамилия. Первая буква должна быть заглавной" };
  }
  return { field1: true };
}

export function testPhone(phone: string): MyObject {
  const isMatch = typeof phone === "string" && /^\+?\d{10,15}$/.test(phone);
  if (!isMatch) {
    console.log("Телефон. 10-15 цифр");
    return { field1: false, field2: "Телефон. 10-15 цифр" };
  }
  return { field1: true };
}

export function testEmail(email: string): MyObject {
  const isMatch =
    typeof email === "string" && /^[a-zA-Z0-9_.-]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/.test(email);
  if (!isMatch) {
    console.log("Невалидный email");
    return { field1: false, field2: "Невалидный email" };
  }
  return { field1: true };
}

export function testFieldByID(id: string, value: string): MyObject {
  switch (id) {
    case "login":
      return testLogin(value);
    case "password":
      return testPassword(value);
    case "message":
      return testMessage(value);
    case "first_name":
      return testName(value);
    case "second_name":
      return testName(value);
    case "phone":
      return testPhone(value);
    case "email":
      return testEmail(value);
    case "mail":
      return testEmail(value);
    default:
      console.log(`No matching test function found for field with ID: ${id}`);
      return { field1: true, field2: `No matching test function found for field with ID: ${id}` };
  }
}
