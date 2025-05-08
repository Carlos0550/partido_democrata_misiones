import { useEffect, useState } from "react";
import "./HomeCountDown.css"
import dayjs from "dayjs";
function HomeCountDown() {
    const targetDate = dayjs("2025-06-08");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const diff = targetDate.diff(now);

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days    = Math.floor(totalSeconds / (3600 * 24));
      const hours   = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

    return (
        <div className="countdown-container">
            <h1>{timeLeft.days} DÍAS</h1>
            <h2>
                {timeLeft.hours === 0 ? "" : timeLeft.hours > 1 ? timeLeft.hours + " HORAS " : timeLeft.hours + " HORA "}
                {timeLeft.minutes} {timeLeft.minutes > 1 ? " MINUTOS " : " MINUTO "}
                {timeLeft.seconds} SEGUNDOS
            </h2>
            <p>RESTANTES</p>
        </div>
    );
};

export default HomeCountDown
