import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <h1>New</h1>            
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
