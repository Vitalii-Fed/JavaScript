import React, { Component } from 'react'

export class Form extends Component {
    // state = {
    //     title: 'title',
    //     author: 'author',
    // };
    // onSaveClick = () => {
    // };
    // onInputChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // }

    onFormSubmit = (e) => {
        e.preventDefault();

    };
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input name="title" placeholder="title" />
                <input name="author" placeholder="author" />
                <button>Save</button>
            </form>
        )
    }
}

export default Form