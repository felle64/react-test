import { useEffect, useState } from "react";
import Web3 from "web3";
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "../config";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const loadBlockchainData = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const todoListContract = new web3.eth.Contract(
        TODO_LIST_ABI,
        TODO_LIST_ADDRESS
      );

      setContract(todoListContract);

      const todoCount = await todoListContract.methods.todoCount().call();
      const todos = [];

      for (let i = 1; i <= todoCount; i++) {
        const todo = await todoListContract.methods.todos(i).call();
        todos.push(todo);
      }

      setTodoItems(todos);
    };

    if (account) return;
    loadBlockchainData();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todoText = e.target.elements.todoText.value;

    if (todoText.trim() !== "") {
      await contract.methods.createTodo(todoText)
      .send({ from: account });
      const todoCount = await contract.methods.todoCount()
      .call();
      const todo = await contract.methods.todos(todoCount)
      .call();
      setTodoItems([...todoItems, todo]);
      e.target.elements.todoText.value = "";
    }
  };

  const handleToggle = async (id) => {
    await contract.methods.toggleTodo(id).send({ from: account });
    const updatedTodo = await contract.methods.todos(id).call();
    const newTodoItems = todoItems.map((todo) =>
      todo.id === id ? updatedTodo : todo
    );
    setTodoItems(newTodoItems);
  };

  const handleRemove = async (id) => {
    await contract.methods.removeTodo(id).send({ from: account });
    const newTodoItems = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(newTodoItems);
  };

  return (
    <div>
      <h1>Things Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoText" className="inputBox" placeholder="Add Item" />
        <button className="addButton" type="submit">
          Add Item
        </button>
      </form>
      <ul className="toDoItemListUl">
        {todoItems.map((todo) => (
          <li key={todo.id} className="toDoItemListLi">
            {todo.text}
            <button
              className="removeButton"
              onClick={() => handleRemove(todo.id)}
            >
              Remove Item
            </button>
            <button
              className="toggleButton"
              onClick={() => handleToggle(todo.id)}
            >
              {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
