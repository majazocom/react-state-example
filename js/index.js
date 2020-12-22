import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import Name from './name';
import TodoItem from './todoItem';
import AddTodo from './addTodo';

//Måste alltid starta med en stor bokstav för att React ska veta att det är en komponent
//Parenteser efter return används för att kunna skriva på fler rader
class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todos: ['Köpa kaffe', 'Köp kaka', 'Brygg kaffe', 'Fika'],
            latestTodo: ''
        }

        //this tappar sin referens nedan och vi behöver binda this till funktionen addItem
        this.addItem = this.addItem.bind(this);
    }

    addItem(todo) {
        console.log('Added todo: ', todo);
        this.setState((prevState) => ({
            todos: prevState.todos.concat(todo)
        }))
    }

    render() {

        const todoItems = this.state.todos.map((todoItem, index) => {
            return <TodoItem text={todoItem} key={index} id={index} />
        })

        return (
            <section className="wrapper">
                <h1>{ this.props.title }</h1>
                <p>You have { this.state.todos.length } todos</p>
                <ul className="todo-list">
                    { todoItems }
                </ul>
                <AddTodo updateState={this.addItem} buttonText="Lägg till" />
            </section>
        )
    }
}


ReactDOM.render(<App title="Todo" />, document.getElementById('root'));