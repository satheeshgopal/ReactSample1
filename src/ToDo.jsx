import React from 'react';

class ToDo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {items:[], text:''};
        this.Increment = this.Increment.bind(this);
        this.UpdateData = this.UpdateData.bind(this);
    }

    Increment()
    {       
        this.setState({items:this.state.items.concat({text:this.state.text})});
    }

    UpdateData(e)
    {       
        this.setState({text:e.target.value});
    }

    render(){
        return <div>
            <p>Hello {this.props.username}</p>
            <input type='text' style={{width:'100px', color:''}} onChange={this.UpdateData}/>
        <button onClick={this.Increment}>Click {this.state.count }</button>
        <ul>
            {
                this.state.items.map((item, index)=>{
                    return <li key={index}>{item.text}</li>
                })
            }
        </ul>

        </div>
    }
}

export default ToDo;