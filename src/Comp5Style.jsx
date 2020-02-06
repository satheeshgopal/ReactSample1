import React from 'react';

class HelloStyle extends React.Component{
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
            <button style={{ backgroundColor: 'red', color: 'white' }} onClick={this.Increment}>Click!</button>
            <p>{this.state.count}</p>
            </div>;
    }
}

export default HelloStyle;