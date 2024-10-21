import { useState } from 'react'
import './App.css';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Artista from './pages/Artista';
import NoPage from './pages/NoPage';
import Musicas from './pages/Musicas';

function App() {

  return (
    <>
    {/* Primeiro, encapsulamos nosso conteúdo com <BrowserRouter> */}
    <BrowserRouter>
    {/* Então definimos nosso <Routes> */}
      <Routes>
      {/* <Routes> podem ser aninhados. O primeiro <Route> tem um caminho de / e renderiza o Layoutcomponente */}
      {/* Os <Routes> aninhados herdam e adicionam à rota pai. Então o blogs caminho é combinado com o pai e se torna /blogs */}
      {/* A Home rota do componente não tem um caminho, mas tem um index atributo. Que especifica essa rota como a rota padrão para a rota pai, que é / */}
      {/* Definir o path para * atuará como um catch-all para quaisquer URLs indefinidas. Isso é ótimo para uma página de erro 404 */}
        <Route index element = {<Home/>}></Route> 
        <Route path='musicas' element={<Musicas/>}></Route>
        <Route path='artista' element={<Artista/>}></Route>
        <Route path='*' element={<NoPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App