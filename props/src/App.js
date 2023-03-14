import './App.css';
import { ReceiverOfData } from './components/ReceiverOfData';

function App() {

  const data = {
    name: "John",
    age: 30,
    city: "New York"
  }
  return (
    <div className="App">
      <ReceiverOfData 
        name={data.name}
        age={data.age}
        city={data.city}
      />
      
    </div>
  );
}

export default App;
