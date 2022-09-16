class Hello extends React.Component {
  render() {
    let bangs = "! ".repeat(this.props.bangs);
    return (
      <div>
        <h1>
          {this.props.to} from {this.props.from} {bangs}
        </h1>
      </div>
    );
  }
}
