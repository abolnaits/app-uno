import logo from './logo.svg';
import './App.css';
import React from 'react';
import tareas from './data/tareas.json';
//Componente Tarea
import Tareas from './componentes/Tareas';
//FormaTarea
import FormaTarea from './componentes/FormaTarea';
//Posts 
import Posts from './componentes/Posts'
//Enroutador BrowserRouter, Route
import {BrowserRouter as BR, Route, Link } from 'react-router-dom';
/*
Parece HTML pero no lo es, esto es JSX
JS con etiquetas especiales, Babel Repel es usado para esto
*/
//Componente <App/>
/*
function App() {
  return (
    <div>
      <h1 id="main">Componente Padre</h1>
      <Uno myText="Uno"/>
      <Uno myText="Dos"/>
    </div>
  );
}
*/
//Componente <Uno/>
/*
function Uno(props){
  console.log('Props ==> ',props);
  return(
  <div>Componente {props.myText}</div>
  );
}
*/
/*
class Uno extends React.Component{
  //Objeto de estados
  state = {
    mostrar:true
  }

  mostrar = ()=>{
    console.log('Mostrar ==>', this.state.mostrar);
    //this.state.mostrar = false;
    if(this.state.mostrar){
      this.setState({mostrar:false});
    }else{
      this.setState({mostrar:true});
    }
    
  }
  //Metodo que devuelve el HTML
  render(){
    if(this.state.mostrar){
      return(
        <div>
          Componente {this.props.myText}
          <button onClick={this.mostrar}>Mostrar/Ocultar</button>
        </div>
      )
    }else{
      return(
        <div>
            <button onClick={this.mostrar}>Mostrar/Ocultar</button>
        </div>
      )
    }
  }
}
*/
console.log(tareas);
class App extends React.Component{
  //Estados, que contienen las tareas importadas
  state = {
    tareas : tareas
  }

  /*
  Agrego una nueva tarea, esta funcion se pasa en una 
  props al componente FormaTarea
  */
  agregar = (titulo,desc) =>{
    console.log('Agregando tarea');
    console.log(titulo,desc);
    const nueva = {
      titulo:titulo,
      desc:desc,
      id:this.state.tareas.length + 1,
      done:false
    }
    //Agrego la tarea al arreglo
    this.setState({
      tareas:[...this.state.tareas,nueva]
    })
    console.log(nueva);

  }

  /*
  Usamos filter para actualizar el estado
  */
  eliminar = (id) => {
    console.log('Eliminar ==>',id);
    const actualizado =this.state.tareas.filter((task)=>{
      return task.id !== id;
    });
    this.setState({
      tareas:actualizado
    });
  }
  /*
  actualizar = function(id){
    console.log('This ==> ',this);
    const nuevo = this.state.tareas.map(function(i){
      console.log(i);
      if(id == i.id){
        i.done = !i.done;
      }
      return i;
    });
  }
*/
  actualizar = (id)=>{
    console.log('Actualizar',id);
    const nuevos = this.state.tareas.map((item)=>{
      if(id == item.id){
        item.done = !item.done;
      }
      return item;
    });
    this.setState({
      tareas:nuevos
    });
  }

  render(){
    //this.actualizar();
    var that = this;
    return(
      
      <div id="main">
        <BR>
        <Link to='/'>Home</Link> <br/>
        <Link to='/posts'>Posts</Link>
        
        <Route exact path="/" render={()=>{
          return(
          <div>
          <div id="forma">
          <FormaTarea addTarea={this.agregar}/>  
          </div>
          <div id="listado">
          <h1>Lista de tareas</h1>
          {/*Paso el arreglo para que sea usado desde props*/}
          <Tareas 
          tareas={this.state.tareas} 
          deleteTarea={this.eliminar}
          updateTarea={this.actualizar}
          />
          </div>
          </div>
          )
        }  
        }>

        </Route>
        <Route path='/posts' component={Posts}></Route>
        </BR>
        
       
        
      </div>
    )
  }  
}
//Exporto el componente
export default App;
