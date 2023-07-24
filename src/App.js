import './App.css';
import LoginComponent from './pages/authentification/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomeComponent from './pages/welcome/welcome';
import ListeTodoComponent from './pages/listetodo/listedo';
import HeaderComponent from './layout/header';
import FooterComponent from './layout/footer';
import AuthProvider from './secuirty/authcontext';

function App() {
  return (
    <div className="App">
      <AuthProvider >
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/authentification" element={<LoginComponent />} />
            <Route path="/welcome" element={<WelcomeComponent />} />
            <Route path="/listTodos" element={<ListeTodoComponent />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
