import { regFormTemplate } from "./Register";
import { InputGroup } from "../../components/inputGroup";
import { LinkButton } from "../../components/linkButton/linkButton";
import Block from "../../lib/Block";
import * as validation from "../../lib/validationUtils";

interface RegProps {
  containerClass: string;
}

export class Registration extends Block<RegProps> {
  constructor(props: RegProps) {
    super("div", props);
    this.init();
  }

  init() {
    const button1 = {
      label: "Зарегистрироваться",
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const form = document.getElementById("regForm") as HTMLFormElement;
          const data = new FormData(form);
          const email = data.get("mail");
          if (email && typeof email === "string") {
            validation.testEmail(email);
          }

          const login = data.get("login");
          if (login && typeof login === "string") {
            validation.testLogin(login);
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

          const password = data.get("password");
          if (password && typeof password === "string") {
            validation.testPassword(password);
          }
        },
      },
    };

    const button2 = {
      label: "Войти",
      events: {
        click: () => (window.location.href = "/login"),
      },
    };

    const inputdata = [
      ["Почта", "mail", "text", "pochta@yandex.ru"],
      ["Логин", "login", "text", "ivanivanov"],
      ["Имя", "first_name", "text", "Иван"],
      ["Фамилия", "second_name", "text", "Иванов"],
      ["Телефон", "phone", "tel", "+7(___)-___-__-__"],
      ["Пароль", "password", "password", ""],
      ["Повторите пароль", "password-2", "password", ""],
    ];

    const inputGroups = inputdata.map((arr) => {
      return {
        label: arr[0],
        id: arr[1],
        type: arr[2],
        placeholder: arr[3],
        events: {
          focusout: (e: Event) => {
            e.preventDefault();
            const form = document.getElementById("regForm") as HTMLFormElement;
            const data = new FormData(form);
            const temp = data.get(arr[1]);
            if (temp && typeof temp === "string") {
              const answer = validation.testFieldByID(arr[1], temp);
              if (answer.field1 === false && answer.field2 !== undefined) {
                const target = e.target as HTMLTextAreaElement;
                const error = document.createElement("div");
                target.classList.add("input-incorrect");
                error.className = "error-text2";
                error.classList.add(arr[1]);
                error.innerHTML = answer.field2;
                target.before(error);
              }
            }
          },
          focusin: (event: Event) => {
            const target = event.target as HTMLTextAreaElement;
            const error = document.getElementsByClassName("error-text2".concat(" ", target.name));
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

    const btn1 = new LinkButton({
      label: button1.label,
      events: button1.events.submit ? { click: button1.events.submit as () => void } : undefined,
    });
    btn1.element?.classList.add("button");
    this.children.button_0 = btn1;

    const btn2 = new LinkButton(button2);
    btn2.element?.classList.add("button");
    this.children.button_1 = btn2;

    inputGroups.forEach((inputGroup) => {
      const input = new InputGroup(inputGroup);
      if (input.element && inputGroup.events && inputGroup.events.focusout) {
        input.element.addEventListener("focusout", inputGroup.events.focusout);
      }
      this.children[`group_${inputGroups.indexOf(inputGroup)}`] = input;
    });

    this.children.button_0.element?.classList.add("button-reg");
    this.children.button_1.element?.classList.add(...["button", "navigation-btn"]);
  }

  render() {
    return this.compile(regFormTemplate, this.props);
  }
}
