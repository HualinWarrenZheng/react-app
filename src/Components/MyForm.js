import React from "react";

class MyForm extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            input: '',
            submit: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange =this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            submit: this.state.input
        });
    }

    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={this.handleChange} placeholder = 'input'/>
            <button type="submit">Submit</button>
            <p>{this.state.submit}</p>
            </form>
        </div>
        );
    }
}
export default MyForm;