import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const handleKeyUp = (event) => {
            if(event.key == 'Enter') {
                this.props.updateState(event.target.value);
            }
        }

        return (
            <section>
                <input onKeyUp={handleKeyUp} type="text" placeholder="Skriv en todo" />
            </section>
        )
    }
}

export default AddTodo;