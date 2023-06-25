import Handlebars from "handlebars";

export const inputGroupSettingsEdit = ({label, id, value}) =>
  Handlebars.compile(`
    <section class="inputGroupSettingsEdit">
      <div class="inputGroupSettingsEdit__label">${label}</div>
      <input name=${id} class="inputGroupSettingsEdit__value" value=${value}>
    </section>
  `)();
