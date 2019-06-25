import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

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

  // switchNameHandler = (newName) => {
  //   console.log('Was clicked');
  //   this.setState({
  //     persons: [
  //       { name: newName, age:'28'},
  //       { name:'Jaime', age:'29'},
  //       { name:'Karol', age:'-7'}
  //     ]
  //   })
  // }

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
      //otra opción igual de buena
      //const person = Object.assign({}, this.state.persons[personIndex])

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
      //Usando la funcion slice(), lo unico que se pretende es 
      //crear una copia de persons haciendo la solución inmutable
      //const persons = this.state.persons.slice();
      //otra forma mas moderna
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color: 'black'
      }
    };

    // Esta es una forma mas óptima de condicionar el comportamiento 
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              // otra opción
              // click={this.deletePersonHandler.bind(this,index)}

              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>  
      );
      //style dinámico
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color: 'black'
      }
    }

    //crear clases dinamicamente 
    //El join junta los strings en un str pero dejando un espacio entre ellos
    //let classes = ['red', 'bold'].join(' ');
    
    //Otra forma mas especifica
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1> Hi, Karen!</h1>
          <p className = {classes.join(' ')}>This is really working</p>
          {/* Esta es uns forma de llevar los valores de un parámetro a la función indicada 
          no es la mas recomendable por cuestion de rendimiento*/}
          {/* <button onClick={() => this.switchNameHandler('Johana')}> Switch Name </button> */}
          <button 
            onClick={this.togglePersonsHandler}
            style={style}
          > Switch Name
          </button>
          {persons}
          {/*El operador ternario es una opción pero no la mas óptima para crear condicionales
          { this.state.showPersons === true ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Joha')}
                changed={this.nameChangeHandler}  
              > 
                My hobbies: Yugi-oh
              </Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
            </div>  
          : null } */}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

