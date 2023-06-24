import Handlebars from "handlebars";

export const inputGroupSettings = ({label, id, value}) =>
  Handlebars.compile(`
    <section class="inputGroupSettings">
      <div class="inputGroupSettings__label">${label}</div>
      <div name=${id} class="inputGroupSettings__value"}>${value}</div>
    </section>
  `)();