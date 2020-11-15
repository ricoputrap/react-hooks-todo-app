import { useContext } from 'react';

// import TodoItem from './TodoItem';
// import PropTypes from 'prop-types';
import "./style/todos.css";
import { TodosContext } from '../../App';

function Todos() {
    const todosContext = useContext(TodosContext);

    // const todoItems = todosContext.todos.map(todo => (
        
    // ))
    return (
        <section className="container">
            { todosContext.todosState.map(todo => (
                <p>{ todo.title }</p>
            ))}
        </section>
    )

//     const todoItems = props.todos.map(todo => (
//         <TodoItem 
//             key={ todo.id } 
//             todo={ todo }
//             delTodo={ props.delTodo }
//             canMarkComplete={ props.canMarkComplete }
//             markComplete={ props.canMarkComplete 
//                 ? props.markComplete
//                 : undefined } />
//     ))

//     return (
//         <section className="container">
//             { todoItems }
//         </section>
//     );
};

// Todos.propTypes = {
//     todos: PropTypes.array.isRequired,
//     canMarkComplete: PropTypes.bool,
//     markComplete: PropTypes.func,
//     delTodo: PropTypes.func.isRequired
// }

// Todos.defaultProps = {
//     canMarkComplete: true
// }

export default Todos;