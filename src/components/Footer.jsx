import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-customTransparent-1">
      <div className="max-w-7xl m-auto">
        <div className="flex p-3 py-16 md:p-4 md:py-20 flex-col gap-16 items-center justify-center md:flex-row md:items-start md:justify-between">
          <Link to="/">
            <picture>
              <img className="w-full max-w-60" src={logo} alt="FAPERGS Logo" />
            </picture>
          </Link>

          <nav className="flex flex-col gap-6">
            <h2 className="text-primary font-bold text-lg text-center md:text-left">
              INSTITUCIONAL
            </h2>

            <ul className="flex flex-col gap-3 items-center justify-center md:items-start md:justify-start text-base font-normal">
              <li>
                <Link to="/equipe">Equipe</Link>
              </li>
              <li>
                <Link to="/gelaria-de-dirigentes">Gelaria de Dirigentes</Link>
              </li>
              <li>
                <Link to="/historico">Histórico</Link>
              </li>
              <li>
                <Link to="/identidade-visual">Identidade Visual</Link>
              </li>
              <li>
                <Link to="/valores">Missão, Visão e Valores</Link>
              </li>
              <li>
                <Link to="/seguranca">Proteção de Dados Pessoais</Link>
              </li>
              <li>
                <Link to="/transparencia">Transparência Ativa</Link>
              </li>
            </ul>
          </nav>

          <nav className="flex flex-col gap-6">
            <h2 className="text-primary font-bold text-lg text-center md:text-left">
              CHAMADAS E EDITAIS
            </h2>

            <ul className="flex flex-col gap-3 items-center justify-center text-base font-normal md:items-start md:justify-start">
              <li>
                <Link to="/abertos">Abertos</Link>
              </li>
              <li>
                <Link to="/em-julgamento">Em Julgamento</Link>
              </li>
              <li>
                <Link to="/encerrados">Encerrados</Link>
              </li>
            </ul>
          </nav>

          <nav className="flex flex-col gap-6">
            <h2 className="text-primary font-bold text-lg text-center md:text-left">
              COMUNICAÇÃO
            </h2>

            <ul className="flex flex-col gap-3 items-center justify-center text-base font-normal md:items-start md:justify-start">
              <li>
                <Link to="/avisos">Avisos</Link>
              </li>
              <li>
                <Link to="/contato">Fale conosco</Link>
              </li>
              <li>
                <Link to="/sobre">FAPERGS 50 Anos</Link>
              </li>
              <li>
                <Link to="/intranet">Intranet</Link>
              </li>
              <li>
                <Link to="/links-uteis">Links Úteis</Link>
              </li>
              <li>
                <Link to="/noticias">Notícias</Link>
              </li>
              <li>
                <Link to="/resultados-e-indicadores">
                  Resultados e Indicadores
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="p-3 md:p-4 border-t border-customTransparent-1">
        <p className="text-sm font-medium text-customBlack-3 text-center">
          Copyright © 2024 FAPERGS | Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
