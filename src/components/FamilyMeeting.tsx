import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { useFamilyProfile } from "../FamilyProfile";
import { memberAvatars } from "../memberAvatars";
import "./DigitalContract.css";
import "./FamilyMeeting.css";

const prompts = [
  { key: "appreciation", title: "1. 先說一件感謝的事", hint: "這週想感謝誰？對方做了什麼，讓你有什麼感受？" },
  { key: "review", title: "2. 回顧上次的約定", hint: "哪些做到了？哪裡需要幫忙？第一次開會可略過。" },
  { key: "topic", title: "3. 今天想討論的事情", hint: "先選一件具體的事，例如用餐滑手機、睡前收裝置或週末活動。" },
  { key: "voices", title: "4. 聽聽每個人的想法", hint: "輪流說自己的感受與需要，先聽完，不急著反駁或給答案。" },
  { key: "decision", title: "5. 我們的共同決定", hint: "寫清楚何時、在哪裡、怎麼做。若還沒共識，記下待討論的問題。" },
] as const;
type Notes = Record<typeof prompts[number]["key"], string>;
type Action = { id: number; task: string; owner: string; due: string };

export default function FamilyMeeting() {
  const { profile } = useFamilyProfile();
  const members = [...profile.adults, ...profile.members];
  const [participants, setParticipants] = useState(members);
  const [family, setFamily] = useState(profile.name);
  const [date, setDate] = useState("");
  const [nextDate, setNextDate] = useState("");
  const [host, setHost] = useState(profile.adults[0] ?? "");
  const [recorder, setRecorder] = useState(profile.adults[0] ?? "");
  const [notes, setNotes] = useState<Notes>({ appreciation: "", review: "", topic: "", voices: "", decision: "" });
  const [actions, setActions] = useState<Action[]>([]);
  const nextId = useRef(1);
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(false);
  const [error, setError] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!open) { trigger.current?.focus({ preventScroll: true }); return; }
    const element = dialog.current!;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => { element.close(); document.body.style.overflow = overflow; };
  }, [open]);
  useEffect(() => {
    if (open) { dialog.current?.scrollTo(0, 0); heading.current?.focus({ preventScroll: true }); }
  }, [open, preview]);
  function selectMember(name: string) {
    setParticipants((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
    if (participants.includes(name)) {
      if (host === name) setHost("");
      if (recorder === name) setRecorder("");
      setActions((current) => current.map((action) => action.owner === name ? { ...action, owner: "" } : action));
    }
    setError("");
  }
  function updateAction(id: number, key: "task" | "owner" | "due", value: string) {
    setActions((current) => current.map((action) => action.id === id ? { ...action, [key]: value } : action));
    setError("");
  }
  function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!family.trim() || !participants.length) { setError("請填寫家庭名稱，並至少選擇一位參與成員。"); return; }
    if (nextDate && nextDate < date) { setError("下次追蹤日期不能早於會議日期。"); return; }
    if (actions.some((action) => !action.task.trim() || !participants.includes(action.owner) || !action.due || action.due < date)) {
      setError("請為每項分工填寫具體任務、參與者與完成日期；完成日期不能早於會議日期。"); return;
    }
    setError(""); setPreview(true);
  }
  function roleSelect(label: string, value: string, onChange: (next: string) => void) {
    return <label className="contract-field">{label}<select aria-label={label} value={value} onChange={(event) => onChange(event.target.value)}><option value="">暫不指定</option>{participants.map((name) => <option key={name}>{name}</option>)}</select></label>;
  }
  return (
    <div className="digital-contract-entry family-meeting-entry" onClick={(event) => event.stopPropagation()}>
      <h3>家庭會議模板</h3>
      <p>輪流表達想法，一起訂下可實踐的家庭約定。</p>

      <button ref={trigger} type="button" className="contract-primary" aria-haspopup="dialog" onClick={() => setOpen(true)}>開始家庭會議</button>
      {open && createPortal(
        <dialog ref={dialog} className="digital-contract-dialog family-meeting-dialog" aria-labelledby="family-meeting-title" onCancel={() => setOpen(false)}
          onClick={(event) => { event.stopPropagation(); if (event.target === event.currentTarget) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) setOpen(false); } }}>
          <header className="contract-dialog-header"><div><h2 ref={heading} tabIndex={-1} id="family-meeting-title">{preview ? "家庭會議紀錄預覽" : "家庭會議模板"}</h2><p>一次聚焦一件事，輪流說、專心聽；需要休息時可以暫停。</p></div><button type="button" aria-label="關閉家庭會議" onClick={() => setOpen(false)}>×</button></header>
          {preview ? <>
            <div className="contract-actions"><button type="button" onClick={() => setPreview(false)}>返回編輯</button><button type="button" className="contract-primary" onClick={() => window.print()}>列印會議紀錄／儲存 PDF</button></div>
            <article className="digital-contract-paper" aria-label="家庭會議紀錄">
              <header><h2>{family}的家庭會議紀錄</h2></header>
              <dl className="contract-meta"><div><dt>會議日期</dt><dd>{date}</dd></div><div><dt>參與成員</dt><dd>{participants.join("、")}</dd></div><div><dt>主持人</dt><dd>{host || "未指定"}</dd></div><div><dt>紀錄人</dt><dd>{recorder || "未指定"}</dd></div></dl>
              {prompts.map((prompt) => <section key={prompt.key}><h3>{prompt.title}</h3><p>{notes[prompt.key].trim() || "（會議時共同填寫）"}</p></section>)}
              <section><h3>6. 誰來做、何時完成</h3>{actions.length ? <div className="meeting-action-summary">{actions.map((action) => <div key={action.id}><p><strong>任務：</strong>{action.task}</p><p>負責人：{action.owner}　完成日期：{action.due}</p><p>追蹤：□ 已完成　□ 進行中　□ 需要協助</p></div>)}</div> : <p>尚未安排分工，會議後可再補充。</p>}</section>
              <section><h3>7. 下次一起追蹤</h3><p>追蹤日期：{nextDate || "________________"}</p><p>下次回顧：做得好的地方、遇到的困難，以及需要調整的約定。</p></section>
            </article>
          </> : <form className="contract-form" onSubmit={generate}>
            <fieldset><legend>本次會議</legend><div className="contract-family-identity"><img src={import.meta.env.BASE_URL + "assets/" + profile.image} alt="" width="56" height="56" /><label className="contract-field">家庭名稱<input required maxLength={100} value={family} onChange={(event) => setFamily(event.target.value)} /></label></div>
              <div className="contract-field-grid"><label className="contract-field">會議日期<input required type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label><label className="contract-field">下次追蹤日期（選填）<input type="date" value={nextDate} onChange={(event) => setNextDate(event.target.value)} /></label></div>
              <div className="contract-member-group" role="group" aria-label="會議參與成員"><p>參與成員（可複選）</p><div className="contract-member-options">{members.map((name) => <label className="contract-member-option" key={name} data-selected={participants.includes(name)}><input type="checkbox" checked={participants.includes(name)} onChange={() => selectMember(name)} /><img src={import.meta.env.BASE_URL + "assets/" + memberAvatars[name]} alt="" width="44" height="44" /><span>{name}</span></label>)}</div></div>
              <div className="contract-field-grid">{roleSelect("主持人（可輪流）", host, setHost)}{roleSelect("紀錄人", recorder, setRecorder)}</div>
            </fieldset>
            <fieldset><legend>輪流分享與共同決定</legend>{prompts.map((prompt) => <label className="contract-field" key={prompt.key}>{prompt.title}<span className="contract-note">{prompt.hint}</span><textarea rows={3} maxLength={1500} value={notes[prompt.key]} onChange={(event) => setNotes((current) => ({ ...current, [prompt.key]: event.target.value }))} /></label>)}</fieldset>
            <fieldset><legend>行動分工</legend><p className="contract-note">把決定變成小步驟，為每件事選一位參與者負責；沒有分工時可直接略過。</p>
              {actions.map((action, index) => <div key={action.id} className="meeting-action-editor">
                <label className="contract-field">任務 {index + 1}<input required maxLength={300} value={action.task} onChange={(event) => updateAction(action.id, "task", event.target.value)} /></label>
                <div className="contract-field-grid"><label className="contract-field">負責人 {index + 1}<select aria-label={"負責人 " + (index + 1)} required value={action.owner} onChange={(event) => updateAction(action.id, "owner", event.target.value)}><option value="">請選擇參與者</option>{participants.map((name) => <option key={name}>{name}</option>)}</select></label><label className="contract-field">完成日期 {index + 1}<input required type="date" value={action.due} onChange={(event) => updateAction(action.id, "due", event.target.value)} /></label></div>
                <button type="button" aria-label={"移除任務 " + (index + 1)} onClick={() => setActions((current) => current.filter((item) => item.id !== action.id))}>移除此項分工</button>
              </div>)}
              <button type="button" onClick={() => setActions((current) => [...current, { id: nextId.current++, task: "", owner: "", due: "" }])}>新增分工</button>
            </fieldset>
            {error && <p role="alert" className="contract-error">{error}</p>}
            <div className="contract-actions"><button type="submit" className="contract-primary">產生會議紀錄預覽</button></div>
          </form>}
        </dialog>, document.body)}
    </div>
  );
}
