import Block from "../lib/Block";

interface InputGroupSettingsProps {
  label: string;
  id: string;
  value: string;
  events?: {
    onblur?: (e: Event) => void;
  };
}

export class InputGroupSettings extends Block<InputGroupSettingsProps> {
  constructor(props: InputGroupSettingsProps) {
    super("div", props);
  }

  render() {
    return this.compile(
      `<section class="inputGroupSettings">
            <p class="inputGroupSettings__label">{{label}}</p>
            <p name={{id}} class="inputGroupSettings__value">{{value}}</p>
        </section>
          `,
      this.props
    );
  }
}
