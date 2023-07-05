import Block from "../../lib/Block";
import { loginFormTemplate } from "./Login";
import { InputGroup } from "../../components/inputGroup";
import { LinkButton } from "../../components/linkButton/linkButton";
import * as validation from "../../lib/validationUtils";

interface LoginProps {
  containerClass: string;
}

export class Login extends Block<LoginProps> {
  constructor(props: LoginProps) {
    super("div", props);
    this.init();
  }

  init() {
    const buttons = [
      {
        label: "Войти",
        events: {
          submit: (e: Event) => {
            e.preventDefault();
            const form = document.getElementById("loginForm") as HTMLFormElement;
            const data = new FormData(form);
            const login = data.get("login");
            if (login && typeof login === "string") {
              validation.testLogin(login);
            }

            const password = data.get("password");
            if (password && typeof password === "string") {
              validation.testPassword(password);
            }
          },
        },
      },
      {
        label: "Впервые?",
        events: {
          click: () => (window.location.href = "/registration"),
        },
      },
    ];

    const inputGroups = [
      {
        label: "Логин",
        id: "login",
        type: "text",
        placeholder: "",
        // events: {
        //   focusout: (e: Event) => {
        //     e.preventDefault();
        //     const form = document.getElementById("loginForm") as HTMLFormElement;
        //     const data = new FormData(form);
        //     const login = data.get("login");
        //     if (login && typeof login === "string") {
        //       validation.testLoginOnLength(login);
        //       validation.testLoginOnSymbols(login);
        //     }
        //   },
        // },
      },
      {
        label: "Пароль",
        id: "password",
        type: "password",
        placeholder: "",
        // events: {
        //   focusout: (e: Event) => {
        //     e.preventDefault();
        //     const form = document.getElementById("loginForm") as HTMLFormElement;
        //     const data = new FormData(form);
        //     const password = data.get("password");
        //     if (password && typeof password === "string") {
        //       validation.testPassword(password);
        //       validation.testPasswordOnLength(password);
        //     }
        //   },
        // },
      },
    ];

    buttons.forEach((button) => {
      const btn = new LinkButton({
        label: button.label,
        events: button.events.submit ? { click: button.events.submit as () => void } : undefined,
      });
      btn.element?.classList.add("button");
      this.children[`button_${buttons.indexOf(button)}`] = btn;
    });

    inputGroups.forEach((inputGroup) => {
      const input = new InputGroup(inputGroup);
      // if (input.element && inputGroup.events && inputGroup.events.focusout) {
      //   input.element.addEventListener("focusout", inputGroup.events.focusout);
      // }
      this.children[`group_${inputGroups.indexOf(inputGroup)}`] = input;
    });

    this.children.button_0.element?.classList.add("button");
    this.children.button_1.element?.classList.add(...["button", "navigation-btn"]);
  }

  render() {
    return this.compile(loginFormTemplate, this.props);
  }
}
