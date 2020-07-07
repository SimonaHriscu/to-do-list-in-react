import React, { Fragment, useState } from "react";

const ItemInfo = ({ info }) => {
  return (
    <div>
      <h1>{info.title}</h1>
    </div>
  );
};

const AddListForm = ({ addNewItem }) => {
  const [userInput, setUserInput] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    if (userInput) {
      addNewItem(userInput);
    }
    setUserInput("");
  };

  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

const App = () => {
  const [items, setList] = useState([
    { title: "Learn JavaScript" },
    { title: "Learn React" },
  ]);

  const addNewItem = (userText) => {
    const newArr = [...items, { title: userText }];
    setList(newArr);
  };

  const remove = (itemToRemove) => {
    const newArr = items.filter((item) => item !== itemToRemove);
    setList(newArr);
  };

  return (
    <Fragment>
      <h1>Things to do today:</h1>
      <ul>
        {items.map((item, i) => (
          <li>
            <ItemInfo key={i} info={item} />
            <button className="delete-btn" onClick={() => remove(item)}>
              ✗
            </button>
          </li>
        ))}
      </ul>
      <AddListForm addNewItem={addNewItem}></AddListForm>
    </Fragment>
  );
};

export default App;
