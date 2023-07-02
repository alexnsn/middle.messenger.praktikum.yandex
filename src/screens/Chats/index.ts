import Block from "../../lib/Block";
import { chatsTemplate } from "./Chats";
import { InputGroup } from "../../components/inputGroup";
import { LinkButton } from "../../components/linkButton/linkButton";
import { Message } from "../../components/message";

const chatsList = [
  { id: 1, name: "Игорь", src: "statics/pers1.jpg" },
  { id: 2, name: "Вася", src: "statics/pers2.jpg" },
  { id: 3, name: "Елена", src: "statics/pers3.jpg" },
  { id: 4, name: "Баба Галя", src: "statics/pers4.jpg" },
  { id: 5, name: "Эль Примо", src: "statics/pers5.jpg" },
];

interface ChatsProps {
  username: string;
  src2: string;
  src_ava: string;
}

export class Chats extends Block<ChatsProps> {
  constructor(props: ChatsProps) {
    super("div", props);
    this.init();
  }

  init(): void {
    chatsList.forEach((chat) => {
      const cht = new Message({ name: chat.name, src: chat.src });
      this.children[`message_${chatsList.indexOf(chat)}`] = cht;
      this.children[`message_${chatsList.indexOf(chat)}`].element?.classList.add("li__chat");
    });

    this.children.inputSend = new InputGroup({
      label: "",
      id: "message",
      type: "text",
      placeholder: "Введите сообщение...",
    });
    this.children.inputSend.element?.classList.add("main__input");
    this.children.inputSearch = new InputGroup({
      label: "",
      id: "search",
      type: "text",
      placeholder: "Поиск",
      class: "__search",
    });
    this.children.inputSearch.element?.classList.add("header__input");
    this.children.btnProfile = new LinkButton({
      label: "Профиль >",
      events: {
        click: () => (window.location.href = "/settings"),
      },
    });
    this.children.btnProfile.element?.classList.add("header__btn");

    const btn = {
      label: ">",
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const form = document.getElementById("messageForm") as HTMLFormElement;
          const data = new FormData(form);
          const temp = data.get("message");
          if (temp && typeof temp === "string") {
            console.log("send: ".concat(temp));
          } else {
            console.log("soobshenie zabil bratishka");
          }
        },
      },
    };

    this.children.btnSend = new LinkButton({
      label: btn.label,
      events: btn.events.submit ? { click: btn.events.submit as () => void } : undefined,
    });
    this.children.btnSend.element?.classList.add("sendButton");
  }

  render() {
    const temparr: string[] = [];

    chatsList.forEach((chat) => {
      temparr.push(`message_${chatsList.indexOf(chat)}`);
    });

    return this.compile(
      chatsTemplate.split("{{{ListMessages}}}").join("{{{".concat(temparr.join("}}}{{{"), "}}}")),
      this.props
    );
  }
}
