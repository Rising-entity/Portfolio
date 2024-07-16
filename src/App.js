import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import About from "./components/Home/about/About"
function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
        </Routes>
    

      </div>

    </Router>

  );
}

export default App;
