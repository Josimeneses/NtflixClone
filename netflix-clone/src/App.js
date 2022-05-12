import './App.css';
import Row from './Components/Row';
import categories from './api';
function App() {
  return (
    <div className="App">
     {/*NavBar*/}
     {/*Destaque*/}
     {/*Em alta*/}
     {categories.map((category) => {
      return <Row key={index} />;
     })}
     
    </div>
  );
}

export default App;
