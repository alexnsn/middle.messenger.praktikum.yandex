import Handlebars from "handlebars";

export const inputGroup = ({label, id, type, placeholder}) =>
  Handlebars.compile(`
  <article class="inputGroup">
      <label class="label" for=${id}>${label}</label>
      <input name=${id} class="input" type=${type} id=${id} placeholder=${placeholder}>
   </article>
`)();