import React from 'react'
import {useSelector} from 'react-redux'
import Login from './Views/Login/login'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './Views/Sidebar/sidebar'
import ViewBugPage from './Views/Pages/viewBugs'

function App() {
  const {auth} = useSelector(state => state)/*are we logged in*/
  return (
    <Router>
      {!auth.LoggenIn ? <Login />:
        <>
          <Sidebar />
          <ViewBugPage />
        </>
      }
    </Router>
  );
}

export default App;