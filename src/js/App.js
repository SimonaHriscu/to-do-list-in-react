import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <p class = "app-title"> MY LIST</p>
        <div className = "container">
          <p class = "list-title">Current To Do list:</p>
          <br />
          <div class = "content">
            <div class = "input">
          <input
            type="text"
            placeholder="Add new Item to the list:"
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button class = "add-btn" onClick={() => this.addItem()}>Add</button>
          <br />
          </div>
          <ul>
            {this.state.list.map((item, i) => {
              return (
                <li key={i}>
                  {item.value}
                  <button class = "delete-btn" onClick={() => this.deleteItem(item.id)}>✗</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}
export default App;
