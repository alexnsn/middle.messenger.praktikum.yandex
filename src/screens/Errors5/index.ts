// import Handlebars from "handlebars";
import Block from "../../lib/Block";
import { template } from "./Errors5";
import { LinkButton } from "../../components/linkButton/linkButton";

export class Errors5 extends Block {
  constructor() {
    super("main", {});
    this.getContent();
  }

  init() {
    this.children.button = new LinkButton({
      label: "Назад к чатам",
      events: {
        click: () => (window.location.href = "/chats"),
      },
    });

    this.children.button.element?.classList.add(...["button", "navigation-btn"]);
  }

  render() {
    return this.compile(template, {});
  }
}
