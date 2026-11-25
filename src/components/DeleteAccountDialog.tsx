import { useEffect, useRef } from "react";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import "./AccountCredentialDialog.css";

export default function DeleteAccountDialog({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { const dialog = ref.current!; dialog.showModal(); return () => dialog.close(); }, []);
  return <dialog ref={ref} className="account-credential-dialog" role="alertdialog" aria-labelledby="delete-account-title" aria-describedby="delete-account-warning" onCancel={onClose} onClick={event => closeDialogOnBackdrop(event, onClose)}>
    <header><h2 id="delete-account-title">刪除帳號</h2><button type="button" className="credential-close" aria-label="關閉刪除帳號確認" onClick={onClose}>×</button></header>
    <p id="delete-account-warning" className="mb-[20px] rounded-[12px] bg-[#fcedec] p-[12px] text-[16px] leading-[1.8] text-[#b23a36]">刪除帳號將一併刪除所有帳號資訊，以及此帳號下的所有成員與設定。此操作無法復原，確認後將立即登出。</p>
    <div className="flex gap-[12px]"><button autoFocus type="button" className="credential-option" onClick={onClose}>取消</button><button type="button" className="credential-option !bg-[#b23a36] !border-[#b23a36] !text-white" onClick={onConfirm}>確認刪除帳號</button></div>
  </dialog>;
}
