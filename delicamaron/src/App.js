import './App.css';
import { BrowserRouter as Router, Routes, Route, Form,} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import RecetaCreate from "./components/RecetaCreate/RecetaCreate.jsx"


function App() {
  return (
    <Router>
     <div className="App">
      
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<RecetaCreate/> }/>

      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
