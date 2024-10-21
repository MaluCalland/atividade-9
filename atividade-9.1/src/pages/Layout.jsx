// O Layout componente possui elementos <Outlet>e <Link>
// O <Outlet> renderiza a rota atual selecionada.
// <Link> é usado para definir a URL e monitorar o histórico de navegação.
// Sempre que vincularmos a um caminho interno, usaremos <Link> em vez de <a href="">.
// A "rota de layout" é um componente compartilhado que insere conteúdo comum em todas as páginas, como um menu de navegação.

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className="home">Home</Link>
          </li>
          <li>
            <Link to="/artista" className="artista">Artistas</Link>
          </li>
          <li>
            <Link to="/musicas" className="musicas">Músicas</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;