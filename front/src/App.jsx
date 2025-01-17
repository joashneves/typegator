import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./routers/Home";
import Cadastro from './routers/cadastro'
import Login from './routers/login';
import Post from './routers/postLink';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route Component={ Home } path="/"/> 
      <Route Component={ Cadastro } path="/cadastro"/> 
      <Route Component={ Login} path='/login'/>
      <Route Component={ Post } path='/post'/>
    </Routes>
    </BrowserRouter>
  )
}