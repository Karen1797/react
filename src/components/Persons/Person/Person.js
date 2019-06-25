import React from 'react';
import classesStyle from './Person.css';
//import Radium from 'radium';

const Person = ( props ) => {
   /* const style = {
        '@media (min-width: 500px)': {
            width:'450px'
        }
    };*/
    
    //errors handler
    // const rnd = Math.random();
    // if (rnd > 0.7) {
    //     throw new Error ('Something is wrong');
    // }

    return(
        <div className= {classesStyle.Person} /*style={style}*/>
            <p onClick={props.click} >I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            {/* onChange se activa cada vez que el elemento cambie */}
            <input 
                type='text' 
                onChange={props.changed}
                value={props.name} />
        </div>
    );
}

//export default Radium(Person);
export default Person;