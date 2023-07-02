import Block from "../../lib/Block";

interface ButtonProps {
  label: string;
  events?: {
    click?: () => void;
    submit?: (e: Event) => void;
  };
  type?: string;
}

export class LinkButton extends Block<ButtonProps> {
  constructor(props: ButtonProps, buttonType = "button") {
    super("button", { ...props, type: buttonType });
  }

  render() {
    return this.compile(`{{label}}`, this.props);
  }
}
