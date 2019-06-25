import React from 'react';
import classesStyle from './Cockpit.css';

const Cockpit = (props) => {
    const classes = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classesStyle.Red;
    }

    if (props.persons.length <= 2) {
      classes.push(classesStyle.red);
    }
    if (props.persons.length <= 1) {
      classes.push(classesStyle.bold);
    }

    return (
        <div className={classesStyle.Cockpit}>
            <h1> Hi, Karen!</h1>
            <p className = {classes.join(' ')}>This is really working</p>
            <button 
                onClick={props.clicked}
                className = {btnClass}
            > Switch Name </button>
        </div>
    );
}

export default Cockpit;