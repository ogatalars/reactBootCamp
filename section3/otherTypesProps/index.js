class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Ogata"
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          bangs={4}
        />
        <Hello
          to="Ringo"
          from="Ogata"
          num={4}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          bangs={10}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
