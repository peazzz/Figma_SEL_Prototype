import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./FamilyMemberDialog.css";

export default function JoinFamilyDialog({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current!;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog.showModal(); document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; trigger?.focus({ preventScroll: true }); };
  }, []);
  return createPortal(<dialog ref={dialogRef} className="family-member-dialog" aria-labelledby="join-family-title"
    onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => closeDialogOnBackdrop(event, onClose)}>
    <header><h2 id="join-family-title">加入家庭</h2><button type="button" className="member-close" aria-label="關閉加入家庭" onClick={onClose}>×</button></header>
    <label className="member-id-label" htmlFor="join-family-id">家庭ID</label>
    <input id="join-family-id" type="text" inputMode="numeric" autoComplete="off"/>
    <footer className="member-between"><button type="button" className="member-back" onClick={onClose}>返回</button><button type="button">確認</button></footer>
  </dialog>, document.body);
}
