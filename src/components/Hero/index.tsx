"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/hero/1.jpg",
    "/images/hero/2.jpg",
    "/images/hero/3.jpg",
    "/images/hero/4.jpg",
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Schimbă imaginea la fiecare 3 secunde
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.5s ease-in-out",
            filter: "brightness(50%)", // Filtru doar pentru imagine
          }}
        ></div>

        {/* Conținutul textului */}
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Platformă de Închiriere Rapidă și Ușor de Utilizat
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-white sm:text-lg md:text-xl">
                  Descoperă RentSphere, platforma ideală pentru închirierea
                  locuințelor, vehiculelor sau altor bunuri. Creată cu cele mai
                  noi tehnologii, RentSphere îți oferă o experiență simplă și
                  eficientă.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Elemente grafice suplimentare */}
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
