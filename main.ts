import { Login } from "./src/screens/Login";
import { NotFound } from "./src/screens/NotFound";
import { Errors5 } from "./src/screens/Errors5";
import { Registration } from "./src/screens/Register";
import { Settings } from "./src/screens/Settings";
import { Edit } from "./src/screens/Edit";
import { Chats } from "./src/screens/Chats";
import Block from "./src/lib/Block";
// import { modalWindow } from "./src/components/modal";

// window.toggleModal  = modalWindow;

const routes = {
  Main: "/",
  Login: "/login",
  Errors5: "/500",
  Registration: "/reg",
  Settings: "/settings",
  Edit: "/edit",
  Chats: "/chats",
};

function getPage() {
  switch (window.location.pathname) {
    case routes.Login:
      return new Login({ containerClass: "container" });
    case routes.Errors5:
      return new Errors5();
    case routes.Main:
      return new Login({ containerClass: "container" });
    case routes.Registration:
      return new Registration({ containerClass: "containerReg" });
    case routes.Settings:
      return new Settings({
        name: "Иван",
        src: "statics/profile.jpg",
        srcBack: "statics/back.png",
        onClick: "",
        onClickBack: "window.location = '/chats'",
      });
    case routes.Edit:
      return new Edit({
        name: "Иван",
        src: "statics/profile.jpg",
        srcBack: "statics/back.png",
        onClick: "",
        onClickBack: "window.location = '/chats'",
        onSubmit: "window.location = '/chats'",
      });
    case routes.Chats:
      return new Chats({
        username: "Игорь",
        src2: "statics/moon.jpg",
        src_ava: "statics/pers1.jpg",
      });
    default:
      return new NotFound();
  }
}

function renderPage(block: Block) {
  const root = document.querySelector("#main");

  if (root) {
    root.innerHTML = "";
    root.append(block.getContent()!);
    block.dispatchComponentDidMount();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#main");

  renderPage(getPage());
});
