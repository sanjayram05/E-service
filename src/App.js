import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Main from './pages/Main';
import './App.css';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/main' element={<Main />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
