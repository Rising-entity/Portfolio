import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import About from "./components/Home/about/About"
import Navbar from './components/Home/Navbar';
import ScrollToTop from "./components/Home/ScrollToTop"
function App() {
  return (

    <Router>
      <div className="App">
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
      </Routes>


    </div>

    </Router >

  );
}

export default App;
