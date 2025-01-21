import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routers/Home";
import Cadastro from "./routers/cadastro";
import Login from "./routers/login";
import Post from "./routers/postLink";
import Perfil from "./routers/perfil/index.jsx";
import { PesquisaProvider } from "./context/PesquisaConxtext.jsx";
import Header from "./components/header/index.jsx";
import Footer from "./components/footer/index.jsx";
import sobre from "./routers/sobre/index.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <PesquisaProvider>
        <Header />
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Cadastro} path="/cadastro" />
          <Route Component={Login} path="/login" />
          <Route Component={Post} path="/post" />
          <Route Component={sobre} path="/sobre"/>
          <Route Component={Perfil} path="/profile/:usuario" />
        </Routes>
        <Footer/>
      </PesquisaProvider>
    </BrowserRouter>
  );
}
