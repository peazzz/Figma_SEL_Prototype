import { useCategoryFilter } from "../useCategoryFilter";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import StoryFilterLabel from "./StoryFilterLabel";
import "./EmotionToolkits.css";
import "./AgeStoryLibrary.css";

import { RepairDetail, repairSteps } from "./RepairDetail";

const ages = ["0~3歲", "4~6歲", "7~9歲", "10~12歲"];
const cardTitles = [
  "抱一抱，慢慢說", "陪你替心情取名字", "一起聽懂朋友的心情", "練習說出自己的界線",
  "玩具被拿走了", "還沒輪到我", "和好朋友吵架了", "小組裡的不同意見",
  "睡前的安心擁抱", "陪你練習說對不起", "一起想想別人的感受", "壓力來時聊一聊",
  "第一次說再見", "積木倒下的時候", "輸了比賽好難過", "群組裡的一句玩笑",
  "一起拍拍小肚子", "用顏色畫出心情", "陪你找回勇氣", "一起整理煩心事",
  "不想收玩具", "好朋友今天沒來", "上臺前心跳好快", "被朋友誤會了",
];
const sampleCards = [3, 14, 5, 8, 19, 2, 21, 12, 7, 16, 1, 22, 11, 4, 17, 10, 23, 6, 13, 0, 9, 20, 15, 18].map((value) => ({
  id: value + 1,
  title: cardTitles[value],
  age: ages[value % ages.length],
  kind: Math.floor(value / ages.length) % 2 === 0 ? "陪伴卡" : "情境卡",
}));

type LibraryProps = {
  title: string;
  itemLabel: string;
  cards: (typeof sampleCards[number] & { topic?: string; step?: typeof repairSteps[number] })[];
  initialKind?: string;
  entryTitle?: string;
  kinds: string[];
};

function ToolkitDialog({ title, itemLabel, cards, kinds, initialKind, onClose }: LibraryProps & { onClose: () => void }) {
  const titleId = useId();
  const filtersId = useId();
  const ref = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const ageFilter = useCategoryFilter(ages);
  const kindFilter = useCategoryFilter(kinds, initialKind ? [initialKind] : []);
  const stepNames = repairSteps.map(step => step.title);
  const stepFilter = useCategoryFilter(stepNames);
  const showStepFilter = kindFilter.isSelected("修復卡");
  const [step, setStep] = useState<typeof repairSteps[number] | null>(null);
  const filteredCards = cards.filter((card) =>
    (card.age === "全年齡" || ageFilter.matches(card.age)) &&
    kindFilter.matches(card.kind) &&
    (!showStepFilter || !card.step || stepFilter.matches(card.step.title)) &&
    (card.title + " " + card.kind + " " + card.age + " " + (card.topic ?? "")).includes(query.trim()));
  const hasResults = filteredCards.length > 0;
  useEffect(() => {
    const dialog = ref.current!;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; };
  }, []);
  return createPortal(
    <dialog ref={ref} className="toolkit-dialog story-library-dialog" aria-labelledby={titleId} onCancel={onClose}
      onClick={(event) => closeDialogOnBackdrop(event, onClose)}>
      <header className="toolkit-dialog-header story-library-header">
        <h2 id={titleId}>{step?.title ?? title}</h2>
        <button type="button" aria-label={`關閉${title}`} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
        </button>
      </header>
      {step && <RepairDetail step={step} onBack={() => setStep(null)} />}
      <div hidden={!!step} className="story-search-row" style={step ? { display: "none" } : undefined}>
        <input className="toolkit-search" type="search" aria-label={`搜尋${itemLabel}`} placeholder={`搜尋${itemLabel}、年齡或關鍵字`} value={query} onChange={(event) => setQuery(event.target.value)} />
        <button type="button" className="story-filter-toggle" title={filtersOpen ? "收合篩選" : "展開篩選"} aria-label={(filtersOpen ? "收合" : "展開") + itemLabel + "篩選"} aria-expanded={filtersOpen} aria-controls={filtersId} onClick={() => setFiltersOpen(value => !value)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M3 6h5m4 0h9M3 12h11m4 0h3M3 18h2m4 0h12M8 3v6m6 0v6M5 15v6" /></svg>
        </button>
      </div>
      <div className="story-results-area" style={step ? { display: "none" } : undefined}>
        <div id={filtersId} className="toolkit-filters story-filters" hidden={!filtersOpen}>
          <div role="group" aria-label="孩子年齡"><StoryFilterLabel label="孩子年齡" />{["全部", ...ages].map((value) => <button type="button" key={value} aria-pressed={ageFilter.isSelected(value)} onClick={() => ageFilter.toggle(value)}>{value}</button>)}</div>
          <div role="group" aria-label={itemLabel + "種類"}><StoryFilterLabel label={itemLabel + "種類"} />{["全部", ...kinds].map((value) => <button type="button" key={value} aria-pressed={kindFilter.isSelected(value)} onClick={() => kindFilter.toggle(value)}>{value}</button>)}</div>
          {showStepFilter && <div role="group" aria-label="修復內容">
            <StoryFilterLabel label="修復內容" />
            {["全部", ...stepNames].map(name => (
              <button type="button" key={name} aria-pressed={stepFilter.isSelected(name)} onClick={() => stepFilter.toggle(name)}>{name}</button>
            ))}
          </div>}
        </div>
        <div className="story-library-body">
        <div className="toolkit-companion-grid">
          {filteredCards.map((card) => (
            <div key={card.id} className="relative">
              <div className="toolkit-companion-card" data-kind={card.kind}><span>{card.kind}</span></div>
              <strong className="story-book-title block">{card.step ? <button type="button" className="text-left after:absolute after:inset-0" onClick={() => setStep(card.step!)}>{card.title}</button> : card.title}</strong>
              <div className="story-book-tags">
                <span>{card.kind}</span>
                {card.step && <span>{card.step.title}</span>}
                <span>{card.age}</span>
              </div>
            </div>
          ))}
  
        </div>
        {!hasResults && <p className="toolkit-empty" role="status">沒有符合條件的{itemLabel}</p>}
        </div>
      </div>
    </dialog>, document.body
  );
}

export function FilterableCardLibrary(props: LibraryProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full" onClick={(event) => event.stopPropagation()}>
      <div className="emotion-toolkit-grid" data-name={props.title}>
        <button type="button" className="emotion-toolkit-card" aria-haspopup="dialog" onClick={() => setOpen(true)}>
          <span>{props.entryTitle ?? props.title}</span>
          <small className="emotion-toolkit-subtitle">點擊查看內容</small>
        </button>
      </div>
      {open && <ToolkitDialog {...props} onClose={() => setOpen(false)} />}
    </div>
  );
}

const toolkitCards = [
  ...sampleCards.map(card => ({ ...card, topic: "情緒陪伴" })),
  ...repairSteps.map((step, index) => ({ id: 25 + index, title: step.title, kind: "修復卡", age: "全年齡", topic: "衝突修復", step })),
];

export default function EmotionToolkits({ repairEntry = false }: { repairEntry?: boolean }) {
  return <FilterableCardLibrary title="情境工具包" itemLabel="卡片" cards={toolkitCards} kinds={["陪伴卡", "情境卡", "修復卡"]} initialKind={repairEntry ? "修復卡" : undefined} entryTitle={repairEntry ? "修復對話卡" : undefined} />;
}
