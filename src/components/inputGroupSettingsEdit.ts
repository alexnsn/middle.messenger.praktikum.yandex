import Block from "../lib/Block";

interface InputGroupSettingsEditProps {
  label: string;
  id: string;
  value: string;
  events?: {
    focusout?: (e: Event) => void;
  };
}

export class InputGroupSettingsEdit extends Block<InputGroupSettingsEditProps> {
  constructor(props: InputGroupSettingsEditProps) {
    super("div", props);
  }

  render() {
    return this.compile(
      `<section class="inputGroupSettingsEdit">
            <div class="inputGroupSettingsEdit__label">{{label}}</div>
            <input name={{id}} class="inputGroupSettingsEdit__value" value = {{value}}>
        </section>
          `,
      this.props
    );
  }
}
