import './App.css';
import { useState } from 'react';


  
    // todoList.push(document.getElementById('enterTask').value);
  

const App = () => {

  const [listItem, setListItem] = useState('test')
  console.log(listItem);
  const [todoList, setList] = useState([])


  const handleChange = (event) => setListItem(event.targt.value)
  const handleAdd = (event) =>  setList(event.target.value)

  return (
    <div className="App">
      
        <input type="text" value={listItem} onChange={handleChange} />

        <button onClick={handleAdd}>Add</button>
        {console.log(todoList)}
        <ul>
          {
          todoList.map((elem) => {
            return <li key="">{elem}</li>
          })
          }
        </ul>
      
    </div>
  );
}

export default App;
