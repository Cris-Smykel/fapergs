import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function Faqs() {
  const [faqsData, setFaqsData] = useState(() => getFaqsData());

  const faqs = faqsData.map((faqData) => {
    return (
      <Faq
        key={faqData.id}
        id={faqData.id}
        question={faqData.question}
        answer={faqData.answer}
        isActive={faqData.isActive}
        handleActiveFaq={() => handleActiveFaq(setFaqsData, faqData.id)}
      />
    );
  });

  const faqsRef = useOutletContext().faqs;

  return (
    <section id="faqs" ref={faqsRef}>
      <div className="p-3 py-16 sm:p-4 sm:py-20 flex flex-col gap-10 lg:gap-16 md:flex-row m-auto max-w-7xl md:justify-between">
        <article className="flex flex-col gap-4 md:gap-6 md:py-16">
          <h2 className="text-primary font-bold text-2xl lg:text-4xl lg:text-nowrap">
            Perguntas Frequêntes
          </h2>

          <p className="text-base font-normal text-customBlack-3 md:max-w-[55ch]">
            Encontre respostas para perguntas frequentes sobre inscrições,
            prazos e oportunidades. Comece a planejar sua participação hoje!
            Cada chamada para ação é projetada para incentivar o engajamento e a
            participação, orientando os visitantes a dar o próximo passo em sua
            jornada com a conferência.
          </p>

          <Link to="inscrever-se" className="button">
            Inscrever-se
          </Link>
        </article>

        <div className="hidden md:block w-[1px] h-[full] bg-customTransparent-1"></div>

        <div className="flex flex-col gap-4 md:py-16">{faqs}</div>
      </div>
    </section>
  );
}

function Faq(props) {
  return (
    <article
      onClick={props.handleActiveFaq}
      className="flex cursor-pointer flex-col gap-4 p-5 border border-customTransparent-2 rounded-2xl md:p-8"
    >
      <article className="text-base text-customBlack-2 flex justify-between gap-3 md:gap-6 lg:gap-20">
        <h3 className="font-bold md:text-lg">{props.question}</h3>

        <i
          className={` ${
            props.isActive ? "icon-chevron-up" : "icon-chevron-down"
          } text-lg text-customBlack-2`}
        ></i>
      </article>
      <p
        className={`${
          props.isActive ? "block" : "hidden"
        } text-base font-normal text-customBlack-3 md:max-w-[70ch]`}
      >
        {props.answer}
      </p>
    </article>
  );
}

function handleActiveFaq(setFaqsData, faqId) {
  setFaqsData((prevFaqsData) => {
    const newFaqsData = prevFaqsData.map((faqData) => {
      if (faqData.id === faqId) {
        faqData.isActive = !faqData.isActive;
      }

      return faqData;
    });

    return newFaqsData;
  });
}

function getFaqsData() {
  return [
    {
      id: 1,
      question: "Qual é o prazo para as inscrições no edital ARD/ARC?",
      answer:
        "As inscrições para a bolsa ARD/ARC encerram em breve. Certifique-se de enviar sua inscrição antes do prazo!",
      isActive: false,
    },
    {
      id: 2,
      question:
        "Até quando posso me inscrever na Conferência Estadual de Ciência, Tecnologia e Inovação?",
      answer:
        "As inscrições para a conferência estão abertas até 3 de março. Garanta sua vaga hoje mesmo para participar deste evento emocionante!",
      isActive: false,
    },
    {
      id: 3,
      question:
        "Quais oportunidades estão disponíveis para colaboração internacional?",
      answer:
        "Explore oportunidades de colaboração com universidades na Itália por meio do programa MCI - Mobilidade Confap Italy 2023. Não perca esta chance de expandir seus horizontes e colaborar em projetos de pesquisa inovadores.",
      isActive: false,
    },
    {
      id: 4,
      question:
        "Onde posso encontrar informações sobre oportunidades de financiamento recentes e resultados?",
      answer:
        "Mantenha-se atualizado sobre as últimas oportunidades de financiamento e resultados acessando o sistema SIGFAPERGS. Desde anúncios de bolsas até resultados finais, todas as informações que você precisa estão a apenas um clique de distância!",
      isActive: false,
    },
  ];
}
