import ListGroup from "./components/ListGroup";

function App() {
  //array
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

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
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
