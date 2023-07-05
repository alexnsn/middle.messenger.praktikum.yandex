import Block from "../lib/Block";

interface InputGroupProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  class?: string;
  events?: {
    focusout?: (e: Event) => void;
  };
}

export class InputGroup extends Block<InputGroupProps> {
  constructor(props: InputGroupProps) {
    super("div", props);
  }

  render() {
    return this.compile(
      `<article class="inputGroup">
        <label class="label" for={{id}}>{{label}}</label>
        <input name={{id}} class="input{{class}}" type={{type}} id={{id}} placeholder="{{placeholder}}">
      </article>`,
      this.props
    );
  }
}
