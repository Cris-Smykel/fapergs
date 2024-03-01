import { Link, useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logos/logo.png";

export default function Header(props) {
  const [isHeaderActive, setIsHeaderActive] = useState(() => false);

  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");
  const headerRef = useRef(null);
  const viewRef = useRef(null);

  const viewsRef = props.viewsRef;

  const location = useLocation().pathname;
  const [headerAnchorsData, setHeaderAnchorsData] = useState(() =>
    getHeaderAnchorsData(location)
  );

  const headerAnchors = headerAnchorsData.map((anchorData) => {
    return (
      <HeaderAnchor
        key={anchorData.id}
        name={anchorData.name}
        view={anchorData.view}
        isActive={anchorData.isActive}
        handleAnchorClick={() =>
          handleAnchorClick(headerRef, anchorData.view, viewRef)
        }
      />
    );
  });

  useEffect(() => {
    if (location !== "/") {
      setHeaderAnchorsData(() => getHeaderAnchorsData(location));
    }

    const headerHeight = headerRef.current.clientHeight;

    handleAnchorClick(headerRef, view, viewRef);

    if (viewsRef.inicio.current) {
      const viewsOffsetTop = {
        inicioOffsetTop: viewsRef.inicio.current.offsetTop - headerHeight,
        sobreOffsetTop: viewsRef.sobre.current.offsetTop - headerHeight,
        testimonialOffsetTop:
          viewsRef.testimonial.current.offsetTop - headerHeight,
        faqsOffsetTop: viewsRef.faqs.current.offsetTop - headerHeight,
      };

      window.addEventListener("scroll", () => {
        const currentYPosition = window.scrollY;

        if (
          currentYPosition >= viewsOffsetTop.inicioOffsetTop &&
          currentYPosition < viewsOffsetTop.sobreOffsetTop
        ) {
          setHeaderAnchorsData((prevAnchorsData) => {
            const newAnchorsData = [...prevAnchorsData];
            for (let index = 0; index < prevAnchorsData.length; index++) {
              if (newAnchorsData[index].view !== "inicio") {
                newAnchorsData[index].isActive = false;
                continue;
              }

              newAnchorsData[index].isActive = true;
            }

            return newAnchorsData;
          });
        } else if (
          currentYPosition >= viewsOffsetTop.sobreOffsetTop &&
          currentYPosition < viewsOffsetTop.testimonialOffsetTop
        ) {
          setHeaderAnchorsData((prevAnchorsData) => {
            const newAnchorsData = [...prevAnchorsData];
            for (let index = 0; index < prevAnchorsData.length; index++) {
              if (newAnchorsData[index].view !== "sobre") {
                newAnchorsData[index].isActive = false;
                continue;
              }

              newAnchorsData[index].isActive = true;
            }

            return newAnchorsData;
          });
        } else if (
          currentYPosition >= viewsOffsetTop.testimonialOffsetTop &&
          currentYPosition < viewsOffsetTop.faqsOffsetTop
        ) {
          setHeaderAnchorsData((prevAnchorsData) => {
            const newAnchorsData = [...prevAnchorsData];
            for (let index = 0; index < prevAnchorsData.length; index++) {
              if (newAnchorsData[index].view !== "testimonial") {
                newAnchorsData[index].isActive = false;
                continue;
              }

              newAnchorsData[index].isActive = true;
            }

            return newAnchorsData;
          });
        } else if (currentYPosition >= viewsOffsetTop.faqsOffsetTop) {
          setHeaderAnchorsData((prevAnchorsData) => {
            const newAnchorsData = [...prevAnchorsData];
            for (let index = 0; index < prevAnchorsData.length; index++) {
              if (newAnchorsData[index].view !== "faqs") {
                newAnchorsData[index].isActive = false;
                continue;
              }

              newAnchorsData[index].isActive = true;
            }

            return newAnchorsData;
          });
        }
      });
    }
  }, [view]);

  return (
    <header
      ref={headerRef}
      className="bg-white fixed top-0 right-0 left-0 z-10 border-b border-customTransparent-2"
    >
      <div className="p-3 py-6 sm:p-5 sm:py-6 flex items-center justify-between gap-4 regular-max-w m-auto">
        <Link to="/">
          <picture>
            <img className="w-40 object-cover" src={logo} alt="FAPERGS Logo" />
          </picture>
        </Link>

        <i
          onClick={() => handleHeaderActive(setIsHeaderActive)}
          className="icon-bars text-2xl text-customBlack-4 hover:text-primary regular-transition cursor-pointer md:hidden"
        ></i>

        <div
          className={`${
            isHeaderActive ? "top-0" : "-top-[110vh]"
          } fixed z-20 h-screen left-0 right-0 bg-customTransparent-7 transition-all duration-300 md:static md:h-[initial] md:bg-white`}
        >
          <div className="flex items-center justify-center h-full max-w-96 relative m-auto md:m-[initial] md:h-[initial] md:max-w-[initial]">
            <i
              onClick={() => handleHeaderActive(setIsHeaderActive, false)}
              className="icon-close absolute right-10 top-28 text-2xl text-white hover:text-primary regular-transition cursor-pointer md:hidden"
            ></i>

            <nav>
              <ul className="text-white text-lg font-bold flex flex-col items-center gap-10 md:text-customBlack-4 md:flex-row md:gap-16">
                {headerAnchors}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function handleAnchorClick(headerRef, view, viewRef) {
  const headerHeight = headerRef.current.clientHeight;

  if (view) {
    viewRef.current = document.getElementById(view);

    if (viewRef.current) {
      const scrollPosition = viewRef.current.offsetTop - headerHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }
}

function handleHeaderActive(setIsHeaderActive, isActive = true) {
  setIsHeaderActive(() => isActive);
}

function HeaderAnchor(props) {
  return (
    <li>
      <Link
        onClick={props.handleAnchorClick}
        to={`/?view=${props.view}`}
        className={`${
          props.isActive && "text-primary"
        } hover:text-primary regular-transition`}
      >
        {props.name}
      </Link>
    </li>
  );
}

function getHeaderAnchorsData(location) {
  return [
    {
      id: 1,
      view: "inicio",
      name: "Início",
      isActive: location === "/",
    },
    {
      id: 2,
      view: "sobre",
      name: "Sobre",
      isActive: false,
    },
    {
      id: 3,
      view: "testimonial",
      name: "Testimonial",
      isActive: false,
    },
    {
      id: 4,
      view: "faqs",
      name: "FAQs",
      isActive: false,
    },
  ];
}
