export default function Block(props) {
  console.log(props);
  return (
    <div className="block">
      <b>Name:</b> <br />
      {/* Kushal Rajkarnikar */}
      {/* dynamic value or JS expression */}
      {props.name}
      <hr />
      <b>Ward Number:</b>
      <br />
      {props.ward}  
      <hr />
      <b>Address:</b> <br />
      {props.address}
    </div>
  );
}
