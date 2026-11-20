import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FamilyDetailsFields, initialFamilyDetails, isValidFamilyDate, type FamilyDetails } from "./FamilyDetailsDialog";
import { initialMembers, initialRelatives, PersonIcon, type Member } from "./FamilyMemberDialog";
import "./CreateFamilyDialog.css";

export type CreatedFamily = { id: string; createdAt: string; details: FamilyDetails; members: Member[] };
export default function CreateFamilyDialog({ onClose, onCreate, existingNames, extraRelatives = [] }: {
  extraRelatives?: Member[]; onClose: () => void; onCreate: (family: CreatedFamily) => void; existingNames: string[];
}) {
  const [step, setStep] = useState<1 | 2 | "id">(1);
  const [draft, setDraft] = useState<FamilyDetails>(() => ({ ...initialFamilyDetails, name: "", year: "", month: "", day: "", records: [] }));
  const [members, setMembers] = useState<Member[]>([{ ...initialMembers[0], parent: true }]);
  const [memberId, setMemberId] = useState("");
  const [message, setMessage] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const submitting = useRef(false);
  const available = [...initialRelatives.filter(relative => !extraRelatives.some(extra => extra.id === relative.id)), ...extraRelatives].filter(relative => !members.some(member => member.id === relative.id));
  const asset = import.meta.env.BASE_URL + "assets/";
  useEffect(() => {
    const dialog = dialogRef.current!; const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow; dialog.showModal(); document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; trigger?.focus({ preventScroll: true }); };
  }, []);
  useEffect(() => { titleRef.current?.focus({ preventScroll: true }); if (dialogRef.current) dialogRef.current.scrollTop = 0; }, [step]);
  function update<K extends keyof FamilyDetails>(key: K, value: FamilyDetails[K]) { setDraft(previous => ({ ...previous, [key]: value })); setMessage(""); }
  function navigate(next: 1 | 2 | "id") { setStep(next); setMessage(""); }
  function next() {
    if (!draft.name.trim()) { setMessage("請填寫家庭名稱。"); return; }
    if (existingNames.includes(draft.name.trim())) { setMessage("你已加入同名家庭，請使用不同的家庭名稱。"); return; }
    if (!isValidFamilyDate(draft)) { setMessage("請填寫有效的成家日期。"); return; }
    navigate(2);
  }
  function finish() {
    if (submitting.current) return;
    submitting.current = true;
    onCreate({ id: "本機草稿", createdAt: new Date().toLocaleDateString("zh-TW", { timeZone: "Asia/Taipei" }), details: { ...draft, name: draft.name.trim(), records: [new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei", hour12: false }) + " 王媽建立" + draft.name.trim()] }, members });
  }
  return createPortal(<dialog ref={dialogRef} className="family-member-dialog family-details-dialog create-family-dialog" aria-labelledby="create-family-title"
    onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { event.stopPropagation(); if (event.target === event.currentTarget) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) onClose(); } }}>
    <header><h2 id="create-family-title" tabIndex={-1} ref={titleRef}>{step === 1 ? "建立家庭" : step === 2 ? "新增成員" : "使用成員ID"}</h2>{step !== "id" && <span className="create-family-step" aria-label={"步驟" + step + "，共2步"}>{step}/2</span>}<button type="button" className="member-close" aria-label="關閉建立家庭" onClick={onClose}>×</button></header>
    {step === 1 && <form onSubmit={event => { event.preventDefault(); next(); }}>
      <img className="family-details-avatar" src={asset + "5b005.png"} alt="家庭頭像" width="150" height="150"/>
      <FamilyDetailsFields draft={draft} update={update}/>
      <footer className="member-between"><button type="button" className="member-back" onClick={onClose}>取消</button><button type="submit">下一步</button></footer>
    </form>}
    {step === 2 && <>
      <section aria-label="已加入"><h3>已加入</h3>
        {members.map(member => <div className="member-row" key={member.id}>
          <img src={asset + member.avatar} alt=""/><span className="member-name">{member.name}<small>{member.parent ? "(家長)" : ""}{member.id === "mom" ? "(我)" : ""}</small></span>
          {member.id === "mom" ? <span className="create-family-parent">✓ 家長</span> : <div className="create-member-actions">
            <button type="button" className="member-outline" aria-label={member.name + (member.parent ? "取消家長設定" : "晉升家長")} onClick={() => setMembers(items => items.map(item => item.id === member.id ? { ...item, parent: !item.parent } : item))}><PersonIcon/>{member.parent ? "取消家長設定" : "晉升家長"}</button>
            <button type="button" className="member-remove" aria-label={"移除" + member.name} onClick={() => setMembers(items => items.filter(item => item.id !== member.id))}><PersonIcon minus/></button>
          </div>}
        </div>)}
      </section>
      <div className="family-detail-divider"><img src={asset + "fa9c4.svg"} alt=""/></div>
      <section aria-label="尚未加入的家人與親戚"><h3>家人與親戚</h3>
        {available.map(relative => <div className="member-row" key={relative.id}><img src={asset + relative.avatar} alt=""/><span className="member-name">{relative.realName || relative.name}</span><button type="button" className="member-outline" aria-label={"新增" + (relative.realName || relative.name)} onClick={() => setMembers(items => items.some(member => member.id === relative.id) ? items : [...items, { ...relative, name: relative.realName || relative.name, parent: false, hasEditedName: false }])}><PersonIcon/>新增</button></div>)}
        {!available.length && <p className="member-caption">家人與親戚皆已加入。</p>}
      </section>
      <button type="button" className="create-family-complete" onClick={finish}>完成</button>
      <footer className="member-between"><button type="button" className="member-back" onClick={() => navigate(1)}>返回</button><button type="button" className="member-id-button" onClick={() => navigate("id")}>使用成員ID</button></footer>
    </>}
    {step === "id" && <form onSubmit={event => { event.preventDefault(); setMessage("成員 ID 查詢尚未串接會員服務，目前不會新增真實成員。"); }}><label htmlFor="create-member-id">成員ID</label><input id="create-member-id" value={memberId} required maxLength={64} onChange={event => setMemberId(event.target.value)}/><footer className="member-between"><button type="button" className="member-back" onClick={() => navigate(2)}>返回</button><button type="submit">確認</button></footer></form>}
    {message && <p role="status" className="member-message">{message}</p>}
  </dialog>, document.body);
}
