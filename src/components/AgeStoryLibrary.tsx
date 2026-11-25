import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useCategoryFilter } from "../useCategoryFilter";
import { ageStories, storyAges, storyKinds, storyThemes, type AgeStory } from "../data/ageStories";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import StoryFilterLabel from "./StoryFilterLabel";
import "./EmotionToolkits.css";
import "./AgeStoryLibrary.css";

// Interleave the three formats and age groups across the initial bookshelf.
const stories = [...ageStories].sort((a, b) => {
  const score = (story: AgeStory) => storyKinds.indexOf(story.kind) * 32 + storyAges.indexOf(story.age) * 8 + storyThemes.indexOf(story.theme);
  return (score(a) * 37 % 97) - (score(b) * 37 % 97);
});

function StoryDialog({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const listScrollTop = useRef(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selected, setSelected] = useState<AgeStory | null>(null);
  const kinds = useCategoryFilter(storyKinds);
  const ages = useCategoryFilter(storyAges);
  const themes = useCategoryFilter(storyThemes);
  const filtered = stories.filter(story => kinds.matches(story.kind) && ages.matches(story.age) && themes.matches(story.theme) && `${story.title} ${story.kind} ${story.age} ${story.theme}`.includes(query.trim()));
  useEffect(() => {
    const dialog = ref.current!;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; };
  }, []);
  useEffect(() => { bodyRef.current?.scrollTo(0, selected ? 0 : listScrollTop.current); titleRef.current?.focus({ preventScroll: true }); }, [selected]);
  function filters(label: string, options: readonly string[], filter: ReturnType<typeof useCategoryFilter>) {
    return <div role="group" aria-label={label}><StoryFilterLabel label={label} />{["全部", ...options].map(value => <button type="button" key={value} aria-pressed={filter.isSelected(value)} onClick={() => filter.toggle(value)}>{value}</button>)}</div>;
  }
  return createPortal(<dialog ref={ref} className="toolkit-dialog story-library-dialog" aria-labelledby="story-library-title" onCancel={onClose} onClick={event => closeDialogOnBackdrop(event, onClose)}>
    <header className="toolkit-dialog-header story-library-header">
      <div><h2 ref={titleRef} tabIndex={-1} id="story-library-title">{selected ? selected.title : "分齡故事"}</h2></div>
      <button type="button" aria-label="關閉分齡故事" onClick={onClose}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
    </header>
    {!selected && <div className="story-search-row">
      <input className="toolkit-search" type="search" aria-label="搜尋故事" placeholder="搜尋故事、主題或關鍵字" value={query} onChange={event => setQuery(event.target.value)} />
      <button type="button" className="story-filter-toggle" title={filtersOpen ? "收合篩選" : "展開篩選"} aria-label={filtersOpen ? "收合故事篩選" : "展開故事篩選"} aria-expanded={filtersOpen} aria-controls="story-library-filters" onClick={() => setFiltersOpen(value => !value)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M3 6h5m4 0h9M3 12h11m4 0h3M3 18h2m4 0h12M8 3v6m6 0v6M5 15v6" /></svg>
      </button>
    </div>}
    <div className="story-results-area">
      {!selected && <div id="story-library-filters" className="toolkit-filters story-filters" hidden={!filtersOpen}>{filters("故事類型", storyKinds, kinds)}{filters("年齡", storyAges, ages)}{filters("品格主題", storyThemes, themes)}</div>}
      <div ref={bodyRef} className="story-library-body">
        {selected ? <article className="story-reader">
          <button type="button" className="story-back" onClick={() => setSelected(null)}>← 返回故事書架</button>
          <p className="story-reader-meta">{selected.kind} · {selected.age} · {selected.theme} · 約 {selected.minutes} 分鐘</p>
          <div className="story-reader-text">{selected.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
          <section className="story-discussion"><h3>一起聊聊</h3><ol>{selected.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ol><h3>把故事帶進生活</h3><p>{selected.activity}</p></section>
        </article> : <>
          <div className="story-bookshelf">{filtered.map(story => <button type="button" className="story-book" key={story.id} aria-label={`閱讀${story.title}，${story.age}，${story.kind}，${story.theme}`} onClick={() => {
            listScrollTop.current = bodyRef.current?.scrollTop ?? 0;
            setSelected(story);
          }}>
            <span className="story-cover" style={{ backgroundColor: story.color }}><span className="story-cover-kind">{story.kind}</span><span className="story-cover-symbol" aria-hidden="true">{story.symbol}</span><strong>{story.title}</strong><span className="story-cover-footer">親子共讀 · 原創範本</span></span>
            <strong className="story-book-title">{story.title}</strong>
            <span className="story-book-tags"><span>{story.kind}</span><span>{story.age}</span><span>{story.theme}</span></span>
          </button>)}</div>
          {filtered.length === 0 && <div className="toolkit-empty"><p>沒有符合條件的故事</p><p>試試其他分類，或清除搜尋文字。</p></div>}
        </>}
      </div>
    </div>
  </dialog>, document.body);
}

export default function AgeStoryLibrary() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  function close() { setOpen(false); trigger.current?.focus({ preventScroll: true }); }
  return <div className="w-full" onClick={event => event.stopPropagation()}>
    <div className="emotion-toolkit-grid"><button ref={trigger} type="button" className="emotion-toolkit-card story-library-trigger" aria-haspopup="dialog" onClick={() => setOpen(true)}><span>分齡故事書架</span><small className="emotion-toolkit-subtitle">點擊查看內容</small></button></div>
    {open && <StoryDialog onClose={close} />}
  </div>;
}
