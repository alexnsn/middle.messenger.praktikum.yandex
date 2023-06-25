import Handlebars from "handlebars";
import { editFormTemplate } from "./Edit";
import { LinkButton } from "../../components/linkButton";
import { inputGroupSettingsEdit } from "../../components/inputGroupSettingsEdit";

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
  return inputGroupSettingsEdit({
  label:        arr[0],
  id:           arr[1],
  value:         arr[2]
})})

var buttondata = 
[
  ["Сохранить","button navigation-btn", "/settings"]
]

var buttonObjects = buttondata.map((arr) => {
  return LinkButton({
  label:        arr[0],
  className:    arr[1],
  path:         arr[2]
})})

export const Edit = () =>
  Handlebars.compile(editFormTemplate)({
    name: "Иван",
    src: "statics/profile.jpg",
    srcBack: "statics/back.png",
    onClick: "",
    onClickBack: "window.location = '/chats'",
    info: filedsObjects,
    other: buttonObjects
  });
