import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./routers/Home";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route Component={ Home } path="/"/> 
    </Routes>
    </BrowserRouter>
  )
}