import React from 'react';

class Tarea extends React.Component{
    render(){
        return <div key={this.props.item.id}>
                <h1>{this.props.item.id}</h1>
                <p>{this.props.item.titulo}</p>
                <p>{this.props.item.desc}</p>
                <input type="checkbox" />
                <button>x</button>
            </div>
    }
}

export default Tarea;