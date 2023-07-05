import Block from "../../lib/Block";
import { editFormTemplate } from "./Edit";
import { LinkButton } from "../../components/linkButton/linkButton";
import { InputGroupSettingsEdit } from "../../components/inputGroupSettingsEdit";
import * as validation from "../../lib/validationUtils";

interface EditProps {
  name: string;
  src: string;
  srcBack: string;
  onClick: string;
  onClickBack: string;
  onSubmit: string;
}

export class Edit extends Block<EditProps> {
  constructor(props: EditProps) {
    super("div", props);
    this.init();
  }

  init() {
    const buttondata = [["Сохранить", "button navigation-btn", "/settings"]];

    const buttons = buttondata.map((arr) => ({
      label: arr[0],
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const form = document.getElementById("editForm") as HTMLFormElement;
          const data = new FormData(form);
          const email = data.get("email");
          if (email && typeof email === "string") {
            validation.testEmail(email);
          }

          const login = data.get("login");
          if (login && typeof login === "string") {
            validation.testLogin(login);
          }

          const password = data.get("password");
          if (password && typeof password === "string") {
            validation.testPassword(password);
          }

          const firstName = data.get("first_name");
          if (firstName && typeof firstName === "string") {
            validation.testName(firstName);
          }

          const secondName = data.get("second_name");
          if (secondName && typeof secondName === "string") {
            validation.testName(secondName);
          }

          const phone = data.get("phone");
          if (phone && typeof phone === "string") {
            validation.testPhone(phone);
          }
        },
      },
    }));

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
        events: {
          focusout: (e: Event) => {
            e.preventDefault();
            const form = document.getElementById("editForm") as HTMLFormElement;
            const data = new FormData(form);
            const temp = data.get(arr[1]);
            if (temp && typeof temp === "string") {
              const answer = validation.testFieldByID(arr[1], temp);
              if (answer.field1 === false && answer.field2 !== undefined) {
                const target = e.target as HTMLTextAreaElement;
                const error = document.createElement("div");
                target.classList.add("input-incorrect");
                error.className = "error-text";
                error.classList.add(arr[1]);
                error.innerHTML = answer.field2;
                target.before(error);
              }
            }
          },
          focusin: (event: Event) => {
            const target = event.target as HTMLTextAreaElement;
            const error = document.getElementsByClassName("error-text".concat(" ", target.name));
            if (target.classList.contains("input-incorrect")) {
              target.classList.remove("input-incorrect");
              if (error[0]) {
                error[0].remove();
              }
            }
          },
        },
      };
    });

    buttons.forEach((button) => {
      const btn = new LinkButton({
        label: button.label,
        events: button.events.submit ? { click: button.events.submit as () => void } : undefined,
      });
      btn.element?.classList.add("button");
      this.children[`button_${buttons.indexOf(button)}`] = btn;
    });

    inputGroups.forEach((InputGroup) => {
      const input = new InputGroupSettingsEdit(InputGroup);
      if (input.element && InputGroup.events && InputGroup.events.focusout) {
        input.element.addEventListener("focusout", InputGroup.events.focusout);
      }
      this.children[`group_${inputGroups.indexOf(InputGroup)}`] = input;
    });

    this.children.button_0.element?.classList.add(...["button", "navigation-btn"]);
  }

  render() {
    return this.compile(editFormTemplate, this.props);
  }
}
