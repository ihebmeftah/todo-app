import { useState } from "react";
import { TextField, Button, Box, Container } from "@mui/material";

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WeclomeComponent />} />
          <Route path="/todos" element={<ListToDosComponent />} />

          <Route path="*" element={<ErrorPageComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function WeclomeComponent() {
  const { username } = useParams();
  return <h1 className="WeclomeComponent">Welcome {username}<Link to="/todos">go to your toodos</Link> </h1>;
}
function ErrorPageComponent() {
  return <h1 className="ErrorPageComponent">404</h1>;
}
function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [authSuccess, setauthSuccess] = useState(false);
  const [authFailed, setauthFailed] = useState(false);
  const navigate = useNavigate();

  function onchangeUsername(event) {
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  function onchangePassword(event) {
    console.log(event.target.value);
    setpassword(event.target.value);
  }

  function login() {
    if (username === "iheb meftah" && password === "1234") {
      setauthSuccess(true);
      setauthFailed(false);
      navigate(`/welcome/${username}`);
    } else {
      setauthFailed(true);
      setauthSuccess(false);
    }
  }

  return (
    <div className="LoginComponent">
      <h2> Todo managment application Login </h2>
      {authSuccess && (
        <div className="SuccessMeassageComponent">
          {" "}
          Authentifcation done successfully
        </div>
      )}
      {authFailed && (
        <div className="ErrorMeassageComponent"> Authentifcation failed </div>
      )}

      <Container maxWidth="sm">
        <div>
        <label htmlFor="Username">Username</label>
        <Box height={10} />
          <TextField
            fullWidth
            id="outlined-basic"
            type="text"
            value={username}
            onChange={onchangeUsername}
            variant="outlined"
            required
          />
        </div>
        <Box height={20} />
        <label htmlFor="Password">Password</label>
        <Box height={10} />
        <div>
          <TextField
            fullWidth
            id="outlined-basic"
            type="password"
            password
            value={password}
            onChange={onchangePassword}
            variant="outlined"
            required
          />
        </div>
        <Box height={20} />
        <Button variant="contained" onClick={login} size="large">
          Login
        </Button>
      </Container>
    </div>
  );
}

function ListToDosComponent() {
  const today = new Date();
  const targatedate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const todos = [
    { id: 1, desc: "learn js", completed: false, targetdate: targatedate },
    { id: 2, desc: "learn flutter", completed: false, targetdate: targatedate },
    { id: 3, desc: "learn web", completed: false, targetdate: targatedate },
    { id: 4, desc: "learn aws", completed: false, targetdate: targatedate },
  ];
  return (
    <div className="ListToDosComponent">
      <h1>Things you want to do</h1>
      <div className="container">
        Todo Details
        <center>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Desc</th>
                <th>Completed</th>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <th>{todo.id}</th>
                  <th>{todo.desc}</th>
                  <th>{todo.completed.toString()}</th>
                  <th>{todo.targetdate.toDateString()}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
}
