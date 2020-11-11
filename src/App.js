import logo from './logo.svg';
import './App.css';
import React from 'react';
import tareas from './data/tareas.json';
//Componente Tarea
import Tareas from './componentes/Tareas';
//FormaTarea
import FormaTarea from './componentes/FormaTarea';
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
  render(){
    var that = this;
    return(
      
      <div id="main">
        <div id="forma">
        <FormaTarea/>  
        </div>
        <div id="listado">
        <h1>Lista de tareas</h1>
        {/*Paso el arreglo para que sea usado desde props*/}
        <Tareas tareas={this.state.tareas}/>
        </div>
      </div>
    )
  }  
}
//Exporto el componente
export default App;
