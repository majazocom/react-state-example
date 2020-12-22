import React from 'react';

function TodoItem(props) {
    let todoDone = 'Ej klar';

    if (props.done === true) {
        todoDone = 'Klar'
    }

    return (
        <li className="todo-item">{ props.text } - { todoDone }</li>
    )
}

export default TodoItem;