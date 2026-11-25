import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useCategoryFilter } from "../useCategoryFilter";
import { personKinds, personRegions, roleModelStories, type RoleModelStory } from "../data/roleModelStories";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import StoryFilterLabel from "./StoryFilterLabel";
import "./EmotionToolkits.css";
import "./AgeStoryLibrary.css";
import "./RoleModelStoryLibrary.css";


function RoleModelDialog({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const listScrollTop = useRef(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selected, setSelected] = useState<RoleModelStory | null>(null);
  const regions = useCategoryFilter(personRegions);
  const kinds = useCategoryFilter(personKinds);
  const filtered = roleModelStories.filter(story =>
    regions.matches(story.region) && kinds.matches(story.kind) &&
    `${story.person} ${story.title} ${story.region} ${story.kind}`.includes(query.trim()));

  useEffect(() => {
    const dialog = dialogRef.current!;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; };
  }, []);
  useEffect(() => {
    bodyRef.current?.scrollTo(0, selected ? 0 : listScrollTop.current);
    titleRef.current?.focus({ preventScroll: true });
  }, [selected]);

  function filters(label: string, options: readonly string[], filter: ReturnType<typeof useCategoryFilter>) {
    return <div role="group" aria-label={label}>
      <StoryFilterLabel label={label} />
      {["全部", ...options].map(value => <button type="button" key={value} aria-pressed={filter.isSelected(value)} onClick={() => filter.toggle(value)}>{value}</button>)}
    </div>;
  }

  return createPortal(<dialog ref={dialogRef} className="toolkit-dialog story-library-dialog" aria-labelledby="role-model-title" onCancel={onClose} onClick={event => closeDialogOnBackdrop(event, onClose)}>
    <header className="toolkit-dialog-header story-library-header">
      <div><h2 ref={titleRef} tabIndex={-1} id="role-model-title">{selected ? selected.title : "偉人與標竿人物故事"}</h2></div>
      <button type="button" aria-label="關閉人物故事" onClick={onClose}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
    </header>
    {!selected && <div className="story-search-row">
      <input className="toolkit-search" type="search" aria-label="搜尋人物故事" placeholder="搜尋人物、故事或分類" value={query} onChange={event => setQuery(event.target.value)} />
      <button type="button" className="story-filter-toggle" title={filtersOpen ? "收合篩選" : "展開篩選"} aria-label={filtersOpen ? "收合人物篩選" : "展開人物篩選"} aria-expanded={filtersOpen} aria-controls="role-model-filters" onClick={() => setFiltersOpen(value => !value)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M3 6h5m4 0h9M3 12h11m4 0h3M3 18h2m4 0h12M8 3v6m6 0v6M5 15v6" /></svg>
      </button>
    </div>}
    <div className="story-results-area">
      {!selected && <div id="role-model-filters" className="toolkit-filters story-filters" hidden={!filtersOpen}>{filters("人物地域", personRegions, regions)}{filters("人物類型", personKinds, kinds)}</div>}
      <div ref={bodyRef} className="story-library-body">
        {selected ? <article className="story-reader">
          <button type="button" className="story-back" onClick={() => setSelected(null)}>← 返回人物故事</button>
          <p className="story-reader-meta">{selected.person} · {selected.region} · {selected.kind}</p>
          <div className="story-reader-text">{selected.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
          <section className="story-discussion"><h3>一起聊聊</h3><ol>{selected.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ol><h3>把故事帶進生活</h3><p>{selected.activity}</p></section>
          <p className="story-reader-source">人物資料參考：<a href={selected.source.url} target="_blank" rel="noreferrer">{selected.source.label} ↗</a></p>
        </article> : <>
          <div className="role-model-grid">{filtered.map(story => <button type="button" className="role-model-card" key={story.id} aria-label={`閱讀${story.person}：${story.title}，${story.region}，${story.kind}`} onClick={() => {
            listScrollTop.current = bodyRef.current?.scrollTop ?? 0;
            setSelected(story);
          }}>
            <img className="role-model-portrait" src={`${import.meta.env.BASE_URL}assets/775c3.png`} alt="" />
            <span className="role-model-caption">
              <strong className="role-model-name">{story.person}</strong>
              <span className="role-model-story-title">{story.title}</span>
            </span>
            <span className="story-book-tags role-model-tags"><span>{story.region}</span><span>{story.kind}</span></span>
          </button>)}</div>
          {filtered.length === 0 && <div className="toolkit-empty" role="status"><p>沒有符合條件的人物故事</p><p>試試其他分類，或清除搜尋文字。</p></div>}
        </>}
      </div>
    </div>
  </dialog>, document.body);
}

export default function RoleModelStoryLibrary() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  function close() { setOpen(false); trigger.current?.focus({ preventScroll: true }); }
  return <div className="w-full" onClick={event => event.stopPropagation()}>
    <div className="emotion-toolkit-grid"><button ref={trigger} type="button" className="emotion-toolkit-card story-library-trigger" aria-haspopup="dialog" onClick={() => setOpen(true)}><span>偉人與標竿人物故事</span><small className="emotion-toolkit-subtitle">點擊查看內容</small></button></div>
    {open && <RoleModelDialog onClose={close} />}
  </div>;
}
