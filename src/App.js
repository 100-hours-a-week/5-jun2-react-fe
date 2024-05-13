import React from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BoardListPage from './pages/BoardListPage';
import UserUpdatePage from './pages/UserUpdatePage';
import PasswordUpdatePage from './pages/PasswordUpdatePage';

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
          <Route path="/users/me" element={<UserUpdatePage />} />
          <Route path="/users/password" element={<PasswordUpdatePage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
