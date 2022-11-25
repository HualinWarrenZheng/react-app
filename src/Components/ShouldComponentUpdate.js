import React, { PureComponent } from "react";

class ShouldComponentUpdate extends React.Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Should update?');
        if(nextProps.count % 2 === 0){
            return true;
        }
    }

    componentDidUpdate(){
        console.log('Component re-rendered.')
    }

    render(){
        return (
            <h1>{this.props.count}</h1>
        )
    }
}

class Controller extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };

        this.add = this.add.bind(this);
    }

    add(){
        this.setState( state => ({
            count: state.count + 1
        }));
    }

    render(){
        return(
            <div>
                <button onClick={this.add}>Add</button>
                <ShouldComponentUpdate count = {this.state.count} />
            </div>
        )
    }
}

export default Controller