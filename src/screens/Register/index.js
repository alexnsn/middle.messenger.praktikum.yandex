import Handlebars from "handlebars";
import { regFormTemplate } from "./Register";
import { inputGroup } from "../../components/inputGroup";
import { LinkButton } from "../../components/linkButton";

var inputdata = 
[
  ["Почта","mail","text", "pochta@yandex.ru"],
  ["Логин","login","text", "ivanivanov"],
  ["Имя","first_name","text","Иван"],
  ["Фамилия","second_name","text","Иванов"],
  ["Телефон","phone","tel","+7(___)-___-__-__"],
  ["Пароль","password","password",""],
  ["Повторите пароль","password-2","password",""]
]

var filedsObjects = inputdata.map((arr) => {
  return inputGroup({
  label:        arr[0],
  id:           arr[1],
  type:         arr[2],
  placeholder:  arr[3]
})})

var buttondata = 
[
  ["Зарегистрироваться","button-reg","/chats"],
  ["Войти","button navigation-btn","/login"]
]

var buttonObjects = buttondata.map((arr) => {
  return LinkButton({
  label:        arr[0],
  className:    arr[1],
  path:         arr[2]
})})

export const Registration = () =>
    Handlebars.compile(regFormTemplate)({
      title: "Регистрация",
      containerClass: "containerReg",
      inputs: filedsObjects,
      other: buttonObjects
    });
