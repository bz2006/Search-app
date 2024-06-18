import React from 'react';
import HomePage from './pages/Home';
import { Routes, Route } from "react-router-dom"
import axios from 'axios';
import NewBook from './pages/NewBook';


axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-new" element={<NewBook />} />
    </Routes>
  );
}

export default App;
