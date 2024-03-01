import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <article className="w-full max-w-7xl py-48 p-3 m-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary">
          404 Página não encontrada.
        </h1>
      </article>
    </section>
  );
}
