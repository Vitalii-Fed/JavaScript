import './App.css';

import React, { Component } from 'react';

import Form from '../Form/Form';
import List from '../List/List';

export class App extends Component {
    state = {
        list: [
            { id: 1, title: 'Item 10', isDone: false },
            { id: 2, title: 'Item 20', isDone: true },
            { id: 3, title: 'Item 30', isDone: false },
        ],
    };

    toggleTodo = (id) => {
        this.setState({
            list: this.state.list.map((item) =>
                item.id !== id ? item : {...item, isDone: !item.isDone}
            ),
        });
    };

    deleteTodo = (id) => {
        this.setState({
            list: this.state.list.filter = ((item) => item.id !== id),
        });
    };
    
    render() {
        return (
            <>
                <List list={this.state.list} onToggle={this.toggleTodo} onDelete={this.deleteTodo} />
                <Form />
            </>
        )
    };
};

export default App;