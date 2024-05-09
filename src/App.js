import React from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import BoardListPage from './pages/Boards/BoardListPage';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/boards" element={<BoardListPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
