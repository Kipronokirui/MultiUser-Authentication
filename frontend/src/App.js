import './App.css';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./components/HomePage"
import ClientSignup from "./components/ClientSignup"
import FreelanceSignup from "./components/FreelanceSignup"
import Login from "./components/Login"
import ClientDashboard from "./components/ClientDashboard"
import FreelanceDashboard from "./components/FreelanceDashboard"

import {CPrivateRoute, FPrivateRoute} from "./private/PrivateRoute"

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/client/signup" element={<ClientSignup />} />
          <Route exact path="/freelance/signup" element={<FreelanceSignup />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/client/dashboard" element={<ClientDashboard />} />
          <Route exact path="/freelance/dashboard"  element={<FreelanceDashboard />} /> 
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
