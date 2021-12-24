import React from "react";
import Form from "./FormInput";
import List from "./List";

const App = () => {
  return (
    <>
      <div>
        <Form />
      </div>
      <div>
        <h2>Items</h2>
        <List />
      </div>
    </>
  );
};

export default App;
