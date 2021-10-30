import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [listItem, setListItem] = useState('test')
  const [todoList, setList] = useState([])

  const handleChange = (event) => setListItem(event.targt.value)

  const handleAdd = (event) =>  {
    const newList = todoList.concat({val: event.target.value, id: uuidv4() })
    setList(newList)
    setListItem('')
  }

  const PrintListItem = (props) => { 
      const listLength = props.List.length
      console.log(listLength)
      if (listLength > 0){
       return props.List.map((item) => <li key={uuidv4()}>item</li>)
      }
      else if (listLength === 0) {
        return <li>Add a todo item</li>
      }          
    }

  return (
    <div className="App">
      <input type="text" />
        {/* <input type="text" value={listItem} onChange={handleChange} /> */}
        <button onClick={handleAdd}>Add</button>

        <ul>
        <PrintListItem List={todoList} />
        </ul>
      
    </div>
  );
}

export default App;
