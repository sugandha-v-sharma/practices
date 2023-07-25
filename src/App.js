import React, { useState } from "react";
import "./App.css";

function App() {

  const [selectedItem, setSelectedItem] = useState("")

  const listArray = ["Banana", "Chikoo", "Apple", "Mango", "Watermelon"];

  const itemToBeSearched = (e) => {
    listArray.filter((item) => {
      if(item === e?.target?.value){
        setSelectedItem(item)
      }
    })
  }

  return (
    <>
      <select value="select" onChange={(e) => {itemToBeSearched(e)}}>
        <option value="none" selected>
          Select an Option
        </option>
        {listArray?.map((item) => {
          return (
            <>
              <option value={item}>{item}</option>
            </>
          );
        })}
      </select>
      <div>
        Selected Item is: {selectedItem}     
      </div>
    </>
  );
}

export default App;
