import React, { Component } from 'react';
import classesStyle from './App.css';
//import './App.css';
//import Person from '../components/Persons/Person/Person';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  //state solo se puede definir en clases que extienden Component
  state = {
    persons: [
      { id:'1', name:'Karen', age:'28'},
      { id:'2', name:'Jaime', age:'28'},
      { id:'3', name:'Karol', age:'-7'}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = ( event, id ) => {
    //findIndex() retorna el index del primer
    //elemento que satisfaga la condición, recorre el array.
      
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //se hace inmutable
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState( {persons: persons} );

    this.setState({
      persons: [
        { name: 'Karen', age:'28'},
        { name: event.target.value, age:'29'},
        { name:'Karol', age:'-7'}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    // Esta es una forma mas óptima de condicionar el comportamiento 
    let persons = null;
    
    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
          {/* <ErrorBoundary key={person.id}>
               <Person  
              // click={() => this.deletePersonHandler(index)}
              // name={person.name}
              // age={person.age}
              // key={person.id}
              // changed={(event) => this.nameChangeHandler(event, person.id)}
              // />
            //</ErrorBoundary> */}
        </div>  
      );  
    }

    return (
        <div className={classesStyle.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;

