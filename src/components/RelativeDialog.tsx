import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PrivacySwitch } from "./FamilyDetailsDialog";
import type { Member } from "./FamilyMemberDialog";
import "./RelativeDialog.css";
export type RelativeProfile = Member & { relation: string; birthday: string; gender: string; birthdayPublic: boolean; genderPublic: boolean; color: string; owned?: boolean; ageLabel?: string; profileAvatar?: string; memberId?: string; createdAt?: string };
export const initialRelativeProfiles: RelativeProfile[] = [
  { id: "brother", name: "黃哥", realName: "黃哥", avatar: "ce2f7.png", parent: false, relation: "兒子", birthday: "", gender: "男", birthdayPublic: true, genderPublic: true, color: "#d2cdc4", owned: true, ageLabel: "9歲" },
  { id: "sister", name: "黃妹", realName: "黃妹", avatar: "af3e3.png", parent: false, relation: "女兒", birthday: "", gender: "女", birthdayPublic: true, genderPublic: true, color: "#eeabca", owned: true, ageLabel: "6歲" },
  { id: "mouse", name: "鼠鼠", realName: "鼠鼠", avatar: "8a0f7.png", profileAvatar: "1ca11.png", parent: false, relation: "三線鼠", birthday: "2025-10-10", gender: "男", birthdayPublic: true, genderPublic: true, color: "#abe2ee", owned: true, memberId: "85684410", createdAt: "2026/10/7" },
  { id: "dad", name: "黃爸", realName: "黃爸", avatar: "ddb18.png", parent: true, relation: "丈夫", birthday: "", gender: "男", birthdayPublic: true, genderPublic: true, color: "#e2eeab", owned: false, ageLabel: "39歲" },
  { id: "grandpa", name: "王爺", realName: "王爺", avatar: "cc4df.png", profileAvatar: "0b78b.png", parent: false, relation: "阿公", birthday: "1949-05-05", gender: "男", birthdayPublic: true, genderPublic: true, color: "#eed1ab", owned: false, memberId: "77206810" },
];
const palette = [{ name: "鼠尾草綠", value: "#dce6d5" }, { name: "霧藍", value: "#d6e6eb" }, { name: "暖粉", value: "#eed6df" }, { name: "米杏", value: "#eedfc9" }, { name: "淡紫", value: "#e1dced" }, { name: "暖灰", value: "#dedbd3" }];
export function relativeAge(birthday: string) {
  if (!birthday) return "";
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Taipei" });
  const [y, m, d] = today.split("-").map(Number); const [by, bm, bd] = birthday.split("-").map(Number);
  return (y - by - (m < bm || (m === bm && d < bd) ? 1 : 0)) + "歲";
}
export default function RelativeDialog({ initial, onSave, onClose }: { initial?: RelativeProfile; onSave: (relative: RelativeProfile) => void; onClose: () => void }) {
  const fullEdit = !initial || initial.owned !== false;
  const [draft, setDraft] = useState<RelativeProfile>(() => initial ?? { id: crypto.randomUUID(), name: "", realName: "", avatar: "2bb3b.png", parent: false, relation: "", birthday: "", gender: "", birthdayPublic: true, genderPublic: true, color: palette[0].value, owned: true });
  const [idView, setIdView] = useState(false); const [message, setMessage] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Taipei" });
  useEffect(() => { const dialog = dialogRef.current!; const trigger = document.activeElement as HTMLElement | null; const overflow = document.body.style.overflow; dialog.showModal(); document.body.style.overflow = "hidden"; return () => { dialog.close(); document.body.style.overflow = overflow; trigger?.focus({ preventScroll: true }); }; }, []);
  function update<K extends keyof RelativeProfile>(key: K, value: RelativeProfile[K]) { setDraft(previous => ({ ...previous, [key]: value })); setMessage(""); }
  return createPortal(<dialog ref={dialogRef} className="family-member-dialog family-details-dialog relative-dialog" aria-labelledby="relative-dialog-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => event.stopPropagation()}>
    <header><h2 id="relative-dialog-title">{idView ? "使用成員ID" : initial ? "個人資料" : "新增家人與親戚"}</h2><button type="button" className="member-close" aria-label="關閉親友資料" onClick={onClose}>×</button></header>
    {idView ? <form onSubmit={event => { event.preventDefault(); setMessage("成員 ID 查詢尚未串接會員服務。"); }}><label htmlFor="relative-member-id">成員ID</label><input id="relative-member-id" required/><footer className="member-between"><button type="button" className="member-back" onClick={() => { setIdView(false); setMessage(""); }}>返回</button><button type="submit">確認</button></footer></form> : <form onSubmit={event => { event.preventDefault(); if (!draft.name.trim()) { setMessage("請填寫名稱。"); return; } onSave(!fullEdit && initial ? { ...initial, relation: draft.relation.trim() } : { ...draft, name: draft.name.trim(), realName: draft.name.trim(), relation: draft.relation.trim() }); }}>
      <div className="relative-preview" style={{ backgroundColor: draft.color }}><img src={import.meta.env.BASE_URL + "assets/" + (draft.profileAvatar ?? draft.avatar)} alt="親友頭像" width="150" height="150"/></div>
      {fullEdit && <fieldset className="relative-colors"><legend>卡片背景色</legend><div>{palette.map(color => <button key={color.value} type="button" aria-label={color.name} aria-pressed={draft.color === color.value} style={{ backgroundColor: color.value }} onClick={() => update("color", color.value)}>{draft.color === color.value ? "✓" : ""}</button>)}</div></fieldset>}
      <label htmlFor="relative-name">名稱 {fullEdit && <span className="family-required">*</span>}</label>{fullEdit ? <input id="relative-name" required maxLength={40} value={draft.name} onChange={event => update("name", event.target.value)}/> : <p className="relative-readonly">{initial?.name}</p>}
      <label htmlFor="relative-relation">關係</label><input id="relative-relation" maxLength={30} value={draft.relation} onChange={event => update("relation", event.target.value)}/>
      <label htmlFor="relative-birthday">生日</label>{fullEdit ? <div className="family-detail-row"><input id="relative-birthday" type="date" max={today} value={draft.birthday} onChange={event => update("birthday", event.target.value)}/><PrivacySwitch label="生日" checked={draft.birthdayPublic} onChange={() => update("birthdayPublic", !draft.birthdayPublic)}/></div> : <p className="relative-readonly">{initial?.birthdayPublic ? initial.birthday ? initial.birthday.replace(/-/g, "/") : "未提供" : "非公開"}</p>}
      {fullEdit ? <fieldset className="relative-gender"><legend>性別</legend><div>{["男", "女", "其他"].map(gender => <button key={gender} type="button" aria-pressed={draft.gender === gender} onClick={() => update("gender", gender)}>{gender}</button>)}<PrivacySwitch label="性別" checked={draft.genderPublic} onChange={() => update("genderPublic", !draft.genderPublic)}/></div></fieldset> : <><label>性別</label><p className="relative-readonly">{initial?.genderPublic ? initial.gender || "未提供" : "非公開"}</p></>}
      <button type="submit" className="relative-complete">{initial && fullEdit ? "儲存" : "完成"}</button>
      {!initial && <><div className="family-detail-divider"><img src={import.meta.env.BASE_URL + "assets/fa9c4.svg"} alt=""/></div><button type="button" className="member-id-button relative-complete" onClick={() => { setIdView(true); setMessage(""); }}>使用成員ID</button></>}
    </form>}
    {initial && <div className="relative-metadata">{initial.memberId && <span>成員ID：{initial.memberId}</span>}{initial.createdAt && <span>建立時間：{initial.createdAt}</span>}</div>}
    {message && <p role="status" className="member-message">{message}</p>}
  </dialog>, document.body);
}
