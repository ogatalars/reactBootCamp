class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Felipe" hobbies={["Games", "Piano", "Cinema"]} />
        <Friend name="Ogata" hobbies={["Art", "Metal", "Filosofia"]} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
