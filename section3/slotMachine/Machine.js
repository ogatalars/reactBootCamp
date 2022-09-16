class Machine extends React.Component {
  render() {
    let combinatorie;

    let random = Math.floor(Math.random() * 10);
    if (random < 3) {
      combinatorie = "X, Y, Z";
    } else if (random >= 3 && random < 7) {
      combinatorie = "Y, Y, Z";
    } else {
      combinatorie = "X, X, X";
    }

    let winner = "Voce ganhou!";
    let loser = "Você perdeu!";

    const hi = "Slot Machines! ";
    return (
      <div>
        <h1>{hi}</h1>
        <br></br>
        <p> combinatorie</p>
      </div>
    );
  }
}
