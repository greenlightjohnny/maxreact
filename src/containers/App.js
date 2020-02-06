import React from "react";
import logo from "./logo.svg";
import main from "./App.module.css";

import Person from "../components/person/person.jsx";

class App extends React.Component {
  state = {
    persons: [
      { id: "dasfgsad", name: "max", age: 29 },
      { id: "asdfss", name: "Same", age: 79 },
      { id: "gyvcsx", name: "Lou", age: 39 }
    ]
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(peep => {
      return peep.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });

    // this.setState({
    //   person: [
    //     { id: "33", name: "max", age: 29 },
    //     { id: "sadfas", name: event.target.value, age: 79 },
    //     { id: "dfhsda", name: "Lou", age: 39 }
    //   ]
    // });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",

      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let person = null;
    let btnClass = [main.Button];
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((peep, index) => {
            return (
              <Person
                key={peep.id}
                click={() => this.deletePersonHandler(index)}
                name={peep.name}
                age={peep.age}
                changed={event => this.nameChangedHandler(event, peep.id)}
              ></Person>
            );
          })}
        </div>
      );
      btnClass = main.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(main.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(main.bold);
    }

    return (
      <div className={main.App}>
        <p className={assignedClasses}>Helloooooo</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {person}
      </div>
    );
  }
}
export default App;
