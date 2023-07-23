import { useState } from "react";

import { TextField, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
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
      navigate(`/welcome`);
    } else {
      setauthFailed(true);
      setauthSuccess(false);
    }
  }
  return (
    <HorizontalCentering
      elment=<div>
        <Typography variant="h4" marginBottom={5}>
          Todo managment application Login
        </Typography>
        {authSuccess && (
          <div className="SuccessMeassageComponent">
            {" "}
            Authentifcation done successfully
          </div>
        )}
        {authFailed && (
          <div className="ErrorMeassageComponent"> Authentifcation failed </div>
        )}
        <TextField
          fullWidth
          margin="dense"
          label="Username"
          required
          placeholder="Foulen Ben foulen"
          onChange={onchangeUsername}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          required
          placeholder="************"
          onChange={onchangePassword}
        />
        <Button variant="contained" size="large"  fullWidth onClick={login}>
          Login
        </Button>
        <Button variant="text" fullWidth>
          Create account
        </Button>
      </div>
    />
  );
}

function HorizontalCentering(props) {
  return (
    <Box
      sx={{
        mx: "auto",
        width: "50%",
        padding: 10,
        marginTop: 10,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.50",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      {props.elment}
    </Box>
  );
}
