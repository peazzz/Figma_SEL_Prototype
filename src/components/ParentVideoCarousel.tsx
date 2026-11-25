import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import "./ParentVideoCarousel.css";

const videos = [
  { title: "晚餐不配平板，我們家怎麼開始？", icon: "🍽️", color: "#f8e9d8", scenes: ["以前一喊吃飯，孩子就先找平板。", "今天我問：「你想幫忙擺筷子，還是分湯匙？」", "他選了湯匙，還記得幫妹妹拿小支的。", "我們把平板留在客廳，一起聊今天的晚餐。"] },
  { title: "關掉螢幕就生氣，怎麼陪？", icon: "⏳", color: "#e7e4f2", scenes: ["時間到了，他抱著平板說：「我還沒玩完！」", "我蹲下來說：「正玩得開心，要停下來真的很難。」", "我陪他存好進度，一起把平板放回去。", "他還是有點悶。我坐在旁邊，等他準備好再聊。"] },
  { title: "等餐的十分鐘可以玩什麼？", icon: "🔎", color: "#dfede6", scenes: ["點完餐，孩子習慣伸手跟我要手機。", "我指著桌面問：「你找得到三樣圓圓的東西嗎？」", "她找到盤子、杯口，還有牆上的時鐘。", "下一題換她出，我們玩到餐點上桌。"] },
  { title: "一起幫手機找個睡覺的地方", icon: "🌙", color: "#dfe9f4", scenes: ["睡前，我也常忍不住再看一眼訊息。", "我問孩子：「我們的手機今晚要睡哪裡？」", "我們把充電線搬到客廳的小桌子。", "回到房間，他挑了一本書讓我念。"] },
  { title: "週末散步，讓孩子當領隊", icon: "🌳", color: "#e7eedb", scenes: ["週末下午，大家各自盯著螢幕。", "我拿出紙筆：「今天你當領隊，我們要去哪？」", "孩子畫了一條經過公園和麵包店的路線。", "走到轉角，他停下來讓我們看樹上的鳥。"] },
  { title: "家裡的螢幕約定，也聽孩子說", icon: "📝", color: "#f4e3de", scenes: ["我提議訂新規則，孩子卻問：「大人也要嗎？」", "我們各寫下一件願意試試看的事。", "最後選了「吃水果的時候，一起把手機放下」。", "大家約好試一週，再聊聊哪裡需要調整。"] },
];

type Short = typeof videos[number];
const secondsPerScene = 5;

function VideoGrid({ items, onSelect }: { items: Short[]; onSelect: (video: Short) => void }) {
  return <div className="parent-video-grid">{items.map(video =>
    <button key={video.title} type="button" className="parent-video-card" onClick={() => onSelect(video)}>
      <span className="parent-video-thumb" style={{ backgroundColor: video.color }} aria-hidden="true">
        {video.icon}<small>0:{video.scenes.length * secondsPerScene}</small>
      </span>
      <strong>{video.title}</strong>
    </button>
  )}</div>;
}

function CasePlayer({ video }: { video: Short }) {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const duration = video.scenes.length * secondsPerScene;
  useEffect(() => {
    if (!playing || time >= duration) return;
    const timer = window.setTimeout(() => setTime(time + 1), 1000);
    return () => clearTimeout(timer);
  }, [time, playing, duration]);
  const ended = time === duration;
  return <div>
    <div className="parent-video-stage" style={{ backgroundColor: video.color }}>
      <span aria-hidden="true">{video.icon}</span>
      <p>{video.scenes[Math.min(Math.floor(time / secondsPerScene), video.scenes.length - 1)]}</p>
    </div>
    <div className="parent-video-playback">
      <button type="button" onClick={() => {
        if (ended) setTime(0);
        setPlaying(ended || !playing);
      }}>{ended ? "重播" : playing ? "暫停" : "播放"}</button>
      <input type="range" aria-label="播放進度（秒）" min={0} max={duration} value={time} onChange={event => setTime(Number(event.target.value))} />
    </div>
  </div>;
}

export default function ParentVideoCarousel() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [video, setVideo] = useState<Short | null>(null);
  useEffect(() => {
    if (!video) return;
    const element = dialog.current!;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => { element.close(); document.body.style.overflow = overflow; };
  }, [video]);
  return <section className="parent-video-carousel" aria-label="家長經驗短片" onClick={event => event.stopPropagation()}>
    <div className="parent-video-heading">
      <h3>家長經驗短片</h3>
    </div>
    <VideoGrid items={videos} onSelect={setVideo} />
    {video && createPortal(<dialog ref={dialog} className="parent-video-dialog" aria-label={video.title}
      onCancel={() => setVideo(null)} onClick={event => closeDialogOnBackdrop(event, () => setVideo(null))}>
      <CasePlayer video={video} />
    </dialog>, document.body)}
  </section>;
}
