import Block from "../lib/Block.js";

interface MessageProps {
  name: string;
  src: string;
}

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super("li", props);
  }

  protected render() {
    return this.compile(
      `

      <button class="chat">
          <div class="chat__body">
              <img src="{{src}}" alt="user">
          <div class="chat__bodyText">
              <span class="chat__name">
                  {{name}}
              </span>
              <div class="chat__innerText">
                  <span class="chat__me">Вы:</span>
                  <span class="chat__text">Test!</span>
              </div>
          </div>
          </div>
          <div class="chat__rightText">
            <span class="chat__day">02.07</span>
            <div class="chat__newCount" >2</div>
          </div>
      </button>
      
      `,
      this.props
    );
  }
}
