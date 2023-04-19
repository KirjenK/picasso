import './App.css';
import { Routes, Route } from 'react-router-dom';
import Post from './components/Post/Post';
import MainPage from './components/MainPage/MainPage';
import ProtectedAllPages from './components/ProtectedAllPages/ProtectedAllPages';
import telega from './img/telega.png';

export default function App() {
  return (
    <>
      <header>
        <div>
          Picasso
        </div>
        <div>
          test
        </div>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/:id" element={<Post />} />

        <Route element={<ProtectedAllPages />}>
          <Route path="*" />
        </Route>

      </Routes>
      <footer>
        <p> Made by Kir</p> <a target="blank" href="https://t.me/kirjen"> <img width="40px" src={telega} alt="telegram" /></a>
      </footer>
    </>
  );
}
