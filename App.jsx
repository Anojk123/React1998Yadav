
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  let foodItem=["Dal","Green vegetable","Roti","Salad","Milk"];

  return (
    <div>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        { foodItem.map(item=><li key={item} className="list-group-item">{item}</li>)}
        
        {/* <li className="list-group-item">Green vegetable</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li> */}
      </ul>

    </div>
  );



}

export default App
