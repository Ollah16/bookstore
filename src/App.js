import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewMore from './components/viewmore';
import MyUploads from './myUploads';
import { useDispatch, } from 'react-redux';
import {
  handleBookAdd,
  handleSignOut,
  handleUserUploads,
  handleChanges,
  handleAuth,
  handleRegister,
  handleNewMessage,
} from './myRedux/myActions';

import BookStorePage from './bookStorePage';

function App() {
  const dispatch = useDispatch();

  const handleAuthentication = (data) => {
    dispatch(handleAuth(data))
  }

  const handleAddBook = (data) => {
    dispatch(handleBookAdd(data))
  }

  const handleFetchUploads = () => {
    dispatch(handleUserUploads())
  }

  const handleAllChanges = (type, bookId, data) => {
    dispatch(handleChanges(type, bookId, data))
  }

  const handleIsRegister = (value) => {
    dispatch(handleRegister(value))
  }

  const handleMessage = (message) => {
    dispatch(handleNewMessage(message))
  }

  const handleLogout = () => {
    dispatch(handleSignOut())
    localStorage.removeItem('accessToken')
  }

  return (
    <Routes>
      <Route path='/p' element={<HomePage
        handleAuthentication={handleAuthentication}
        handleIsRegister={handleIsRegister}
      />} />

      <Route path='/*' element={<BookStorePage
        handleLogout={handleLogout}
      />} />

      <Route path='/viewmore/:bookId' element={<ViewMore />} />

      <Route path='/myuploads' element={<MyUploads
        handleLogout={handleLogout}
        handleAllChanges={handleAllChanges}
        handleAddBook={handleAddBook}
        handleFetchUploads={handleFetchUploads}
        handleMessage={handleMessage} />} />
    </Routes>
  );
}

export default App;
