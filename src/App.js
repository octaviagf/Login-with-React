import { useState } from "react";

export default function App() {
  return (
    <div>
      <Img />
      <Form />
    </div>
  );
}

function Img() {
  return (
    <div>
      <img src="img/icon.jpg" alt="Log-in" className="img"></img>
    </div>
  );
}

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage(alert("Please fill in all fields."));
      return;
    }
    setUsername("");
    setPassword("");
    setErrorMessage("");

    alert(`Hello, ${username}!`);
  }

  return (
    <div className="container">
      <form onSubmit={handleLogin} className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="btn">Log in</button>
      </form>
    </div>
  );
}
