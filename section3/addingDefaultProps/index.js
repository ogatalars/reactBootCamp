class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Renas" from="Ogata" bangs={3} />
        <Hello to="Renas" from="Ogata" bangs={3} />
        <Hello to="Renas" bangs={3} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
