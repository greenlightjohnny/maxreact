import React, { Component } from 'react'
import Person from './person/person.jsx'

class Persons extends Component {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js getDerivedStateFromProps]')
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldcompenentupdate')
  //   if(nextProps.persons !== this.props.persons) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapShotBeforeUpdate')
    return prevProps;
  }

  componentDidUpdate() {
    console.log('[Persons.js componentDidupdate')
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')
  }
  

  render() {
    console.log('[Persons.js] rendering...');
   return this.props.persons.map((peep, index) => {
        return (
          <Person
            key={peep.id}
            click={() => this.props.click(index)}
            name={peep.name}
            age={peep.age}
            changed={event => this.props.changed(event, peep.id)}
            
          ></Person>
        );
      })
    }
    };

export default Persons


