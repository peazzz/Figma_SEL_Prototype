import { useState } from "react";
import "./BannerCarousel.css";

const slides = [
  { image: "/assets/f164d.png", label: "同理心：聽見彼此的感受", title: "同理心", subtitle: "聽見彼此的感受" },
  { image: "/assets/banners/care.png", label: "關懷主題", title: "關懷", subtitle: "" },
  { image: "/assets/banners/parenting.png", label: "育兒親職網・衛生福利部社會及家庭署", title: "", subtitle: "" },
];

export default function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  function move(direction: number) {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <section className="banner-carousel" aria-label="本週品格與 SEL 主題" aria-roledescription="輪播" data-name="首頁 Banner 輪播">
      <div className="banner-carousel-stage">
        <div id="home-banner-slide" className="banner-carousel-slide" role="group" aria-roledescription="投影片" aria-label={`${activeIndex + 1} / ${slides.length}：${slide.label}`}>
          <img className="banner-carousel-image" src={slide.image} alt={slide.label} />
          {slide.title && (
            <div className="banner-carousel-copy">
              <h2>{slide.title}</h2>
              {slide.subtitle && <p>{slide.subtitle}</p>}
              {activeIndex === 0 && <a className="banner-carousel-recommendation" data-name="操作 / 查看推薦  →">查看推薦 →</a>}
            </div>
          )}
        </div>
        <button type="button" className="banner-carousel-arrow banner-carousel-previous" aria-label="上一張 Banner" aria-controls="home-banner-slide" onClick={() => move(-1)}>
          <img src="/assets/52ab0.svg" alt="" />
        </button>
        <button type="button" className="banner-carousel-arrow banner-carousel-next" aria-label="下一張 Banner" aria-controls="home-banner-slide" onClick={() => move(1)}>
          <img src="/assets/6c5c4.svg" alt="" />
        </button>
      </div>
      <div className="banner-carousel-dots" role="group" aria-label="選擇 Banner">
        {slides.map((item, index) => (
          <button key={item.image} type="button" aria-label={`切換至第 ${index + 1} 張：${item.label}`} aria-current={index === activeIndex ? "true" : undefined} aria-controls="home-banner-slide" onClick={() => setActiveIndex(index)}>
            <span />
          </button>
        ))}
      </div>
      <span className="sr-only" aria-live="polite" aria-atomic="true">{`第 ${activeIndex + 1} 張，共 ${slides.length} 張：${slide.label}`}</span>
    </section>
  );
}
