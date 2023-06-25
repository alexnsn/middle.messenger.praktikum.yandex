import { Login } from "./src/screens/Login";
import { NotFound } from "./src/screens/NotFound";
import { Chats } from "./src/screens/Chats";
import { Registration } from "./src/screens/Register";
import { Settings } from "./src/screens/Settings";
import { Edit } from "./src/screens/Edit";
import { Errors5 } from "./src/screens/Errors5";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#main");

  function getPage() {
    switch (window.location.pathname) {
      case "/login":
        return Login();
      case "/500":
        return Errors5();
      case "/":
        return Login();
      case "/chats":
        return Chats();
      case "/reg":
        return Registration();
      case "/settings":
        return Settings();
      case "/edit":
         return Edit();
      default:
        return NotFound();
    }
  }
  root.innerHTML = getPage();
});
