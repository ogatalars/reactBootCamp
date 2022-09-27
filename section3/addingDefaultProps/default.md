Default props -> Components can specify default values for missing props
demo ->

class Hello extends React.Component {
static defaultProps = {
from: "Mari",
};
render() {
return <p> Hi {this.props.to} from {this.props.from} </p>
}
}
