import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewReviewForm from "./NewReviewForm";
import ReviewItem from "./ReviewItem";

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
            <NewReviewForm user={setUser}/>            
          </Route>
          <Route path="/">
            <ReviewItem />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
