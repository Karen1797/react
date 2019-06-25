import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state solo se puede definir en clases que extienden Component
  state = {
    persons: [
      { name:'Karen', age:'28'},
      { name:'Jaime', age:'28'},
      { name:'Karol', age:'-7'}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age:'28'},
        { name:'Jaime', age:'29'},
        { name:'Karol', age:'-7'}
      ]
    })
  }

nameChangeHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Karen', age:'28'},
      { name: event.target.value, age:'29'},
      { name:'Karol', age:'-7'}
    ]
  })
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1> Hi, Karen!</h1>

        {/* Esta es uns forma de llevar los valores de un parámetro a la función indicada 
        no es la mas recomendable por cuestion de rendimiento*/}
        {/* <button onClick={() => this.switchNameHandler('Johana')}> Switch Name </button> */}
        <button 
          onClick={this.switchNameHandler.bind(this, 'Johana')}
          style={style}
          >Switch Name
        </button>
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
    );
  }
}

export default App;


// //Con hooks
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name:'Karen', age:'28'},
//       { name:'Jaime', age:'28'},
//       { name:'Karol', age:'-7'}
//     ],
//     //otherState: 'some other value'
//   });

//   //Esta es una mejor forma para no tener que definir los datos que no cambian 
//   //en el setState de los datos que sí cambian
//   const [otherState, setOtherState] = useState('some other value');

//   const  switchNameHandler = () => {
//     console.log('Was clicked');
//     setPersonsState({
//       persons: [
//         { name:'Johana', age:'28'},
//         { name:'Jaime', age:'29'},
//         { name:'Karol', age:'-7'}
//       ],
//       //Esto se hace para conservar todos los datos, sino se agrega se reescribe el código
//       //otherState: personsState.otherState
//     })
//   }

//   return (
//     <div className="App">
//       <h1> Hi, Karen!</h1>

//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age}
//       />
//       <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age}
//       > 
//         My hobbies: Yugi-oh
//       </Person>
//       <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age}
//       />
      
//     </div>
//   );
  
    
// }

// export default App;



// //Sin hooks
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {
//   //state solo se puede definir en clases que extienden Component
//   state = {
//     persons: [
//       { name:'Karen', age:'28'},
//       { name:'Jaime', age:'28'},
//       { name:'Karol', age:'-7'}
//     ],
//     otherState: 'some other value'
//   }

//   switchNameHandler = () => {
//     console.log('Was clicked');
//     this.setState({
//       persons: [
//         { name:'Johana', age:'28'},
//         { name:'Jaime', age:'29'},
//         { name:'Karol', age:'-7'}
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1> Hi, Karen!</h1>

//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person 
//           name={this.state.persons[0].name} 
//           age={this.state.persons[0].age}/>
//         <Person 
//           name={this.state.persons[1].name} 
//           age={this.state.persons[1].age}> 
//           My hobbies: Yugi-oh
//           </Person>
//         <Person 
//           name={this.state.persons[2].name} 
//           age={this.state.persons[2].age}/>
        
//       </div>
//     );
//   }
// }

// export default App;
