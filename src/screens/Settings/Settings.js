export const settingsFormTemplate = `
  <img class="back" onclick="{{onClickBack}}" src={{srcBack}}>
  <main class="profile-container">
    <section class="profile-container__main-info">
      <section class="profilePic" onclick={{onClick}}>
        <img name="profilePic" class="profilePic__img"  src="{{src}}" alt="Фото профиля"/>
        <span class="profilePic__text">Поменять аватар</span>
      </section>
      <h1 class="name">{{name}}</h1>
    </section>
    <section class="profile-container__info">
      {{#each info}}
        {{{this}}}
      {{/each}}
    </section>
    <section class="profile-container__btn">
      {{#each other}}
          {{{this}}}
      {{/each}}
    </section>
  </main>
`;
