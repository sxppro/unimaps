import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Map from '../Map/Map';
import HomePage from '../HomePage/HomePage';

// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/map" element={<Map />}></Route>
    </Routes>
  );
}
