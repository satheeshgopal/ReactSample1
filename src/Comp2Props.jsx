import React from 'react';

class HelloUser extends React.Component{
    constructor(props)
    {
        super(props);
    } 
    render(){
        return <div>Hello {this.props.user}</div>;
    }
}

export default HelloUser;