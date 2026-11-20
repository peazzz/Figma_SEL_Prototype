import { useEffect, useRef, useState } from "react";
import "./ParentVideoCarousel.css";

export default function ParentVideoCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  useEffect(() => {
    const element = track.current!;
    const update = () => setEdges({
      start: element.scrollLeft < 2,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => { observer.disconnect(); element.removeEventListener("scroll", update); };
  }, []);
  function move(direction: number) {
    const element = track.current!;
    const card = element.firstElementChild as HTMLElement;
    element.scrollBy({ left: direction * (card.getBoundingClientRect().width + 10), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return (
    <section className="parent-video-carousel" aria-label="家長經驗短片" onClick={(event) => event.stopPropagation()}>
      <div className="parent-video-heading">
        <h3>家長經驗短片</h3>
        <div className="parent-video-controls">
          <button type="button" aria-label="上一個家長經驗短片" disabled={edges.start} onClick={() => move(-1)}><img src={`${import.meta.env.BASE_URL}assets/52ab0.svg`} alt="" width="32" height="32" /></button>
          <button type="button" aria-label="下一個家長經驗短片" disabled={edges.end} onClick={() => move(1)}><img src={`${import.meta.env.BASE_URL}assets/6c5c4.svg`} alt="" width="32" height="32" /></button>
        </div>
      </div>
      <div ref={track} className="parent-video-track" tabIndex={0} aria-label="短片清單，可左右捲動"
        onKeyDown={(event) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }}>
        {Array.from({ length: 6 }, (_, index) => (
          <div className="parent-video-card" key={index}>
            <div className="parent-video-placeholder">家長經驗短片</div>
            <p>影片名稱 {index + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

