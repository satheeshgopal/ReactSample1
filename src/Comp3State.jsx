import React from 'react';

class HelloState extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {count:0};
        this.Increment = this.Increment.bind(this);
    }
    Increment(){
        this.setState({count:this.state.count + 1});
    }
    render(){
        return <div>
            <button onClick={this.Increment}>Click!</button>
            <p>{this.state.count}</p>
            </div>;
    }
}

export default HelloState;