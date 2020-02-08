import React, { Component, useEffect, useRef } from 'react'
import classes from './cockpit.module.css'
import AuthContext from '../../context/auth-context'
const Cockpit = ( props ) => {

    const toggleBtnRef = useRef(null);
    //toggleBtnRef.current.click();

    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        //  setTimeout(() => {
        //     alert('saved data to cloud!')
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
           
            console.log('[Cockpit.js] cleanup work in useEffect')
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        };
    })

    let btnClass = '';

    const assignedClasses = [];
    if(props.showPersons) {
        btnClass = classes.Red
    }
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
<h1 className={assignedClasses}>{props.title}</h1>
        <button className={btnClass} 
                ref={toggleBtnRef}
                onClick={() => props.togglePerson()}
                >
          Toggle Persons
        </button>
        <AuthContext.Consumer>
            {(context) => <button onClick={context.login}>Login</button> }
        
        </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(Cockpit);