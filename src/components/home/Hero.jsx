import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.png";

export default function Hero() {
  const inicioRef = useRef(null);

  return (
    <section className="bg-regular-gradient" id="inicio" ref={inicioRef}>
      <div className="text-white font-bold p-3 py-16 flex flex-col gap-10 md:flex-row md:gap-16 md:p-4 md:py-28 md:items-center regular-max-w m-auto">
        <article className="flex flex-col gap-7">
          <h1 className="text-2xl max-w-[40ch] lg:text-4xl lg:max-w-[30ch]">
            Bem-vindo à Conferência Estadual de Ciência, Tecnologia e Inovação!
          </h1>

          <p className="font-normal text-base md:max-w-[52ch]">
            Descubra o futuro da pesquisa e inovação enquanto reunimos
            especialistas, acadêmicos e inovadores sob o mesmo teto. Junte-se a
            nós enquanto exploramos avanços inovadores e traçamos o curso para
            um futuro mais promissor.
          </p>

          <div className="flex gap-7 flex-wrap md:flex-nowrap md:flex-row md:items-center">
            <Link to="inscrever-se" className="button">
              Inscrever-se
            </Link>
            <a href="#" className="button">
              Saber mais
            </a>
          </div>
        </article>

        <picture className="self-center">
          <img
            src={heroImage}
            alt="Jovens usando técnologia"
            className="w-full max-w-[34rem] md:max-w-[44rem] md:object-cover"
          />
        </picture>
      </div>
    </section>
  );
}
