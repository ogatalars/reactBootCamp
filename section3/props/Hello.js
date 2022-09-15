class Hello extends React.Component {
  render() {
    // console.log(this.props);
    // console.log(this.prop.this);
    return (
      <p>
        {" "}
        Hi {this.props.to} from {this.props.from}
      </p>
    );
  }
}
