class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    return (
      <div>
        <h2> Slot Machine </h2>
        <p>
          {s1} {s2} {s3}
        </p>
        <p> {winner ? "Winner" : "Loser"}</p>
      </div>
    );
  }
}
