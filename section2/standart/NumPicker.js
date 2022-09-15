function getNum() {
  return Math.floor(Math.random() * 10 + 1);
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 1) {
      msg = "1, zicado";
    } else {
      msg = "Bora";
    }
    return (
      <div>
        <h1> Your Number is {num}</h1>
        <p>{num === 7 ? "congrats" : "unlucky!"} </p>
        <p>
          {num === 7 && (
            <img src="https://images4.alphacoders.com/900/thumb-1920-900718.jpg" />
          )}
        </p>
        {msg}
      </div>
    );
  }
}
