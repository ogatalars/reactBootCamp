class App extends React.Component {
  render() {
    return (
      <div>
        <Machine s1="x" s2="x" s3="x" />
        <Machine s1="y" s2="x" s3="x" />
        <Machine s1="t" s2="x" s3="x" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
