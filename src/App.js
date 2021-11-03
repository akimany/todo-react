import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [listItem, setListItem] = useState('test')
  const [todoList, setList] = useState([])

  const handleChange = (event) => setListItem(event.target.value)

  const handleAdd = () =>  {
    if (listItem.length === 0) {return}
    const newList = todoList.concat([{listItem, id: uuidv4()}])
    setList(newList)
    setListItem('')
  }

  const PrintListItem = (props) => { 
      const listLength = props.List.length
      if (listLength > 0){
       return props.List.map((item) => <li key={item.id}>{item.listItem}</li>)
      }
      else if (listLength === 0) {
        return <li>Add a todo item</li>
      }          
    }

  return (
    <div className="App">
        <input type="text" value={listItem} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>Add</button>
        <ul>
          <PrintListItem List={todoList} />
        </ul>
      
    </div>
  );
}

export default App;
