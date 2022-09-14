class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>HI</h1>
        <img src="https://images4.alphacoders.com/900/thumb-1920-900718.jpg"></img>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("Root")); //
// Nao conseguimos retornar mais de um elemento
