class Hello extends React.Component {
  static defaultProps = { from: "Renata", bangs: 1 };
  render() {
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <p>
          {" "}
          {this.props.to} from {this.props.from} {bangs}
        </p>
      </div>
    );
  }
}
