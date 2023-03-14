export function ReceiverOfData(props) {
  return (
    <div>
      <h1>Receiver of Data</h1>
      <p>Received name: {props.name}</p>
      <p>Received age: {props.age}</p>
      <p>Received city: {props.city}</p>
    </div>
  );
}