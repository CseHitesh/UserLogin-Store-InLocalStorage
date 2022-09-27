import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import ViewProfile from './components/ViewProfile.jsx';

export default function App() {
  return (
    <>






      <Routes>
        <Route path="/" element={<Home />} />

        <  Route path="/login" element={<Login />} />
        <  Route path="/viewuser" element={<ViewProfile />} />





      </Routes>

    </>

  )
}