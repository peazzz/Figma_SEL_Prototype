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
const meetingSteps = ["家庭與會議日期", "先說一件感謝的事", "回顧上次的約定", "討論事項與每個人的想法", "共同決定與行動分工"] as const;
const promptSteps = { appreciation: 1, review: 2, topic: 3, voices: 3, decision: 4 };

type Notes = Record<typeof prompts[number]["key"], string>;
type MemberPromptKey = "appreciation" | "voices";
function isMemberPrompt(key: keyof Notes): key is MemberPromptKey {
  return key === "appreciation" || key === "voices";
}
type Action = { id: number; task: string; owner: string; due: string };

const meetingHistory = [
  { date: "2026-11-16", topic: "晚餐時先把手機放在客廳，一起聊聊今天發生的事。" },
  { date: "2026-11-09", topic: "睡前半小時收起裝置，選一本書一起閱讀。" },
  { date: "2026-11-02", topic: "週末安排一次全家戶外活動，輪流提議想去的地方。" },
];

function MeetingHistory() {
  const [expanded, setExpanded] = useState(false);
  return <div className="meeting-history">
    <div className="meeting-history-heading"><h4>上次會議討論事項</h4><button type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>{expanded ? "收起歷史紀錄" : "歷史紀錄"}</button></div>
    <p className="contract-note">{meetingHistory[0].date} · 示範紀錄</p>
    <p>{meetingHistory[0].topic}</p>
    {expanded && <section aria-label="過往會議討論事項" className="meeting-history-list"><h4>過往討論事項（第 3 點）</h4>{meetingHistory.map((meeting) => <article key={meeting.date}><time dateTime={meeting.date}>{meeting.date}</time><p>{meeting.topic}</p></article>)}</section>}
  </div>;
}

export default function FamilyMeeting() {
  const { profile } = useFamilyProfile();
  const members = [...profile.adults, ...profile.members];
  const [participants, setParticipants] = useState(members);
  const [family, setFamily] = useState(profile.name);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  });
  const [nextDate, setNextDate] = useState("");
  const [host, setHost] = useState(profile.adults[0] ?? "");
  const [recorder, setRecorder] = useState(profile.adults[0] ?? "");
  const [notes, setNotes] = useState<Notes>({ appreciation: "", review: "", topic: "", voices: "", decision: "" });
  const [memberNotes, setMemberNotes] = useState<Record<MemberPromptKey, Record<string, string>>>({ appreciation: {}, voices: {} });
  const [actions, setActions] = useState<Action[]>([]);
  const nextId = useRef(1);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
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
  }, [open, preview, step]);
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
    if (date && nextDate && nextDate < date) { setError("下次追蹤日期不能早於會議日期。"); return; }
    if (step < meetingSteps.length - 1) { setError(""); setStep((current) => current + 1); return; }
    if (actions.some((action) => date && action.due && action.due < date)) {
      setError("完成日期不能早於會議日期。"); return;
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
          <header className="contract-dialog-header"><div className="contract-title-row"><h2 ref={heading} tabIndex={-1} id="family-meeting-title">{preview ? "家庭會議紀錄預覽" : "家庭會議模板"}</h2>{!preview && <p className="meeting-step-progress" role="status">步驟 {step + 1} / {meetingSteps.length}：{meetingSteps[step]}</p>}</div><button type="button" aria-label="關閉家庭會議" onClick={() => setOpen(false)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></header>
          {preview ? <>
            <div className="contract-actions"><button type="button" onClick={() => setPreview(false)}>返回編輯</button><button type="button" className="contract-primary" onClick={() => window.print()}>列印會議紀錄／儲存 PDF</button></div>
            <article className="digital-contract-paper" aria-label="家庭會議紀錄">
              <header><h2>{family.trim() ? `${family}的家庭會議紀錄` : "家庭會議紀錄"}</h2></header>
              <dl className="contract-meta"><div><dt>會議日期</dt><dd>{date || "未填寫"}</dd></div><div><dt>參與成員</dt><dd>{participants.join("、") || "未指定"}</dd></div><div><dt>主持人</dt><dd>{host || "未指定"}</dd></div><div><dt>紀錄人</dt><dd>{recorder || "未指定"}</dd></div></dl>
              {prompts.map((prompt) => <section key={prompt.key}><h3>{prompt.title}</h3>{isMemberPrompt(prompt.key) ? participants.map((name) => <div key={name} className="meeting-member-summary"><h4>{name}</h4><p>{memberNotes[prompt.key as MemberPromptKey][name]?.trim() || "（會議時共同填寫）"}</p></div>) : <p>{notes[prompt.key].trim() || "（會議時共同填寫）"}</p>}</section>)}
              <section><h3>6. 誰來做、何時完成</h3>{actions.length ? <div className="meeting-action-summary">{actions.map((action) => <div key={action.id}><p><strong>任務：</strong>{action.task || "（待補充任務）"}</p><p>負責人：{action.owner || "未指定"}　完成日期：{action.due || "未填寫"}</p><p>追蹤：□ 已完成　□ 進行中　□ 需要協助</p></div>)}</div> : <p>尚未安排分工，會議後可再補充。</p>}</section>
              <section><h3>7. 下次一起追蹤</h3><p>追蹤日期：{nextDate || "________________"}</p><p>下次回顧：做得好的地方、遇到的困難，以及需要調整的約定。</p></section>
            </article>
          </> : <form className="contract-form" onSubmit={generate}>
            {step === 0 && <fieldset><legend>家庭與會議日期</legend><div className="contract-family-identity"><img src={import.meta.env.BASE_URL + "assets/" + profile.image} alt="" width="56" height="56" /><label className="contract-field">家庭名稱<input maxLength={100} value={family} onChange={(event) => setFamily(event.target.value)} /></label></div>
              <div className="contract-field-grid"><label className="contract-field">會議日期<input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label><label className="contract-field">下次追蹤日期（選填）<input type="date" value={nextDate} onChange={(event) => setNextDate(event.target.value)} /></label></div>
              <div className="contract-member-group" role="group" aria-label="會議參與成員"><p>參與成員（可複選）</p><div className="contract-member-options">{members.map((name) => <label className="contract-member-option" key={name} data-selected={participants.includes(name)}><input type="checkbox" checked={participants.includes(name)} onChange={() => selectMember(name)} /><img src={import.meta.env.BASE_URL + "assets/" + memberAvatars[name]} alt="" width="44" height="44" /><span>{name}</span></label>)}</div></div>
              <div className="contract-field-grid">{roleSelect("主持人（可輪流）", host, setHost)}{roleSelect("紀錄人", recorder, setRecorder)}</div>
            </fieldset>
            }
            {step > 0 && <fieldset><legend>{meetingSteps[step]}</legend>{prompts.filter((prompt) => promptSteps[prompt.key] === step).map((prompt) => {
              const key = prompt.key;
              return isMemberPrompt(key) ? <section key={key} className="meeting-member-prompt" aria-label={prompt.title}>
                {key === "voices" && <h3>{prompt.title}</h3>}<p className="contract-note">{prompt.hint}</p>
                {participants.length ? <div className="meeting-member-grid">{participants.map((name) => <label className="contract-field meeting-member-editor" key={name}>{name}
                  <textarea aria-label={`${prompt.title}：${name}`} rows={2} maxLength={1500} value={memberNotes[key][name] ?? ""}
                    onChange={(event) => setMemberNotes((current) => ({ ...current, [key]: { ...current[key], [name]: event.target.value } }))} />
                </label>)}</div> : <p className="contract-note">請先選擇參與成員。</p>}
              </section> : <div key={key} className="meeting-member-prompt">
                {key === "review" && <MeetingHistory />}
                <label className="contract-field">{key === "review" ? "本次回顧" : key === "topic" ? prompt.title : null}<span className="contract-note">{prompt.hint}</span><textarea aria-label={prompt.title} rows={3} maxLength={1500} value={notes[key]} onChange={(event) => setNotes((current) => ({ ...current, [key]: event.target.value }))} /></label>
              </div>;
            })}</fieldset>}
            {step === 4 && <fieldset><legend>行動分工</legend><p className="contract-note">把決定變成小步驟，為每件事選一位參與者負責；沒有分工時可直接略過。</p>
              {actions.map((action, index) => <div key={action.id} className="meeting-action-editor">
                <label className="contract-field">任務 {index + 1}<input maxLength={300} value={action.task} onChange={(event) => updateAction(action.id, "task", event.target.value)} /></label>
                <div className="contract-field-grid"><label className="contract-field">負責人 {index + 1}<select aria-label={"負責人 " + (index + 1)} value={action.owner} onChange={(event) => updateAction(action.id, "owner", event.target.value)}><option value="">請選擇參與者</option>{participants.map((name) => <option key={name}>{name}</option>)}</select></label><label className="contract-field">完成日期 {index + 1}<input type="date" value={action.due} onChange={(event) => updateAction(action.id, "due", event.target.value)} /></label></div>
                <button type="button" aria-label={"移除任務 " + (index + 1)} onClick={() => setActions((current) => current.filter((item) => item.id !== action.id))}>移除此項分工</button>
              </div>)}
              <button type="button" onClick={() => setActions((current) => [...current, { id: nextId.current++, task: "", owner: "", due: "" }])}>新增分工</button>
            </fieldset>
            }
            {error && <p role="alert" className="contract-error">{error}</p>}
            <div className="contract-actions">{step > 0 && <button type="button" onClick={() => { setError(""); setStep((current) => current - 1); }}>上一步</button>}<button type="submit" className="contract-primary">{step === 4 ? "產生會議紀錄預覽" : "下一步"}</button></div>
          </form>}
        </dialog>, document.body)}
    </div>
  );
}
