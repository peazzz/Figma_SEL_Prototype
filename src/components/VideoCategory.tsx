import { useEffect, useId, useRef } from "react";
import { useCategoryFilter } from "../useCategoryFilter";
import { createPortal } from "react-dom";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import "./EmotionToolkits.css";

const videos = {
  SEL情境短片: [
    ["輸了遊戲，好生氣怎麼辦？", "自我管理", "3:45"],
    ["今天的心情是什麼顏色？", "自我覺察", "2:50"],
    ["他為什麼一個人坐著？", "社會覺察", "3:20"],
    ["我們都想先玩", "人際關係", "4:10"],
    ["轉傳訊息前，停一下", "負責任決策", "3:05"],
  ],
  親子討論影片: [
    ["如果朋友總是插隊", "你會怎麼提醒他？", "3:45"],
    ["只有一盒彩色筆", "怎麼分配才公平？", "4:00"],
    ["玩笑還是傷人的話？", "怎麼知道對方的感受？", "3:30"],
    ["如果約定需要改變", "你會怎麼跟家人說？", "3:15"],
  ],
  家長示範影片: [
    ["孩子不想收玩具時", "用兩個選擇開啟合作", "3:45"],
    ["陪孩子說出失望", "先聽感受，再討論方法", "4:15"],
    ["手足爭執怎麼聽", "邀請兩人輪流表達", "3:40"],
    ["大人也能練習道歉", "示範說明與補救", "3:10"],
  ],
} as const;

function VideoGrid({ items }: { items: readonly (readonly [string, string, string])[] }) {
  return <div className="grid w-full grid-cols-2 gap-3 sm:gap-4">
    {items.map(([title, caption, duration]) => (
      <article key={title} className="min-w-0 rounded-xl border border-[#d6ded3] bg-white p-3 sm:p-4">
        <div className="relative aspect-video rounded-lg bg-[#e6eff3]">
          <span className="absolute right-2 bottom-2 rounded bg-[#526b60] px-2 text-xs leading-5 text-white">{duration}</span>
        </div>
        <h3 className="mt-2 font-medium text-[#253e38]">{title}</h3>
        <p className="mt-1 text-sm text-[#526b60]">{caption}</p>
      </article>
    ))}
  </div>;
}

export default function VideoCategory({ category }: { category: keyof typeof videos }) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const items = videos[category];
  const abilities = videos.SEL情境短片.map(video => video[1]);
  const filter = useCategoryFilter(abilities);
  const previousOverflow = useRef<string | null>(null);
  function unlockScroll() {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }
  useEffect(() => unlockScroll, []);
  function open() {
    ref.current?.showModal();
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  return <div className="flex w-full flex-col items-end gap-3">
    <VideoGrid items={items.slice(0, 2)} />
    <button type="button" className="cursor-pointer rounded-lg border border-[#315e4c] px-4 py-2 text-sm text-[#315e4c]" aria-haspopup="dialog" aria-label={`查看全部${category}`} onClick={open}>查看全部</button>
    {createPortal(<dialog ref={ref} className="toolkit-dialog" aria-labelledby={titleId} onClose={unlockScroll}
      onClick={event => closeDialogOnBackdrop(event, () => ref.current?.close())}>
      <header className="toolkit-dialog-header">
        <h2 id={titleId}>{category}</h2>
        <button type="button" aria-label="關閉影片清單" onClick={() => ref.current?.close()}>✕</button>
      </header>
      {category === "SEL情境短片" && <div className="toolkit-filters"><div role="group" aria-label="SEL 能力">
        <span>SEL 能力：</span>
        {["全部", ...abilities].map(ability => <button type="button" key={ability} aria-pressed={filter.isSelected(ability)} onClick={() => filter.toggle(ability)}>{ability}</button>)}
      </div></div>}
      <VideoGrid items={category === "SEL情境短片" ? items.filter(video => filter.matches(video[1])) : items} />
    </dialog>, document.body)}
  </div>;
}
