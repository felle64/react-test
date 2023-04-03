import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { PERSON_LIST_ABI, PERSON_LIST_ADDRESS } from './config';

function App() {
  const [account, setAccount] = useState();
  const [indexes, setIndexes] = useState();

  useEffect(() => {
    const getAccounts = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
      const loggedInAs = await web3.eth.getAccounts();
      setAccount(loggedInAs[0]);
      console.log(loggedInAs);

      const personContract = new web3.eth.Contract(
        PERSON_LIST_ABI, 
        PERSON_LIST_ADDRESS
        );

      let indexes = await personContract.methods.getIndexList().call();
      console.log(indexes);

      const html = indexes.map((index) => {
        return <li>{index}</li>;
      })
      setIndexes(html)

    };

    console.log("TEST");
    if (account) return;
    getAccounts();
  }, []);

  return (
    <div className="App">
      <p> Account: {account}</p>
      <ul>
        {indexes}
      </ul>
    </div>
  );
}

export default App;

