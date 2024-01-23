export default function Package(props) {
  function handleClick() {
    alert("You clicked the button!");
  }

  return (
    <div className="col">
      Name: {props.name}
      <br />
      <b>Score:</b>
      <i>{props.score}</i>
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
