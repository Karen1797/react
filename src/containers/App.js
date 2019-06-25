import React, { Component } from 'react';
import classesStyle from './App.css';
//import './App.css';
import Person from './Persons/Person/Person';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass = '';
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
            //<ErrorBoundary key={person.id}>
              <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            //</ErrorBoundary>
            )
          } )}
        </div>  
      );     
      btnClass = classesStyle.Red
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(classesStyle.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(classesStyle.bold);
    }

    return (
        <div className={classesStyle.App}>
          <h1> Hi, Karen!</h1>
          <p className = {classes.join(' ')}>This is really working</p>
          <button 
            onClick={this.togglePersonsHandler}
            className = {btnClass}
          > Switch Name </button>
          {persons}
        
        </div>
    );
  }
}

export default App;

