import React from 'react';

class FormaTarea extends React.Component{
    
    enviar(e){
        e.preventDefault();
        console.log('Enviando...');
        //Obtengo los datos del Form

    }

    cambio(e){
        console.log('Cambio...');
        console.log(e.target.value);
    }
    
    render(){
        return(
            <div>
                <h1>Agregar un tarea a la lista</h1>
            <form onSubmit={this.enviar}>
                <input type="text" placeholder="Escribe una tarea" onChange={this.cambio}></input>
                <br/>
                <textarea placeholder="Descripcion de la tarea" onChange={this.cambio}></textarea>
                <br/>
                <input type="submit" value="Agregar" />
            </form>
            </div>
        )
    }
}

export default FormaTarea;