import { template } from "./NotFound";
import { LinkButton } from "../../components/linkButton/linkButton";
import Block from "../../lib/Block";

export class NotFound extends Block {
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
