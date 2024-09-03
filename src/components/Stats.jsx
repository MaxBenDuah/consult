import { useState, useEffect, useRef } from "react";

const Stats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    team: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    const countUp = (start, end, setter) => {
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // Increment per frame

      const updateCount = () => {
        start += increment;
        if (start < end) {
          setter(Math.floor(start));
          requestAnimationFrame(updateCount);
        } else {
          setter(end);
        }
      };

      updateCount();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          countUp(0, 4523, (value) =>
            setCounts((prev) => ({ ...prev, projects: value }))
          );
          countUp(0, 1500, (value) =>
            setCounts((prev) => ({ ...prev, clients: value }))
          );
          countUp(0, 2500, (value) =>
            setCounts((prev) => ({ ...prev, awards: value }))
          );
          countUp(0, 1000, (value) =>
            setCounts((prev) => ({ ...prev, team: value }))
          );
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-center px-16 pb-36 space-y-6 lg:space-y-0 bg-white mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
    >
      <div className="space-y-4">
        <div className="flex justify-center">
          <img
            src="/undraw_Project_completed_re_jr7u.png"
            className=" h-36 block"
          />
        </div>
        <p className="text-6xl font-bold">{counts.projects}</p>
        <p className="uppercase font-semibold text-sm">Projects Completed</p>
      </div>
      <div className="space-y-4">
        <div className="flex justify-center">
          <img
            src="/undraw_Happy_announcement_re_tsm0.png"
            className="h-36 block"
          />
        </div>
        <p className="text-6xl font-bold">{counts.clients}</p>
        <p className="uppercase font-semibold text-sm">Happy Clients</p>
      </div>
      <div className="space-y-4">
        <div className="flex justify-center">
          <img src="/undraw_Winners_re_wr1l.png" className="h-36 block" />
        </div>
        <p className="text-6xl font-bold">{counts.awards}</p>
        <p className="uppercase font-semibold text-sm">Award Winning</p>
      </div>
      <div className="space-y-4">
        <div className="flex justify-center">
          <img src="/undraw_Team_spirit_re_yl1v.png" className="h-36 block" />
        </div>
        <p className="text-6xl font-bold">{counts.team}</p>
        <p className="uppercase font-semibold text-sm">Company Team</p>
      </div>
    </div>
  );
};

export default Stats;
