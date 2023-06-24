import Handlebars from "handlebars";
import { template } from "./NotFound";
import { LinkButton } from "../../components/linkButton";

export const NotFound = () =>
  Handlebars.compile(template)({
    button: LinkButton({
      label: "Назад к чатам",
      className: "button navigation-btn",
      path: "/chats",
    }),
  });