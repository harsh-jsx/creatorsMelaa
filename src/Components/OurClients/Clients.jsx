import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./clients.css";

const Clients = () => {
  const clientLogos = [
    {
      src: "https://mesugatra.com/cdn/shop/collections/mamaearth-logo.png",
      alt: "Mamaearth",
    },
    {
      src: "https://bellavitaluxury.co.in/cdn/shop/files/Bella_Vita_Logo_360_E_2x_d60de42b-fa50-45b3-b490-be70ac1fffa1.png?height=628&pad_color=fff&v=1706080456&width=1200",
      alt: "Bella Vita",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png",
      alt: "Xiaomi",
    },
    {
      src: "https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg",
      alt: "Disney Plus Hotstar",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Duo_from_Duolingo.svg/220px-Duo_from_Duolingo.svg.png",
      alt: "Duolingo",
    },
    {
      src: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/662fd209223247bee8fb3149_NST_LOGO-01%201.svg",
      alt: "NST",
    },
    {
      src: "https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg",
      alt: "Lenskart",
    },
    {
      src: "https://www.wildstone.in/cdn/shop/files/Wild_Stone_Logo_973ee566-ce01-45db-8b37-628380b8d85b_200x@2x.png?v=1672557783",
      alt: "Wild Stone",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/ta/7/79/TVS_Motor_Company_Logo.png",
      alt: "TVS Motor Company",
    },
    {
      src: "https://media.licdn.com/dms/image/D4D22AQEzYFC3-uutHg/feedshare-shrink_2048_1536/0/1692436586544?e=2147483647&v=beta&t=-liI-WVmoA4z39-C9MT2Svh-GR0V8d5UX102VG1Valo",
      alt: "Unknown",
    },
  ];

  const clientsRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(clientsRef.current, {
      xPercent: -100,
      duration: 10,
      ease: "linear",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.unitize((x) => parseFloat(x) % 100),
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="clients-container">
      <h1>Our clients</h1>
      <div className="clients" ref={clientsRef}>
        {[...Array(2)].map((_, index) => (
          <div className="client" key={index}>
            {clientLogos.map((logo, idx) => (
              <img key={idx} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
