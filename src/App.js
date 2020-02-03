import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Person from "./person/person.jsx";

class App extends React.Component {
  state = {
    person: [
      { name: "max", age: 29 },
      { name: "Same", age: 79 },
      { name: "Lou", age: 39 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      person: [
        { name: newName, age: 29 },
        { name: "Same", age: 79 },
        { name: "Lou", age: 39 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      person: [
        { name: "max", age: 29 },
        { name: event.target.value, age: 79 },
        { name: "Lou", age: 39 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <button style={style} onClick={() => this.switchNameHandler("assfsaf")}>
          Switch Name
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "loos")}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}

export default App;
