import './App.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
     <div className="App">
      
    <Routes>
      <Route path='/home' element={<Home/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
