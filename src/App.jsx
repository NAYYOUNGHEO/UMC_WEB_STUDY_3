import React from 'react';
import { useSelector } from "react-redux";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginComponent from './Login/LoginComponent';
import MyPage from './Login/MyPage';

function App() {
  const user = useSelector(state => state.user);

  return (
    <>
    {user.id !== "" ? <MyPage /> : <LoginComponent />}
    </>
  )
}

export default App