import { useCategoryFilter } from "../useCategoryFilter";
import { useEffect, useRef, useState } from "react";
import "./EmotionToolkits.css";

const ages = ["0~3歲", "4~6歲", "7~9歲", "10~12歲"];
// Fixed mixed sample data keeps cards stable while paging and filtering.
const sampleCards = [3, 14, 5, 8, 19, 2, 21, 12, 7, 16, 1, 22, 11, 4, 17, 10, 23, 6, 13, 0, 9, 20, 15, 18].map((value) => ({
  id: value + 1,
  age: ages[value % ages.length],
  kind: Math.floor(value / ages.length) % 2 === 0 ? "陪伴卡" : "情境卡",
}));

function ToolkitDialog({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const ageFilter = useCategoryFilter(ages);
  const kindFilter = useCategoryFilter(["陪伴卡", "情境卡"]);
  const filteredCards = sampleCards.filter((card) =>
    ageFilter.matches(card.age) &&
    kindFilter.matches(card.kind) &&
    (card.kind + " " + card.age).includes(query.trim()));
  const hasResults = filteredCards.length > 0;
  const pageCount = Math.ceil(filteredCards.length / 8);
  const visibleCards = filteredCards.slice((page - 1) * 8, page * 8);
  useEffect(() => {
    const dialog = ref.current!;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; };
  }, []);
  return (
    <dialog ref={ref} className="toolkit-dialog" aria-labelledby="toolkit-title" onCancel={onClose}
      onClick={(event) => {
        event.stopPropagation();
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
        }
      }}>
      <header className="toolkit-dialog-header">
        <h2 id="toolkit-title">情境工具包</h2>
        <input className="toolkit-search" type="search" aria-label="搜尋卡片" placeholder="搜尋" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} />
        <button type="button" aria-label="關閉情境工具包" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
        </button>
      </header>
      <div className="toolkit-filters">
        <div role="group" aria-label="孩子年齡"><span>孩子年齡：</span>{["全部", "0~3歲", "4~6歲", "7~9歲", "10~12歲"].map((value) => <button type="button" key={value} aria-pressed={ageFilter.isSelected(value)} onClick={() => { ageFilter.toggle(value); setPage(1); }}>{value}</button>)}</div>
        <div role="group" aria-label="卡片種類"><span>卡片種類：</span>{["全部", "陪伴卡", "情境卡"].map((value) => <button type="button" key={value} aria-pressed={kindFilter.isSelected(value)} onClick={() => { kindFilter.toggle(value); setPage(1); }}>{value}</button>)}</div>
      </div>
      <div className="toolkit-companion-grid">
        {visibleCards.map((card) => (
          <div className="toolkit-companion-card" data-kind={card.kind} key={card.id} aria-label={card.age + " " + card.kind + " " + card.id}><span>{card.kind}</span><small>{card.age}</small></div>
        ))}

      </div>
      {!hasResults && <p className="toolkit-empty" role="status">沒有符合條件的卡片</p>}
      <nav className="toolkit-pagination" aria-label="陪伴卡分頁">
        <button type="button" aria-label="上一頁陪伴卡" disabled={page === 1} onClick={() => setPage(page - 1)}><img src={`${import.meta.env.BASE_URL}assets/52ab0.svg`} alt="" width="44" height="44" /></button>
        <span aria-live="polite">{hasResults ? page : 0}/{hasResults ? pageCount : 0}</span>
        <button type="button" aria-label="下一頁陪伴卡" disabled={!hasResults || page === pageCount} onClick={() => setPage(page + 1)}><img src={`${import.meta.env.BASE_URL}assets/6c5c4.svg`} alt="" width="44" height="44" /></button>
      </nav>
    </dialog>
  );
}

export default function EmotionToolkits() {
  const [selected, setSelected] = useState<string | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  useEffect(() => { if (selected === null) trigger.current?.focus({ preventScroll: true }); }, [selected]);  function close() {
    setSelected(null);

  }
  return (
    <div className="w-full" onClick={(event) => event.stopPropagation()}>
      <div className="emotion-toolkit-grid" data-name="情境工具包">

          <button type="button" className="emotion-toolkit-card" aria-haspopup="dialog"
            onClick={(event) => { trigger.current = event.currentTarget; setSelected("情境工具包"); }}>
            <span>情境工具包</span>
            <small className="emotion-toolkit-subtitle">點擊查看內容</small>
          </button>

      </div>
      {selected && <ToolkitDialog onClose={close} />}
    </div>
  );
}
