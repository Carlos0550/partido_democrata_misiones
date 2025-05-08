import { useEffect, useState } from "react";
import "./HomeAds.css";

export default function HomeAds() {
  const [ads] = useState<string[]>([
    "Cada segundo cuenta. Se acerca el momento de elegir el cambio que construye. Contamos con vos",
    "Tu voz importa. Participá con decisión.",
    "Argentina puede más. Vos sos la fuerza.",
  ]);

  const [currentAd, setCurrentAd] = useState(ads[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = ads[Math.floor(Math.random() * ads.length)];
      setCurrentAd(random);
    }, 10000);

    return () => clearInterval(interval);
  }, [ads]);

  return (
    <div className="ads-title">
      <p>{currentAd}</p>
    </div>
  );
}
