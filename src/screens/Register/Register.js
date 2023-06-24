export const regFormTemplate = `
<main class="{{containerClass}}">
  <h1 class="containerReg__titleReg">{{title}}</h1>
  <form class="form-group-reg">
      <section class="form-group-reg__input">
        {{#each inputs}}
          {{{this}}}
        {{/each}}
      </section>
    <section class="form-group-reg__other">
      {{#each other}}
        {{{this}}}
      {{/each}}
    </section>
 </form>
</main>
`;