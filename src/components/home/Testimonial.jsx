import { Link } from "react-router-dom";
import profile1 from "../../assets/images/profile-1.png";
import profile2 from "../../assets/images/profile-2.png";
import profile3 from "../../assets/images/profile-3.png";

export default function Testimonial() {
  const testimonialsData = getTestimonialData();

  const testimonials = testimonialsData.map((testimonialData) => {
    return (
      <TestimonialContent
        key={testimonialData.id}
        profileImg={testimonialData.profileImg}
        name={testimonialData.name}
        testimonial={testimonialData.testimonial}
      />
    );
  });

  return (
    <section className="bg-regular-gradient">
      <div className="p-3 py-16 flex flex-col items-center gap-12 md:p-4 md:py-20 max-w-7xl m-auto lg:gap-16">
        <article className="text-white font-base text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl lg:text-4xl font-bold md:text-nowrap">
            Alguns dos participantes
          </h2>

          <p className="text-base max-w-[70ch]">
            Alguns dos participantes da edição passada compartilharam suas
            experiências transformadoras durante o evento. Suas histórias
            inspiradoras destacaram a importância da colaboração, inovação e
            descoberta na Conferência.
          </p>
        </article>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {testimonials}
        </div>

        <Link to="inscrever-se" className="button">
          Junte-se a Nós
        </Link>
      </div>
    </section>
  );
}

function TestimonialContent(props) {
  return (
    <article className="flex flex-col gap-6 items-center w-fit justify-center p-6 py-12 text-center bg-white rounded-2xl lg:max-w-80 lg:justify-start">
      <picture>
        <img
          className="w-36 aspect-square"
          src={props.profileImg}
          alt="Foto da pessoa relatando o evento."
        />
      </picture>

      <h2 className="font-bold text-primary text-lg">{props.name}</h2>

      <p className="font-normal text-base text-customBlack-3 max-w-[50ch]">
        {props.testimonial}
      </p>
    </article>
  );
}

function getTestimonialData() {
  return [
    {
      id: 1,
      profileImg: profile1,
      name: "Jhon mendes",
      testimonial: `“Participar da Conferência Estadual de Ciência, Tecnologia e Inovação
                    foi uma experiência transformadora. A oportunidade de interagir com os
                    principais pesquisadores, conhecer descobertas inovadoras e estabelecer
                    contatos com líderes da indústria enriqueceu muito minha perspectiva e
                    alimentou minha paixão pela inovação.”`,
    },
    {
      id: 2,
      profileImg: profile2,
      name: "Carlos Oliveira",
      testimonial: `“A conferência proporcionou uma plataforma única para compartilhar minha pesquisa
                    e colaborar com outros profissionais. As discussões estimulantes e as oportunidades de networking
                    foram inestimáveis para o avanço da minha carreira acadêmica. Recomendo a todos os interessados
                    em ciência e inovação!”`,
    },
    {
      id: 3,
      profileImg: profile3,
      name: "Ana luiza",
      testimonial: `“A conferência foi um marco em minha jornada acadêmica. Conhecer especialistas de
                    diversas áreas, participar de workshops e apresentar meu trabalho foi uma oportunidade
                    enriquecedora. Estou muito grato por ter participado e ansioso para os próximos eventos!”`,
    },
  ];
}
