import React from 'react';

class FormaTarea extends React.Component{
    
    state = {
        titulo:'',
        desc:''
    }
    
    enviar = (e) => {
        e.preventDefault();
        console.log('Enviando...');
        //Obtengo los datos del Form
        console.log(this.state);
    }

   
    cambio = (e) => {
        console.log('Cambio...');
        console.log(e.target.value);
        console.log(e.target.name);
        /*
        if(e.target.name == 'titulo'){
            this.state.titulo = e.target.value;
        }
        if(e.target.name == 'desc'){
            this.state.desc = e.target.value;
        }
        */
       //Seteo el estado dependiendo del valor name del target
       this.setState({
           [e.target.name] : e.target.value
       });
    }
    
    render(){
        return(
            <div>
                <h1>Agregar un tarea a la lista</h1>
            <form onSubmit={this.enviar}>
                <input type="text" placeholder="Escribe una tarea" onChange={this.cambio} value={this.state.titulo} name="titulo"></input>
                <br/>
                <textarea placeholder="Descripcion de la tarea" onChange={this.cambio} value={this.state.desc} name="desc"></textarea>
                <br/>
                <input type="submit" value="Agregar" />
            </form>
            </div>
        )
    }
}

export default FormaTarea;