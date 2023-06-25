export const loginFormTemplate = `
<main class="{{class}}">
  <h1 class="container__title">{{title}}</h1>
  <form class="form-group">
      <section class="form-group__input">
        {{#each inputs}}
          {{{this}}}
        {{/each}}
      </section>
    <section class="form-group__other">
      {{#each other}}
        {{{this}}}
      {{/each}}
    </section>
 </form>
</main>
`;
