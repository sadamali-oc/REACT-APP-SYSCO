// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, seltAlertVisibility] = useState(false);
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      {/* 
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
 */}
      {/* <Alert>
        Hello<span>World</span> 
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => seltAlertVisibility(false)}> My alert</Alert>
      )}
      <Button color="primary" onClick={() => seltAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
