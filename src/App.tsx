import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  //array
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>Not found</p> : null} */}
      {items.length === 0 && <p>Not found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
