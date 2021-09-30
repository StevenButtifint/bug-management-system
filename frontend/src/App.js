import React from 'react'
import {useSelector} from 'react-redux'
import Login from './Views/Login/login'


function App() {
  const {auth} = useSelector(state => state)/*are we logged in*/
  return (
    <>
    {!auth.LoggenIn ? <Login />:
    <></>
    }
    </>
  );
}

export default App;