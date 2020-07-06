import React, { Component, Fragment } from "react";
import ListOfItems from "./components/ListOfItems";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      curTime: new Date().toLocaleString().substr(0, 8),
      result: [],
      color: "",
    };
  }

  render() {
    this.changeHandle = (e) => {
      e.preventDefault();
      const userText = e.target.value;
      // console.log(userText);
      this.setState({
        userInput: userText,
      });
      // console.log(this.state.userInput)
    };

    this.submitHandle = (e) => {
      e.preventDefault();
      const newItem = this.state.userInput;
      this.setState({
        userInput: "",
        result: [
          ...this.state.result,
          { id: this.state.result.length, title: newItem, done: false },
        ],
      });
    };

    this.remove = (itemToRemove) => {
      const newArray = this.state.result.filter(
        (item) => item.id !== itemToRemove
      );
      console.log(newArray);
      this.setState({
        result: newArray,
      });
    };

    this.check = (itemToCheck) => {
      const newArray = this.state.result.filter((item) => {
        if (item.id === itemToCheck) {
          item.done = !item.done;
        }
        return item;
      });
      console.log(newArray);
      this.setState({
        result: newArray,
        // color: "red",
      });
      console.log(this.state.result);
    };

    return (
      <Fragment>
        <h1>
          To do today, &nbsp; <span>{this.state.curTime}:</span>
        </h1>
        <form onSubmit={this.submitHandle}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.changeHandle}
            placeholder="Add an item"
          ></input>
          <input type="submit" value="Add" />
        </form>
        <div className="items-box">
          <ListOfItems
            list={this.state.result}
            del={this.remove}
            check={this.check}
            // style={{ color: this.state.color }}
          />
        </div>
      </Fragment>
    );
  }
}
export default App;
