import './App.css';
import React, { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, } from 'react-redux';
import {
  handleBookAdd,
  handleSignOut,
  handleUserUploads,
  handleChanges,
  handleAuth,
  handleRegister,
  handleNewMessage,
  handleGetAllBooks,
} from './myRedux/myActions';
import Layout from './layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetAllBooks())
  }, [dispatch])

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

  return (<>
    <Layout>
      <Outlet />
    </Layout>
  </>
  );
}

export default App;
