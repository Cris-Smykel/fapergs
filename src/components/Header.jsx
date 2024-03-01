import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logos/logo.png";

export default function Header() {
  const [isHeaderActive, setIsHeaderActive] = useState(() => false);

  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");
  const headerRef = useRef(null);
  const viewRef = useRef(null);

  useEffect(() => {
    if (view) {
      viewRef.current = document.getElementById(view);

      if (viewRef.current) {
        const headerHeight = headerRef.current.clientHeight;
        const scrollPosition = viewRef.current.offsetTop - headerHeight;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [searchParams]);

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
                <li>
                  <Link
                    to={`/?view=${"inicio"}`}
                    className={`${
                      view === "inicio" && "text-primary"
                    } hover:text-primary regular-transition`}
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/?view=${"sobre"}`}
                    className={`${
                      view === "sobre" && "text-primary"
                    } hover:text-primary regular-transition`}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/?view=${"testimonial"}`}
                    className={`${
                      view === "testimonial" && "text-primary"
                    } hover:text-primary regular-transition`}
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/?view=${"faqs"}`}
                    className={`${
                      view === "faqs" && "text-primary"
                    } hover:text-primary regular-transition`}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function handleHeaderActive(setIsHeaderActive, isActive = true) {
  setIsHeaderActive(() => isActive);
}
