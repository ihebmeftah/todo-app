import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />}></Route>
                    <Route path="/welcome/:username" element={<WeclomeComponent />}></Route>
                    <Route path="*" element={<ErrorPageComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
function WeclomeComponent() {
    const {username} = useParams()  
    return <h1 className="WeclomeComponent">Welcome {username}</h1>
}
function ErrorPageComponent() {
    return <h1 className="ErrorPageComponent">404</h1>
}
function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [authSuccess, setauthSuccess] = useState(false);
    const [authFailed, setauthFailed] = useState(false);
    const navigate = useNavigate()

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
            navigate(`/welcome/${username}`)
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

            <div>
                <div>
                    <label >Username : </label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onchangeUsername}
                        required
                    />
                </div>

                <div>
                    <label >Password : </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onchangePassword}
                        required
                    />
                </div>

                <button type="submit" onClick={login}>
                    Login
                </button>
            </div>
        </div>
    );
}

