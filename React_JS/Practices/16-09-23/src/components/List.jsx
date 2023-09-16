import {useState } from "react";

export default function List() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const items = (e) => {
    setItem(e.target.value); 
  };

  const addItem = () => {
    setList([...list, item]);
  };

  const removeItem = (i) => {
    list.splice(i, 1);
    setList([...list]);
  };

  return (
    <div>
      <table>
        <tbody>
        {list.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item}</td>
              <td>
              <button  onClick={() => {
                removeItem(i)
              }}>Remove</button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
      <input type="text" onChange={items} />
      <button onClick={addItem}>add</button>
    </div>
  );
}
