import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import './App.css';
import './buttons.css';
import PowerQuality from './Tabs/PowerQuality';
import SubMeter from './Tabs/SubMeter';
import Notifications from './Tabs/Notifications';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/powerQuality" className="nav-button" activeClassName="active">Power Quality</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/subMeter" className="nav-button" activeClassName="active">Sub-meter</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/notifications" className="nav-button" activeClassName="active">Notifications</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/powerQuality" element={<PowerQuality />} />
          <Route path="/subMeter" element={<SubMeter />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
  
  
  
  
  // code below is for getting data from backend
  
  
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:80/');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const data = await response.json();
  //     setMessage(data.message);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // return (
  //   <div className="App">
  //     <h1>Hello from the frontend!</h1>
  //     <p>Message from the backend: {message}</p>
  //   </div>
  // );
}

export default App;
