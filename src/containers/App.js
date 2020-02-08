import React from "react";
import Cockpit from "../components/cockpit/cockpit.jsx";
import main from "./App.module.css";
import Persons from "../components/persons/persons.jsx";
//import Person from "./components/persons/person/person.jsx";
import AuthContext from "../context/auth-context";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "dasfgsad", name: "max", age: 29 },
      { id: "asdfss", name: "Same", age: 79 },
      { id: "gyvcsx", name: "Lou", age: 39 }
    ],
    showCockPit: true,
    changeCounter: 0,
    authen: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js", "getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  // shouldComponentUpdate() {
  //   console.log("[App.js] shouldComponentUpdate");
  //   return true;
  // }
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
      persons: persons,
      changeCounter: this.state.changeCounter + 1
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

  loginHandler = () => {
    this.setState({ authen: true });
    console.log("hello");
  };

  render() {
    console.log("[App.js] render");

    let person = null;

    if (this.state.showPersons) {
      person = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuth={this.state.authen}
        ></Persons>
      );
    }

    return (
      <div className={main.App}>
        <button
          onClick={() => {
            this.setState({ showCockPit: !this.state.showCockPit });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            auth: this.state.authen,
            login: this.loginHandler
          }}
        >
          {this.state.showCockPit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              togglePerson={this.togglePersonHandler}
            />
          ) : null}
          {person}
        </AuthContext.Provider>
      </div>
    );
  }
}
export default App;
