import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  return (
    <div className="Home">
      <h2 style={{
        textAlign: "center"
      }}>
        Home, aka the React Playground
      </h2>
      <p>
        What stuff do we want to work on?
      </p>
      <div>
        <ul>
          <li>React Hooks, maybe useReducer?</li>
          <li>Code Splitting/Suspense/dynamic imports</li>
          <li>Redux Saga</li>
          <li>React Router</li>
          <li>Fragments</li>
          <li>Flexbox</li>
        </ul>
      </div>
    </div>
  );
}

function About() {
  return <h2>About</h2>
}

function Users() {
  const [countUser, setUserCount] = useState(0);
  return (
    <div>
      <p>You added a User {countUser} times</p>
      <button onClick={() => setUserCount(countUser +1)}>
        Click me to add User
      </button>
    </div>
  );
}

function AppRouter() {
  return(
    <Router>
      <div className="AppRouter">
        <nav>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/about/'>About</Link>
          </div>
          <div>
            <Link to='/users'>Users</Link>
          </div>
        </nav>

        <Route path='/'exact component={Index}/>
        <Route path='/about/' component={About}/>
        <Route path='/users/' component={Users}/>
      </div>
    </Router>
  )
}

export default AppRouter;