import React from "react";
//import './person.css';

import classes from './person.module.css'
import AuthContext from '../../../context/auth-context'


class Person extends React.Component {

  constructor(props) {
    super(props)

    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
      //this.inputElement.focus();
      this.inputElementRef.current.focus()
  }

  render() {
    console.log('[Person.js rendering....')
  return  (
 
    
    <div className={classes.Person}>
       <AuthContext.Consumer>
      {(context) => context.auth ? <p>Approved</p> : <p>Please log in</p>}
      </AuthContext.Consumer>
  
    <p onClick={this.props.click}>
      I'm {this.props.name} I am {this.props.age} years old
    </p>
    <p>{this.props.children}</p>
    <input 
    type="text" 
    onChange={this.props.changed} 
    //ref={(inputEl) => {this.inputElement = inputEl}}
    ref={this.inputElementRef}
    value={this.props.name}/>
    
    </div>
    )
  
  }
  
}; 

export default Person;
