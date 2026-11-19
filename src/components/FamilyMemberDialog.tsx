import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { createPortal } from "react-dom";
import "./FamilyMemberDialog.css";

type Screen = "edit" | "add" | "id" | "permissions" | "confirm-demotion";
export type Member = { id: string; name: string; avatar: string; parent: boolean; realName: string; hasEditedName?: boolean };
export const initialMembers: Member[] = [
  { id: "mom", name: "媽媽", avatar: "9cf24.png", parent: true, realName: "王媽", hasEditedName: true },
  { id: "dad", name: "爸爸", avatar: "ad49b.png", parent: true, realName: "黃爸", hasEditedName: true },
  { id: "sister", name: "妹妹", avatar: "644ba.png", parent: false, realName: "黃妹", hasEditedName: true },
  { id: "brother", name: "哥哥", avatar: "45647.png", parent: false, realName: "黃哥", hasEditedName: true },
];
// Stable IDs match the existing family-and-relatives cards, independent of nicknames.
export const initialRelatives: Member[] = [
  initialMembers[3], initialMembers[2],
  { id: "mouse", name: "鼠鼠", avatar: "23595.png", parent: false, realName: "" },
  initialMembers[1],
  { id: "grandpa", name: "阿公", avatar: "cc4df.png", parent: false, realName: "王爺" },
];
const titles: Record<Screen, string> = { edit: "編輯成員", add: "新增成員", id: "使用成員ID", permissions: "編輯權限", "confirm-demotion": "取消自己的家長權限？" };

export function PersonIcon({ minus = false }: { minus?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m2-11h6"/>{!minus && <path d="M20 7v6"/>}</svg>;
}

export default function FamilyMemberDialog({ open, onClose, members, setMembers, extraRelatives = [] }: { extraRelatives?: Member[]; open: boolean; onClose: () => void; members: Member[]; setMembers: Dispatch<SetStateAction<Member[]>> }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [screen, setScreen] = useState<Screen>("edit");
  const [relatives, setRelatives] = useState(initialRelatives);
  const availableRelatives = [...relatives.filter(relative => !extraRelatives.some(extra => extra.id === relative.id)), ...extraRelatives].filter(relative => !members.some(member => member.id === relative.id));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftName, setDraftName] = useState("");
  function saveName() {
    const name = draftName.trim();
    if (name) setMembers(items => items.map(item => item.id === editingId ? { ...item, name, hasEditedName: item.hasEditedName || name !== item.name } : item));
    setEditingId(null);
  }
  function removeMember(member: Member) {
    if (member.parent && members.filter(item => item.parent).length === 1) { setMessage("家庭至少需要保留一位家長。"); return; }
    setRelatives(items => items.map(item => item.id === member.id ? { ...member, parent: false } : item));
    setMembers(items => items.filter(item => item.id !== member.id));
    setEditingId(null); setMessage("");
  }
  const [memberId, setMemberId] = useState("");
  const [message, setMessage] = useState("");
  function navigate(next: Screen) { setScreen(next); setMessage(""); }
  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current!;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    setScreen("edit"); setMessage(""); setEditingId(null);
    dialog.showModal(); document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; trigger?.focus({ preventScroll: true }); };
  }, [open]);
  useEffect(() => { if (open) titleRef.current?.focus({ preventScroll: true }); }, [screen, open]);
  const canManage = members.some(member => member.id === "mom" && member.parent);
  function toggleParent(member: Member) {
    if (!canManage || (member.parent && member.id !== "mom")) return;
    if (member.parent) {
      if (members.filter(item => item.parent).length === 1) {
        setMessage("你是此家庭唯一的家長，請先將另一位成員晉升為家長，再取消自己的權限。"); return;
      }
      navigate("confirm-demotion"); return;
    }
    setMembers(items => items.map(item => item.id === member.id ? { ...item, parent: true } : item));
    setMessage("");
  }
  function confirmDemotion() {
    if (!canManage || !members.some(member => member.id !== "mom" && member.parent)) return;
    setMembers(items => items.map(item => item.id === "mom" ? { ...item, parent: false } : item));
    onClose();
  }
  return createPortal(<dialog ref={dialogRef} className="family-member-dialog" aria-labelledby="family-member-title"
    onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => {
      event.stopPropagation();
      if (event.target === event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
      }
    }}>
    <header><h2 ref={titleRef} tabIndex={-1} id="family-member-title">{titles[screen]}</h2>
      <button className="member-close" type="button" aria-label="關閉成員視窗" onClick={onClose}>×</button></header>
    {screen === "edit" && <>
      <p className="member-caption">家庭成員({members.length})</p>
      {members.map(member => <div className="member-row" key={member.id}>
        <img src={import.meta.env.BASE_URL + "assets/" + member.avatar} alt=""/>
        {editingId === member.id ? <>
          <input autoFocus aria-label={"編輯" + member.name + "名稱"} value={draftName} maxLength={20}
            onChange={event => setDraftName(event.target.value)} onBlur={event => { if (!(event.relatedTarget instanceof HTMLElement && event.relatedTarget.closest(".member-remove"))) saveName(); }}
            onKeyDown={event => { if (event.nativeEvent.isComposing) return; if (event.key === "Enter") { event.preventDefault(); saveName(); } if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); setEditingId(null); } }}/>
          <button type="button" className="member-remove" aria-label={"移除" + member.name}
            onMouseDown={event => event.preventDefault()} onClick={() => removeMember(member)}><PersonIcon minus/></button>
        </> : <>
          <button type="button" className="member-name member-edit-name" aria-label={"編輯" + member.name + "名稱"}
            onClick={() => { setEditingId(member.id); setDraftName(member.name); setMessage(""); }}>{member.name}{member.parent && <small>(家長)</small>}</button>
          {member.hasEditedName && <span className="member-real-name">{member.realName}</span>}
        </>}
      </div>)}
      <footer><button onClick={() => navigate("add")}>新增成員</button><button onClick={() => navigate("permissions")}>編輯權限</button>
        <button className="member-copy" aria-label="複製家庭ID：105962" onClick={async () => {
          try { await navigator.clipboard.writeText("105962"); setMessage("已複製家庭 ID。"); }
          catch { setMessage("無法自動複製，家庭 ID：105962。"); }
        }}>家庭ID：105962 ▢</button></footer>
    </>}
    {screen === "add" && <>
      <p className="member-caption">家人與親戚</p>
      {availableRelatives.map(relative => <div className="member-row" key={relative.id}>
        <img src={import.meta.env.BASE_URL + "assets/" + relative.avatar} alt=""/>
        <span className="member-name">{relative.realName || relative.name}</span>
        <button type="button" className="member-outline" aria-label={"新增" + (relative.realName || relative.name)} onClick={() => {
          setMembers(items => items.some(item => item.id === relative.id) ? items : [...items, { ...relative, name: relative.realName || relative.name, hasEditedName: false, parent: false }]);
          setMessage((relative.realName || relative.name) + "已加入家庭。");
        }}><PersonIcon/>新增</button>
      </div>)}
      {availableRelatives.length === 0 && <p className="member-caption">家人與親戚皆已加入此家庭。</p>}
      <footer className="member-between"><button className="member-back" onClick={() => navigate("edit")}>返回</button><button className="member-id-button" onClick={() => navigate("id")}>使用成員ID</button></footer>
    </>}
    {screen === "id" && <form onSubmit={event => { event.preventDefault(); setMessage("成員 ID 查詢尚未串接會員服務，目前不會新增真實成員。"); }}>
      <label className="member-id-label" htmlFor="family-member-id">成員ID</label>
      <input id="family-member-id" value={memberId} onChange={event => setMemberId(event.target.value)} placeholder="26749753" required pattern=".*\S.*" maxLength={64}/>
      <footer className="member-between"><button type="button" className="member-back" onClick={() => navigate("add")}>返回</button><button type="submit">確認</button></footer>
    </form>}
    {screen === "permissions" && <>
      {members.map(member => <div className="member-row" key={member.id}><img src={import.meta.env.BASE_URL + "assets/" + member.avatar} alt=""/>
        <span className="member-name">{member.name}<small>{member.parent ? "(家長)" : ""}{member.id === "mom" ? "(我)" : ""}</small></span>
        {(!member.parent || member.id === "mom") && <button className="member-outline" aria-label={member.name + (member.parent ? "取消家長" : "晉升家長")} onClick={() => toggleParent(member)}><PersonIcon minus={member.parent}/>{member.parent ? "取消家長" : "晉升家長"}</button>}</div>)}
      <footer><button className="member-back" onClick={() => navigate("edit")}>返回</button></footer>
    </>}
    {screen === "confirm-demotion" && <section aria-label="取消家長權限確認">
      <p className="member-confirm-text">取消後，你仍是此家庭的成員，但將無法編輯成員、管理權限或查看家庭資料管理介面。</p>
      <p className="member-confirm-text">若日後需要恢復家長權限，須請其他家長將你重新晉升。確定要取消自己的家長權限嗎？</p>
      <footer className="member-between"><button type="button" className="member-back" autoFocus onClick={() => navigate("permissions")}>保留</button><button type="button" className="member-remove" onClick={confirmDemotion}>確認取消</button></footer>
    </section>}
    {message && <p className="member-message" role="status">{message}</p>}
  </dialog>, document.body);
}
