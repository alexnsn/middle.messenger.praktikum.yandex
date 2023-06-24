import Handlebars from "handlebars";

export const LinkButton = ({label, className, path}) =>
  Handlebars.compile(`
    <button class="${className}" onclick="window.location = '${path}'">
        ${label}
    </button>
  `)();