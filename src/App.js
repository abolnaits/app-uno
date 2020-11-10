import logo from './logo.svg';
import './App.css';
import React from 'react';
/*
Parece HTML pero no lo es, esto es JSX
JS con etiquetas especiales, Babel Repel es usado para esto
*/
//Componente <App/>
function App() {
  return (
    <div>
      <h1 id="main">Componente Padre</h1>
      <Uno myText="Uno"/>
      <Uno myText="Dos"/>
    </div>
  );
}
//Componente <Uno/>
/*
function Uno(props){
  console.log('Props ==> ',props);
  return(
  <div>Componente {props.myText}</div>
  );
}
*/
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
//Exporto el componente
export default App;
