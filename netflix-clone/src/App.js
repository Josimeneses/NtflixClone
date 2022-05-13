import './App.css';
import Row from './Components/Row.js';
import categories from './api.js';

function App() {
  return (
    <div className="App">
     {/*NavBar*/}
     {/*Destaque*/}
     {/*Em alta*/}
     {categories.map((category) => {
      return (
        <Row 
          key={category.name} 
          title = {category.title} 
          path={category.path} />
      );
     })}
     
    </div>
  );
}

export default App;
