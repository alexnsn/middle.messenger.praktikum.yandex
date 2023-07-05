import Block from "../../lib/Block";
import { settingsFormTemplate } from "./Settings";
import { LinkButton } from "../../components/linkButton/linkButton";
import { InputGroupSettings } from "../../components/inputGroupSettings";

interface SettingsProps {
  name: string;
  src: string;
  srcBack: string;
  onClick: string;
  onClickBack: string;
}

export class Settings extends Block<SettingsProps> {
  constructor(props: SettingsProps) {
    super("div", props);
    this.init();
  }

  init() {
    const buttondata = [["Изменить данные", "/edit"], ["Изменить пароль"], ["Выйти", "/login"]];

    const buttons = buttondata.map(([label, url]) => {
      return {
        label,
        events: {
          click: () => (window.location.href = url),
        },
      };
    });

    const inputdata = [
      ["Почта", "email", "qwe@ya.ru"],
      ["Логин", "login", "ivanivanov"],
      ["Имя", "first_name", "Иван"],
      ["Фамилия", "second_name", "Иванов"],
      ["Имя в чате", "display_name", "Ваня"],
      ["Телефон", "phone", "+79998887766"],
    ];

    const inputGroups = inputdata.map((arr) => {
      return {
        label: arr[0],
        id: arr[1],
        value: arr[2],
      };
    });

    buttons.forEach((button) => {
      const btn = new LinkButton(button);
      btn.element?.classList.add("button");
      this.children[`button_${buttons.indexOf(button)}`] = btn;
    });

    inputGroups.forEach((inputGroup) => {
      const input = new InputGroupSettings(inputGroup);
      this.children[`group_${inputGroups.indexOf(inputGroup)}`] = input;
    });

    this.children.button_0.element?.classList.add(...["button", "modal-btn", "navigation-btn"]);
    this.children.button_1.element?.classList.add(...["button", "modal-btn", "navigation-btn"]);
    this.children.button_2.element?.classList.add(...["button", "navigation-btn", "exit-btn"]);
  }

  render() {
    return this.compile(settingsFormTemplate, this.props);
  }
}
