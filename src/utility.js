export const code2 = `
import React from "react";
import Prism from "prismjs";
export class Prisma extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.highlight();
  }
  componentDidUpdate() {
    this.highlight();
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current);
    }
  };
  render() {
    const { code, plugins, language } = this.props;
    return (
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code ref={this.ref} className={\`language-\${language}\`}>
          {code.trim()}
        </code>
      </pre>
    );
  }
}
`;
export const code3 = `
.nouk_0_BUTTON_SPAN {

  &.size {
    width:45px;
    height:67px;
    min-width:0px;
    min-height:0px;
    max-width:0px;
    max-height:0px;
  }

  &.background {
    background-color:#3e1ede;
    background-repeat:no-repeat;
    background-position:top;
    opacity:0.67;
  }

  &.font {
    color:#d40e0e;
    font-size:0px;
  }

}
`;
