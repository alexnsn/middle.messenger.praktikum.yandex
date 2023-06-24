import Handlebars from "handlebars";
import { template } from "./Errors5";
import { LinkButton } from "../../components/linkButton";

export const Errors5 = () =>
  Handlebars.compile(template)({
    button: LinkButton({
      label: "Назад к чатам",
      className: "button navigation-btn",
      path: "/chats",
    }),
  });