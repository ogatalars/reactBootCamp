// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 			</div>
// 		);
// 	}
// }
// this first way is the classic way - classes

// here is tehe second way - function way - hooks

function getMood() {
  const moods = ["Angry", "sad", "Happy", "Quiet", "Paranoid"];
  return moods[Math.floor(Math.random() * moods.length)];
}

function Hello() {
  return (
    <div>
      <h1> Hello There!</h1>
      <h1> Hello There! </h1>
      <h3> My number is: {2 * 13}</h3>
      <h1> My current Mood is: {getMood()}</h1>
    </div>
  );
}

// So whats the difference?
// - Both can accept props and render content
// - Historically, function components coundn`t use important features like - state and lifecycle methods
// - With the introduction of Hooks, we can now write full-feature function components

ReactDOM.render(<Hello />, document.getElementById("root"));
