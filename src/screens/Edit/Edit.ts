export const editFormTemplate = `
  <main class="profile-container">
    <section class="profile-container__main-info">
      <section class="profilePic" onclick={{onClick}}>
        <img name="profilePic" class="profilePic__img"  src="{{src}}" alt="Фото профиля"/>
        <span class="profilePic__text">Поменять аватар</span>
      </section>
      <h1 class="name">{{name}}</h1>
    </section>
    <form id="editForm" onsubmit="{{onSubmit}}">
      <section class="profile-container__info">
        {{{group_0}}}
        {{{group_1}}}
        {{{group_2}}}
        {{{group_3}}}
        {{{group_4}}}
        {{{group_5}}}
        {{{group_6}}}
      </section>
      <section class="profile-container__btn">
        {{{button_0}}}
      </section>
    </form>
  </main>
`;
