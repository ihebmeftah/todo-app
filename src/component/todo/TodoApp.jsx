import { useState } from "react";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      Todo managment application
      <LoginComponent />
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [authSuccess, setauthSuccess] = useState(false);
  const [authFailed, setauthFailed] = useState(false);

  function onchangeUsername(event) {
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  function onchangePassword(event) {
    console.log(event.target.value);
    setpassword(event.target.value);
  }

  function login(){
    if (username === "iheb meftah" && password === "1234") {
        setauthSuccess(true)
        setauthFailed(false)

    }else{
        setauthFailed(true)
        setauthSuccess(false)
    }
  }

  function SuccessMeassageComponent() {
    if (authSuccess) {
      return (
        <div className="SuccessMeassageComponent">
          Authentifcation done successfully
        </div>
      );
    }
    return null;
  }

  function ErrorMeassageComponent() {
    if (authFailed) {
      return (
        <div className="ErrorMeassageComponent">
          Authentifcation failed 
        </div>
      );
    }
    return null;
  }
  
  return (
    <div className="LoginComponent">
        <SuccessMeassageComponent/>
        <ErrorMeassageComponent/>
      <div>
        <h2>Login</h2>
          <div>
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={onchangeUsername}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onchangePassword}
              required
            />
          </div>

          <button type="submit" onClick={login}>Login</button>
      </div>
    </div>
  );
}
