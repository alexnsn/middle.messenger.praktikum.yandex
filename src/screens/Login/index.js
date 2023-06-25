import Handlebars from "handlebars";
import { loginFormTemplate } from "./Login";
import { inputGroup } from "../../components/inputGroup";
import { LinkButton } from "../../components/linkButton";

var inputdata = 
[
  ["Логин","login","text", ""],
  ["Пароль","password","password", ""]
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
  ["Войти","button","/auth"],
  ["Впервые?","button navigation-btn","/registration"]
]

var buttonObjects = buttondata.map((arr) => {
  return LinkButton({
  label:        arr[0],
  className:    arr[1],
  path:         arr[2]
})})

export const Login = () =>
  Handlebars.compile(loginFormTemplate)({
    title: "Вход",
    class: "container",
    inputs: filedsObjects,
    other: buttonObjects
  });
