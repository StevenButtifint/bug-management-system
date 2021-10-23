import React from 'react';
import {useSelector} from 'react-redux'
import Login from './Views/Pages/Login/login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './Views/Sidebar/sidebar'
import ViewBugPage from './Views/Pages/viewBugs'
import CreateBugPage from './Views/Pages/createBug'
import CreateBug from './Views/Components/Bug Create & Edit/bugForm'
import Dashboard from './Views/Pages/Dashboard/dashboard'

function App() {
  const {auth} = useSelector(state => state)/*are we logged in*/
  return (
    <Router>
      {!auth.LoggedIn ? <Login />:
        <>
          <Sidebar />
          <Switch>
          <Route path="/" exact ><Dashboard /></Route>
            <Route path="/viewbugs"><ViewBugPage /></Route>
            <Route path="/create"><CreateBugPage /></Route>
          </Switch>
        </>
      }
    </Router>
  );
}

export default App;