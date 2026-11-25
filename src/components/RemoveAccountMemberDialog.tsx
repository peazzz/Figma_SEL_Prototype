import { useEffect, useRef } from "react";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import "./AccountCredentialDialog.css";

export default function RemoveAccountMemberDialog({ name, onClose, onConfirm }: { name: string; onClose: () => void; onConfirm: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current!;
    dialog.showModal();
    return () => dialog.close();
  }, []);
  return <dialog ref={ref} className="account-credential-dialog" aria-labelledby="remove-member-title" aria-describedby="remove-member-description" onCancel={onClose} onClick={event => closeDialogOnBackdrop(event, onClose)}>
    <header><h2 id="remove-member-title">移除成員</h2><button type="button" className="credential-close" aria-label="關閉移除確認" onClick={onClose}>×</button></header>
    <p id="remove-member-description" className="credential-explanation">確定要從此帳號移除「{name}」嗎？移除後，該成員將不再出現在帳號成員名單中。</p>
    <div className="flex gap-[12px]">
      <button autoFocus type="button" className="credential-option" onClick={onClose}>取消</button>
      <button type="button" className="credential-option !bg-[#b23a36] !text-white !border-[#b23a36]" onClick={onConfirm}>確認移除</button>
    </div>
  </dialog>;
}
