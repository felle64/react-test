import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';

function App() {
  const [account, setAccount] = useState();

  useEffect(() => {
    const getAccounts = async () =>
    {
      const web3 = new Web3(Web3.givenProvider || "https://localhost:7545")
    const loggedInAs = await web3.eth.getAccounts();
    console.log(loggedInAs);
    setAccount(loggedInAs[0]);
    }

    console.log("TEST");
    if (account) return;
    getAccounts();

    
    }
  )

  return (
    <div className="App">
      <p> Account: {account}</p>
      <p>WAH</p>
    </div>
  );
}

export default App;
