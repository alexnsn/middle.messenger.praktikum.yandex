import Handlebars from "handlebars";
import { settingsFormTemplate } from "./Settings";
import { LinkButton } from "../../components/linkButton";
import { inputGroupSettings } from "../../components/inputGroupSettings";

var inputdata = 
[
  ["Почта","email","qwe@ya.ru"],
  ["Логин","login","ivanivanov"],
  ["Имя","first_name","Иван"],
  ["Фамилия","second_name","Иванов"],
  ["Имя в чате","display_name","Ваня"],
  ["Телефон","phone","+79998887766"],
]

var filedsObjects = inputdata.map((arr) => {
  return inputGroupSettings({
  label:        arr[0],
  id:           arr[1],
  value:         arr[2]
})})

var buttondata = 
[
  ["Изменить данные","button modal-btn navigation-btn", "/edit"],
  ["Изменить пароль","button modal-btn navigation-btn"],
  ["Выйти","button navigation-btn exit-btn","/login" ]
]

var buttonObjects = buttondata.map((arr) => {
  return LinkButton({
  label:        arr[0],
  className:    arr[1],
  path:         arr[2]
})})
export const Settings = () =>
  Handlebars.compile(settingsFormTemplate)({
    name: "Иван",
    src: "statics/profile.jpg",
    srcBack: "statics/back.png",
    onClick: "",
    onClickBack: "window.location = '/chats'",
    info: filedsObjects,
    other: buttonObjects
  });
