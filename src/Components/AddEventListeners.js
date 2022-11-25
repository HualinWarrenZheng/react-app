import React from "react";

class  AddEventListeners extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: '',
            count: 0
        };
         //this.handleEnter = this.handleEnter.bind(this);
         this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleEnter(){
        this.setState(state => ({
            count: state.count + 1,
            message: 'You pressed the \'Enter\' Key ' + state.count
        }));
    }

    handleKeyPress(event){
        if(event.keyCode === 13){
            this.handleEnter();
        }
    }

    render(){
        return(
            <div>
                <h1>Add Event Listeners</h1>
                <p>{this.state.message}</p>
            </div>
        );
    }
};

export default AddEventListeners