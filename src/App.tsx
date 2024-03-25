import ListGroup from "./components/ListGroup";
import { MouseEvent } from "react";

function App() {
  //array
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  let selectedIndex = 0;

  //type annotation
  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  // items = [];

  //   const getMessage =()=>{
  // return items.length == 0 ? <p>Not found</p> : null
  //   }
  // if (items.length == 0)
  //   return (
  //     <>
  //       <h1>List</h1>

  //     </>
  //   );

  //rendering
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
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
