import logo from './logo.svg';
import './App.css';
import HomeMain from './/pages/home/home_main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomeMain/>}/>
    </Routes>
   </Router>
  );
}

export default App;
