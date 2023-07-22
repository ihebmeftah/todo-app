import './App.css';
import LoginComponent from './pages/authentification/login';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import WelcomeComponent from './pages/welcome/welcome';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/authentification" element={<LoginComponent />} />
          <Route path="/welcome" element={<WelcomeComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
