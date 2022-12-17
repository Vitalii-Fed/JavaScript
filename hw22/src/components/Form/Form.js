import React, { Component } from 'react';

export class Form extends Component {
    onFormSubmit = (e) => {
        e.preventDefault();

    };
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input name="title" placeholder="title" />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default Form