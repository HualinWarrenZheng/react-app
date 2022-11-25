import React from "react"

const inputStyle = {
    width: 235,
    margin: 5
  }

class TernaryExpression extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: '',
            userAge: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(e){
        this.setState({
            input: e.target.value,
            userAge: ''
        });
    }

    handleSubmit(){
        this.setState({
            userAge: this.state.input
        });
    }

    render(){
        const buttonSubmit = <button onClick={this.handleSubmit}>Submit</button>;
        const tagYes = <p>Welcome!</p>;
        const tagNo = <p>Go home!</p>;
        return(
            <div>
                <input 
                type={'number'} 
                value={this.state.input} 
                onChange={this.handleChange}
                style={inputStyle} />
                {this.state.userAge === '' ? buttonSubmit : this.state.userAge > 18 ? tagYes : tagNo}
            </div>
        )
    }

}

export default TernaryExpression