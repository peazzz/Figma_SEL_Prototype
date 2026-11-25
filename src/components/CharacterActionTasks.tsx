import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { characterTasks, type CharacterTask } from "../data/characterTasks";
import { useCategoryFilter } from "../useCategoryFilter";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import "./EmotionToolkits.css";
import "./AgeStoryLibrary.css";
import "./CharacterActionTasks.css";

const themes = [...new Set(characterTasks.map(task => task.theme))];
const previewSize = 4;
const listPageSize = 10;

function TaskDialog({ task, checked, completed, onCheck, onComplete, onReset, onClose }: {
  task: CharacterTask;
  checked: number[];
  completed: boolean;
  onCheck: (index: number) => void;
  onComplete: () => void;
  onReset: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const firstStepRef = useRef<HTMLInputElement>(null);
  const resetRequested = useRef(false);
  useEffect(() => {
    const dialog = ref.current!;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; };
  }, []);
  useEffect(() => {
    if (resetRequested.current) {
      firstStepRef.current?.focus();
      resetRequested.current = false;
    }
  }, [checked, completed]);
  return createPortal(<dialog ref={ref} className="toolkit-dialog action-task-dialog" aria-labelledby="action-task-title" onCancel={onClose} onClick={event => closeDialogOnBackdrop(event, onClose)}>
    <header className="toolkit-dialog-header story-library-header">
      <h2 id="action-task-title">{task.title}</h2>
      <button type="button" aria-label="關閉任務詳情" onClick={onClose}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
    </header>
    <div className="action-task-body">
    <div className="action-task-meta"><span className="action-task-tag">{task.theme}</span><span>{task.duration}</span></div>
    <p className="action-task-description">{task.description}</p>
    <h3>一起試試看</h3>
    <p className="action-task-hint">完成一個步驟，就勾選一次。</p>
    <div className="action-task-steps">{task.steps.map((step, index) => <label key={step}>
      <input ref={index === 0 ? firstStepRef : undefined} type="checkbox" checked={checked.includes(index)} disabled={completed} onChange={() => onCheck(index)} />
      <span>{step}</span>
    </label>)}</div>
    <div className="action-task-reflection"><h3>做完聊一聊</h3><p>{task.question}</p></div>
    </div>
    <div className="action-task-completion">
    <p className="action-task-progress" role="status">{completed ? "任務已完成，謝謝你把品格帶進生活！" : `已完成 ${checked.length} / ${task.steps.length} 個步驟`}</p>
    <div className="action-task-actions">{completed ? <button type="button" onClick={() => { resetRequested.current = true; onReset(); }}>重新開始</button> : <button type="button" className="action-task-primary" disabled={checked.length !== task.steps.length} onClick={onComplete}>標記完成</button>}<button type="button" onClick={onClose}>關閉</button></div>
    </div>
  </dialog>, document.body);
}

export default function CharacterActionTasks() {
  const filter = useCategoryFilter(themes);
  const [expanded, setExpanded] = useState(false);
  const [listPage, setListPage] = useState(1);
  const [selected, setSelected] = useState<CharacterTask | null>(null);
  const [progress, setProgress] = useState<Record<string, number[]>>({});
  const [completed, setCompleted] = useState<string[]>([]);
  const lastDraw = useRef<string | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const filtered = characterTasks.filter(task => filter.matches(task.theme));
  const listPages = Math.ceil(filtered.length / listPageSize);
  const visible = expanded
    ? filtered.slice((listPage - 1) * listPageSize, listPage * listPageSize)
    : filtered.slice(0, previewSize);

  function open(task: CharacterTask, button: HTMLButtonElement) { trigger.current = button; setSelected(task); }
  useEffect(() => {
    if (!selected) trigger.current?.focus({ preventScroll: true });
  }, [selected]);

  function close() { setSelected(null); }
  function draw(button: HTMLButtonElement) {
    const alternatives = filtered.filter(task => task.id !== lastDraw.current);
    const pool = alternatives.length ? alternatives : filtered;
    if (!pool.length) return;
    const task = pool[Math.floor(Math.random() * pool.length)];
    lastDraw.current = task.id;
    open(task, button);
  }

  return <div className="character-action-tasks" onClick={event => event.stopPropagation()}>
    <div className="toolkit-filters action-task-filters"><div role="group" aria-label="任務品格主題"><span>品格主題：</span>{["全部", ...themes].map(value => <button type="button" key={value} aria-pressed={filter.isSelected(value)} onClick={() => { filter.toggle(value); setListPage(1); }}>{value}</button>)}</div></div>
    <div className="action-task-grid" id="character-action-list">{visible.map(task => <button type="button" className="action-task-card" key={task.id} aria-haspopup="dialog" onClick={event => open(task, event.currentTarget)}>
      <span className="action-task-card-title">{task.title}</span>
      {completed.includes(task.id) && <span className="action-task-done" role="img" aria-label="已完成" title="已完成">✓</span>}
      <span className="action-task-tag">{task.theme}</span>
    </button>)}</div>
    {expanded && listPages > 1 && (
      <nav className="story-pagination" aria-label="任務清單分頁">
        <button type="button" disabled={listPage === 1} onClick={() => setListPage(page => page - 1)}>← 上一頁</button>
        <span aria-live="polite">{listPage} / {listPages}</span>
        <button type="button" disabled={listPage === listPages} onClick={() => setListPage(page => page + 1)}>下一頁 →</button>
      </nav>
    )}
    <div className="action-task-footer">
      <p>點選任務查看內容，或依所選主題隨機抽取一項</p>
      {(expanded || filtered.length > previewSize) && (
        <button type="button" aria-expanded={expanded} aria-controls="character-action-list" onClick={() => {
          setListPage(1);
          setExpanded(value => !value);
        }}>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M3 8h10" />
            {!expanded && <path d="M8 3v10" />}
          </svg>
          {expanded ? "收合" : "展開"}
        </button>
      )}
    </div>
    <button type="button" className="action-task-random" onClick={event => draw(event.currentTarget)}>隨機抽取</button>
    {selected && <TaskDialog task={selected} checked={progress[selected.id] ?? []} completed={completed.includes(selected.id)} onClose={close}
      onCheck={index => setProgress(current => { const checked = current[selected.id] ?? []; return { ...current, [selected.id]: checked.includes(index) ? checked.filter(value => value !== index) : [...checked, index] }; })}
      onComplete={() => setCompleted(current => current.includes(selected.id) ? current : [...current, selected.id])}
      onReset={() => { setProgress(current => ({ ...current, [selected.id]: [] })); setCompleted(current => current.filter(id => id !== selected.id)); }} />}
  </div>;
}
