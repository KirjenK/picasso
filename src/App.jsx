// import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Post from './components/Post/Post';
import MainPage from './components/MainPage/MainPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/posts/:id" element={<Post />} />
      {/* <Route path="/users/:id" element={<MainPage />} /> */}
    </Routes>
  );
}
