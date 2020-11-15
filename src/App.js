import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Completed from './components/pages/Completed';

import axios from 'axios';
import './App.css';

export const TodosContext = React.createContext();

function App() {
  const todos = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'markComplete':
        return [
          state.map(todo => {
            if (todo.id === action.id) {
              todo.completed = !todo.completed
            }
          })
        ];
      
      case 'deleteTodo':
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${action.id}`)
          .then(res => state.filter(todo => todo.id !== action.id));
      
      case 'addTodo':
        axios.post('https://jsonplaceholder.typicode.com/todos', {
          title: action.title,
          completed: false
        })
          .then(res => [...state, res.data]);
      
      default:
        return state;
    }
  };

  return (
    <Router>
      <TodosContext.Provider value={todos}>
        
      </TodosContext.Provider>
    </Router>
  );
}


// class App extends React.Component {
//   state = {
//     todos: []
//   };

//   componentDidMount() {
//     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
//       .then(res => this.setState({ todos: res.data }))
//   }

//   markComplete = (id) => {
//     this.setState({
//       todos: this.state.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo;
//       })
//     });
//   }

//   deleteTodo = (id) => {
//     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//       .then(res => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) }));
//   }

//   addTodo = (title) => {
//     axios.post(`https://jsonplaceholder.typicode.com/todos`, {
//       title,
//       completed: false
//     })
//       .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
//   }

//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Header />

//           <Route exact path="/" render={ props => (
//             <Home 
//               todos={ this.state.todos } 
//               markComplete={ this.markComplete }
//               deleteTodo={ this.deleteTodo }
//               addTodo={ this.addTodo } />
//           )} />
          
//           <Route path="/completed" render={ props => (
//             <Completed
//               todos={ this.state.todos }
//               deleteTodo={ this.deleteTodo } />
//           )} />
//         </div>
//       </Router>
//     )
//   }
// }

// export default App;
