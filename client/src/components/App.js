import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
// import LoginForm from "./LoginForm";
import NewReviewForm from "./NewReviewForm";
// import ReviewItem from "../pages/ReviewItem";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/review").then((r) => {
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
            <h2>Home</h2>
            <NewReviewForm />            
            </Route>
          <Route path="/">
            <h2>Home</h2>
            {/* <LoginForm /> */}
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;