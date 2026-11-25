import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./DeleteFamilyDialog.css";

export default function DeleteFamilyDialog({ familyName, onCancel, onDelete }: { familyName: string; onCancel: () => void; onDelete: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [confirmation, setConfirmation] = useState("");
  const submitted = useRef(false);
  useEffect(() => {
    const dialog = dialogRef.current!; const trigger = document.activeElement as HTMLElement | null;
    dialog.showModal();
    return () => { dialog.close(); if (trigger?.isConnected) trigger.focus({ preventScroll: true }); };
  }, []);
  return createPortal(<dialog ref={dialogRef} className="family-member-dialog delete-family-dialog" aria-labelledby="delete-family-title" aria-describedby="delete-family-description" onCancel={event => { event.preventDefault(); onCancel(); }} onClick={event => closeDialogOnBackdrop(event, onCancel)}>
    <header><h2 id="delete-family-title">確定刪除「{familyName}」？</h2><button type="button" className="member-close" aria-label="關閉刪除確認" onClick={onCancel}>×</button></header>
    <p id="delete-family-description">刪除後，這個家庭的資料、紀錄與成員關聯將會移除。成員帳號及「家人與親戚」資料不受影響。</p>
    <p className="delete-family-warning">確認後無法在目前頁面復原，請先與其他家庭成員確認。</p>
    <form onSubmit={event => { event.preventDefault(); if (confirmation !== familyName || submitted.current) return; submitted.current = true; onDelete(); }}>
      <label htmlFor="delete-family-confirmation">請輸入完整家庭名稱以確認刪除</label>
      <input id="delete-family-confirmation" autoComplete="off" value={confirmation} onChange={event => setConfirmation(event.target.value)} required/>
      <footer className="member-between"><button type="button" className="member-back" onClick={onCancel}>取消</button><button type="submit" className="family-delete-confirm" disabled={confirmation !== familyName}>確認刪除</button></footer>
    </form>
  </dialog>, document.body);
}
