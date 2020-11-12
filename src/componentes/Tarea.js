import React from 'react';
import './Tarea.css';
//Especificar el tipo de dato que se espera
import PropTypes from 'prop-types';
class Tarea extends React.Component{

    setEstilo(){
        return{
            color: this.props.item.done ? 'green' : 'black'
        }
    }
    render(){
        return <div key={this.props.item.id} className='fondo-verde' style={this.setEstilo()}>
                <h1>{this.props.item.id}</h1>
                <p>{this.props.item.titulo}</p>
                <p>{this.props.item.desc}</p>
                <input type="checkbox" onChange={this.props.updateTarea.bind(this,this.props.item.id)}/>
                <button onClick={this.props.deleteTarea.bind(this,this.props.item.id)}>x</button>
            </div>
    }
}
/*
Defino los tipos de datos de la propiedad 
*/
Tarea.propTypes = {
    item:PropTypes.object.isRequired
}

export default Tarea;