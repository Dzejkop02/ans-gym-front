import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div>
          <Outlet />
        </div>
    </div>
  );
}

export default App;
