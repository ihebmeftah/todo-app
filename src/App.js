import './App.css';
import LoginComponent from './pages/authentification/login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import WelcomeComponent from './pages/welcome/welcome';
import ListeTodoComponent from './pages/listetodo/listedo';
import HeaderComponent from './layout/header';
import FooterComponent from './layout/footer';
import AuthProvider, { useAuth } from './secuirty/authcontext';
function AuthincateRoute({children}){
  const authcontext = useAuth()
  if (authcontext.isAuthenticated) {
    return children
  }
  return  <Navigate to="/" / >
}
function App() {
  return (
    <div className="App">
      <AuthProvider >
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/authentification" element={<LoginComponent />} />
            <Route path="/welcome" element={<AuthincateRoute> <WelcomeComponent /> </AuthincateRoute> } />
            <Route path="/listTodos" element={<AuthincateRoute> <ListeTodoComponent /> </AuthincateRoute> } />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
