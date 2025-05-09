import "./HomeCouncilor.css"

import { useEffect, useRef } from "react"
function HomeCouncilor() {
  const images = [
    "/assets/RosaInés.webp", 
    "/assets/NellyZart.webp",
    "/assets/JuanDiego.webp"
  ];
  

  const names = ["Rosa Inés", "Nelly Zart", "Juan Diego"];
  const links = [
    "/candidates_view/rosa_pelinski",
    "/candidates_view/nelly_zart",
    "/candidates_view/juan_diego"
  ];


  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLDivElement>(".candidate-card");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("animate"), i * 100);
            });
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="candidates-container" ref={containerRef}>
      {images.map((src, i) => (
        <div
          className="candidate-card"
          key={i}
          onClick={() => window.location.href = links[i]}
        >
          <div className="candidate-card__image">
            <img src={src} alt={names[i]} />
          </div>
          <div className="candidate-card__info">
            <h3>{names[i]}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeCouncilor
