import logo from './logo.svg';
import './App.css';

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
function Uno(props){
  console.log('Props ==> ',props);
  return(
  <div>Componente {props.myText}</div>
  );
}
//Exporto el componente
export default App;
