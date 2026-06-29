import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Connect from './pages/Connect.jsx';
import JoinRoomPage from './pages/JoinRoomPage.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import WorkspacePage from './pages/WorkspacePage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/join" element={<JoinRoomPage />} />
        <Route path="/auth" element={<LoginSignup />} />
      </Route>
      <Route path="/workspace/:roomCode" element={<WorkspacePage />} />
    </Routes>
  );
}

export default App;
