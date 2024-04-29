import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/index';
import './App.css';
import SignUpPage from 'pages/SignUpPage';
import MyArchive from 'pages/MyArchive/indes';
import MyPage from 'pages/MyPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/my-archive" element={<MyArchive />} />
        <Route path="/my-page" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
