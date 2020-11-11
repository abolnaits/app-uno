import React from 'react';
import Tarea from './Tarea';
//Defino el tipo
import PropTypes from 'prop-types';
/*
Devuelve un div con cada una de las tareas pasadas en
las props
*/
class Tareas extends React.Component{
    render(){
        console.log(this.props);
        return this.props.tareas.map((e)=>{
            return <Tarea item={e} key={e.id}/>
        })
    }
}

Tareas.propTypes = {
    tareas:PropTypes.array.isRequired
}
export default Tareas;