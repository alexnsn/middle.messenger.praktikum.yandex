export const chatsTemplate = `
   <div class="wrapper">
   <header class="header">
        <div class="header__content">
            <div class="header__left">
                {{{btnProfile}}}
                {{{inputSearch}}}
            </div>
            <div class="header__avatar">
                <img src="{{src_ava}}"  alt="Sobesednik">
                <div class="header__logo__text">{{{username}}}</div>
            </div>
        </div>
</header>
    <main class="main">
        <ul class="main__list">
            {{{ListMessages}}}
        </ul>
        <div class="main__chat">
            <span class="main__date">01.07</span>
            <div class="message message-from">
                <div class="message__inner message__inner-from">
                    <span class="message__text">
                    Луна - естественный спутник Земли, являющийся одним из самых близких космических объектов к нашей planete. Вот несколько интересных фактов о Луне:

                    Размер и расстояние: Луна является пятнадцатым по размеру спутником в Солнечной системе. Ее диаметр составляет около 3 474 километров, что составляет примерно четверть диаметра Земли. Расстояние от Земли до Луны составляет примерно 384 400 километров.
                    
                    Фазы Луны: Наблюдая Луну с Земли, мы видим ее в различных фазах. От полнолуния до новолуния проходит примерно 29,5 дней, и в этот период мы можем видеть изменение освещенной части Луны.
                    
                    Гравитация: Гравитационное поле Луны примерно шесть раз слабее гравитационного поля Земли. Это означает, что вес объекта на Луне составляет примерно 16,6% его веса на Земле. Из-за этого астронавты на Луне могут прыгать выше и дальше, чем на Земле.
                    
                    Исследования: Луна долгое время была объектом исследования. В 1969 году американский астронавт Нил Армстронг стал первым человеком, ступившим на Луну во время миссии "Аполлон-11". С тех пор на Луну было отправлено несколько миссий, и ее поверхность была исследована и изучена.
                    
                    Лунные горы и кратеры: Поверхность Луны имеет множество гор и кратеров. Некоторые из них образовались в результате столкновений с метеоритами и астероидами, в то время как другие образовались из-за геологических процессов, происходящих на Луне.
                    </span>
                    <span class="message__date message__date-from">19:00</span>
                </div>
            </div>

            <div class="message message-from">
                <div class="message__inner message__inner-from message-img ">
                    <img src="{{src2}}" alt="moon">
                    <span class="message__date message__date-from">12:35</span>
                </div>
            </div>

            <div class="message message-to">
                <div class="message__inner message__inner-to">
                    <span class="message__text">
                        Test
                    </span>
                    <span class="message__date message__date-to">12:36</span>
                 </div>
            </div>
            <form id="messageForm" class="form-message">
                <div class="main__footer">
                    {{{inputSend}}}
                </div>
                <div>
                    {{{btnSend}}}
                </div>
            </form>
        </div>
        
    </main>
   </div> 
`;
