import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/about.png";

export default function About() {
  return (
    <section className="bg-white">
      <div className="p-3 py-10 flex flex-col gap-10 md:flex-row-reverse md:gap-16 md:p4 md:py-16 max-w-7xl md:justify-between md:items-center m-auto lg:py-20">
        <article className="text-base text-customBlack-3 font-normal flex flex-col gap-4 md:gap-6">
          <h2 className="text-2xl lg:text-4xl text-primary font-bold md:text-nowrap">
            Sobre a Conferência
          </h2>

          <article className="text-inherit flex flex-col gap-2">
            <p className="md:max-w-[55ch]">
              A Conferência Estadual de Ciência, Tecnologia e Inovação é uma
              plataforma líder dedicada a promover a colaboração e impulsionar o
              progresso nos campos da ciência, tecnologia e inovação.
            </p>

            <p className="md:max-w-[55ch]">
              Nossa conferência serve como um ponto de encontro para
              pesquisadores, formuladores de políticas, líderes da indústria e
              acadêmicos trocarem ideias, apresentarem pesquisas de ponta e
              forjarem parcerias que impulsionam a inovação.
            </p>

            <p className="md:max-w-[55ch]">
              Desde explorar as últimas tendências até abordar desafios
              urgentes, estamos comprometidos em avançar o conhecimento e
              catalisar mudanças transformadoras.
            </p>
          </article>

          <Link to="inscrever-se" className="button">
            Inscrever-se
          </Link>
        </article>

        <picture className="self-center">
          <img
            className="w-full max-w-[42rem] md:max-w-[initial] md:w-[full]"
            src={aboutImage}
            alt="Imagem da conferência de ciências."
          />
        </picture>
      </div>
    </section>
  );
}
