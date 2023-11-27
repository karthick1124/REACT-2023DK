import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
// import Login from './components/Login';
// import Register from './components/Register';
import Manga from './components/manga';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Manga />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
