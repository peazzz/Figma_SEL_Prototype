import DeleteFamilyDialog from "./DeleteFamilyDialog";
import FamilyHistoryDialog from "./FamilyHistoryDialog";
import { taiwanRegions } from "../data/taiwanRegions";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./FamilyMemberDialog.css";
import "./FamilyDetailsDialog.css";

export type FamilyDetails = {
  name: string; city: string; district: string; year: string; month: string; day: string;
  namePublic: boolean; regionPublic: boolean; datePublic: boolean; records: string[];
};
export const initialFamilyDetails: FamilyDetails = {
  name: "我的家庭1", city: "桃園市", district: "中壢區", year: "2015", month: "12", day: "15",
  namePublic: true, regionPublic: false, datePublic: true,
  records: ["2026/10/12 09:08 爸爸更改家庭頭像", "2026/10/8 15:33 媽媽已將爸爸晉升家長", "2026/10/7 10:25 黃爸已將黃爸更名為爸爸", "2026/10/7 10:24 王媽已將黃哥更名為哥哥", "2026/10/7 10:24 王媽已將黃妹更名為妹妹", "2026/10/7 10:24 王媽已將王媽更名為媽媽", "2026/10/6 14:01 新增黃爸", "2026/10/6 13:58 王媽邀請黃爸", "2026/10/6 13:58 王媽新增黃哥", "2026/10/6 13:58 王媽新增黃妹", "2026/10/6 13:57 王媽建立我的家庭1"],
};
const cities = Object.keys(taiwanRegions);
export function PrivacySwitch({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return <button type="button" role="switch" aria-label={label + "公開"} aria-checked={checked} className="family-privacy" onClick={onChange}>
    <span className="family-privacy-track"><span/></span><small>{checked ? "公開" : "非公開"}</small>
  </button>;
}
export function FamilyDetailsFields({ draft, update }: { draft: FamilyDetails; update: <K extends keyof FamilyDetails>(key: K, value: FamilyDetails[K]) => void }) {
  const currentYear = Number(new Intl.DateTimeFormat("en", { year: "numeric", timeZone: "Asia/Taipei" }).format(new Date()));
  const maxYear = Math.max(currentYear, Number(draft.year) || currentYear);
  const years = Array.from({ length: maxYear - 1899 }, (_, index) => String(maxYear - index));
  const daysInMonth = draft.year && draft.month ? new Date(Number(draft.year), Number(draft.month), 0).getDate() : 0;
  function updateDate(key: "year" | "month", value: string) {
    update(key, value);
    const year = key === "year" ? value : draft.year;
    const month = key === "month" ? value : draft.month;
    if (!year || !month || Number(draft.day) > new Date(Number(year), Number(month), 0).getDate()) update("day", "");
  }
  return <>      <label htmlFor="family-detail-name">家庭名稱 <span className="family-required">*</span></label>
      <div className="family-detail-row"><input id="family-detail-name" value={draft.name} maxLength={40} required onChange={event => update("name", event.target.value)}/><PrivacySwitch label="家庭名稱" checked={draft.namePublic} onChange={() => update("namePublic", !draft.namePublic)}/></div>
      <label htmlFor="family-detail-city">住家地區</label>
      <div className="family-detail-row">
        <select id="family-detail-city" aria-label="縣市" value={draft.city} onChange={event => { update("city", event.target.value); update("district", ""); }}>
          <option value="">選擇縣市</option>{cities.map(city => <option key={city} value={city}>{city}</option>)}<option value="其他">其他</option>
        </select>
        <select aria-label="鄉鎮市區" value={draft.district} disabled={!draft.city} required={Boolean(draft.city)} onChange={event => update("district", event.target.value)}>
          <option value="">選擇行政區</option>{(taiwanRegions[draft.city] ?? []).map(district => <option key={district} value={district}>{district}</option>)}<option value="其他">其他</option>
        </select>
        <PrivacySwitch label="住家地區" checked={draft.regionPublic} onChange={() => update("regionPublic", !draft.regionPublic)}/>
      </div>
      <label htmlFor="family-detail-year">成家日期</label>
      <div className="family-detail-row family-date-row">
        <select id="family-detail-year" aria-label="成家年份" required value={draft.year} onChange={event => updateDate("year", event.target.value)}><option value="">年</option>{years.map(year => <option key={year} value={year}>{year}</option>)}</select><span>年</span>
        <select aria-label="成家月份" required value={draft.month} onChange={event => updateDate("month", event.target.value)}><option value="">月</option>{Array.from({ length: 12 }, (_, index) => <option key={index + 1} value={index + 1}>{index + 1}</option>)}</select><span>月</span>
        <select aria-label="成家日期（日）" required disabled={!draft.year || !draft.month} value={draft.day} onChange={event => update("day", event.target.value)}><option value="">日</option>{Array.from({ length: daysInMonth }, (_, index) => <option key={index + 1} value={index + 1}>{index + 1}</option>)}</select><span>日</span>
        <PrivacySwitch label="成家日期" checked={draft.datePublic} onChange={() => update("datePublic", !draft.datePublic)}/>
      </div></>;
}
export function isValidFamilyDate(draft: FamilyDetails) {
  const date = new Date(Number(draft.year), Number(draft.month) - 1, Number(draft.day));
  return date.getFullYear() === Number(draft.year) && date.getMonth() === Number(draft.month) - 1 && date.getDate() === Number(draft.day);
}
export default function FamilyDetailsDialog({ details, editable, actor, onSave, onClose, familyId = "105962", createdAt = "2026/10/6", onDelete }: {
  onDelete?: () => void; familyId?: string; createdAt?: string; details: FamilyDetails; editable: boolean; actor: string; onSave: (details: FamilyDetails) => void; onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [draft, setDraft] = useState(details);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const dialog = dialogRef.current!;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog.showModal(); document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; trigger?.focus({ preventScroll: true }); };
  }, []);
  function update<K extends keyof FamilyDetails>(key: K, value: FamilyDetails[K]) { setDraft(previous => ({ ...previous, [key]: value })); setMessage(""); }
  function saveAndClose() {
    if (!editable) { onClose(); return; }
    if (!formRef.current?.reportValidity()) return;
    if (!draft.name.trim()) { setMessage("請填寫家庭名稱。"); return; }
    if (!isValidFamilyDate(draft)) { setMessage("請填寫有效的成家日期。"); return; }
    const next = { ...draft, name: draft.name.trim(), city: draft.city.trim(), district: draft.district.trim() };
    const keys: (keyof FamilyDetails)[] = ["name", "city", "district", "year", "month", "day", "namePublic", "regionPublic", "datePublic"];
    if (keys.some(key => next[key] !== details[key])) next.records = [new Date().toLocaleString("zh-TW", { hour12: false, timeZone: "Asia/Taipei" }) + " " + actor + "更新家庭資料與公開設定", ...details.records];
    onSave(next); onClose();
  }
  const asset = import.meta.env.BASE_URL + "assets/";
  return <>{createPortal(<dialog ref={dialogRef} className="family-member-dialog family-details-dialog" aria-labelledby="family-details-title"
    onCancel={event => { event.preventDefault(); saveAndClose(); }} onClick={event => { event.stopPropagation(); if (event.target === event.currentTarget) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) saveAndClose(); } }}>
    <header><h2 id="family-details-title">家庭資料</h2><button type="button" className="member-close" aria-label="關閉家庭資料" onClick={saveAndClose}>×</button></header>
    <img className="family-details-avatar" src={asset + (editable ? "e0be9.png" : "5b005.png")} alt="家庭頭像" width="150" height="150"/>
    {editable ? <form ref={formRef} id="family-details-form" onSubmit={event => { event.preventDefault(); saveAndClose(); }}>
      <FamilyDetailsFields draft={draft} update={update}/>
    </form> : <dl className="family-detail-values"><dt>家庭名稱</dt><dd>{details.name}</dd><dt>住家地區</dt><dd>{[details.city, details.district].filter(Boolean).join(" ") || "未填寫"}</dd><dt>成家日期</dt><dd>{details.year}年{details.month}月{details.day}日</dd></dl>}
    <div className="family-detail-meta"><button type="button" className="member-copy" aria-label="複製家庭ID" onClick={async () => { try { await navigator.clipboard.writeText(familyId); setMessage("已複製家庭 ID。"); } catch { setMessage("家庭 ID：" + familyId + "，請手動複製。"); } }}>家庭ID：{familyId} ▢</button><span>建立時間:{createdAt}</span></div>
    <div className="family-detail-divider"><img src={asset + "fa9c4.svg"} alt=""/></div>
    <button type="button" className="family-history-entry" aria-label="查看家庭紀錄" onClick={() => setHistoryOpen(true)}><span><strong>家庭紀錄</strong><small>{details.records.length} 筆紀錄 · 查看家庭變更歷程</small></span><span aria-hidden="true">→</span></button>
    {editable && onDelete && <button type="button" className="family-delete-entry" onClick={() => setDeleteOpen(true)}>刪除家庭</button>}
    {message && <p role="status" className="member-message">{message}</p>}
  </dialog>, document.body)}
    {deleteOpen && editable && onDelete && <DeleteFamilyDialog familyName={details.name} onCancel={() => setDeleteOpen(false)} onDelete={onDelete}/>}
    {historyOpen && <FamilyHistoryDialog familyName={details.name} records={details.records} onClose={() => setHistoryOpen(false)}/>}
  </>;
}
