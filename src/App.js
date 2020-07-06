import React, { Component, Fragment } from "react";
import ListOfItems from "./components/ListOfItems";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      result: [],
      checkedItems:[],
    };
  }

  render() {
    this.changeHandle = (e) => {
      e.preventDefault();
      const userText = e.target.value.trim();
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
        result: [...this.state.result, newItem],
      });
      // console.log(this.state.result)
    };

    this.remove = (itemToRemove) => {
      const newArray = this.state.result.filter(
        (item) => item !== itemToRemove
      );
      console.log(newArray);
      this.setState({
        result: newArray,
      });
    };

    this.check = (itemToCheck) => {
      const newCheckArray = this.state.result.filter(
        (item) => item === itemToCheck
      );
      //newCheckArray.style.color="red";
      console.log(newCheckArray);
      this.setState({
        checkedItems:newCheckArray,
      });
     console.log(this.state.checkedItems)
    };


    return (
      <Fragment>
        <h1>Hey, stranger, this is your list for today:</h1>
        <form onSubmit={this.submitHandle}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.changeHandle}
            placeholder="your new item"
          ></input>
          <input type="submit" value="Add" />
        </form>
        <div className="items-box">
        <ListOfItems list={this.state.result} del={this.remove} check={this.check}/>
        </div>
      </Fragment>
    );
  }
}
export default App;
