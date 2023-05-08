import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from './components/Signup';
import MyCart from './components/MyCart';
import CategoryPart from './components/CategoryPart';
import PartsPartPage from './components/PartsPartPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/mycart" element={<MyCart/>} />
          <Route exact path="category/:title" element={<CategoryPart/>} />
          <Route exact path="category/part/:title" element={<PartsPartPage/>} />
        </Routes>
    </Router>
  );
}

export default App;