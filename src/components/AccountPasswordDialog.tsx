import { useEffect, useRef, useState } from "react";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import "./AccountCredentialDialog.css";
import "./AccountPasswordDialog.css";

export default function AccountPasswordDialog({ onClose, onRemovePin, ownerEmail = "ccyang@ncu.edu.tw", onBindEmail }: { onClose: () => void; onRemovePin?: () => void; ownerEmail?: string | null; onBindEmail?: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [sent, setSent] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const [showLetter, setShowLetter] = useState(false);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);
  useEffect(() => {
    if (remaining === 0) return;
    const timer = window.setTimeout(() => setRemaining(value => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [remaining]);

  function sendEmail() {
    if (remaining > 0) return;
    setSent(true);
    setRemaining(60);
  }

  return <dialog ref={ref} className="account-credential-dialog account-compact-dialog" aria-labelledby="password-dialog-title" onCancel={onClose} onClick={event => closeDialogOnBackdrop(event, onClose)}>
    <header>
      <h2 id="password-dialog-title">{showLetter ? "信件(示意)" : onRemovePin ? "忘記PIN碼" : "更改密碼"}</h2>
      <button type="button" className="credential-close" aria-label="關閉" onClick={onClose}>×</button>
    </header>
    {!ownerEmail ? <>
      <p className="credential-explanation">尚未綁定Email，請先綁定Email，才能寄送解除PIN碼的信件。</p>
      <button type="button" className="credential-option credential-done" onClick={onBindEmail}>綁定Email</button>
    </> : showLetter ? <div className="password-letter">
      <p>點擊以下鏈結{onRemovePin ? "解除PIN碼" : "更改密碼"}：</p>
      {onRemovePin ? <button type="button" className="underline underline-offset-4 cursor-pointer" onClick={() => { onRemovePin(); onClose(); }}>解除PIN碼</button> : <a href="#/password" onClick={onClose}>更改密碼</a>}
      <p className="password-demo-note">此為示意信件，未實際寄送。</p>
      <button type="button" className="password-return" onClick={() => setShowLetter(false)}>返回</button>
    </div> : <>
      <form className="password-request" onSubmit={event => { event.preventDefault(); sendEmail(); }}>
        <div className="password-send-status" role="status">
          {onRemovePin ? (sent ? "已寄送解除PIN碼信件至" : "將寄送解除PIN碼信件至") : (sent ? "已寄送驗證碼至" : "將寄送驗證碼至")}<br />{ownerEmail}
          {sent && <small>（模擬寄送）</small>}
        </div>
        <button type="submit" className="credential-option credential-done" disabled={remaining > 0}>{!sent ? "寄送信件" : remaining > 0 ? `重新寄送(${remaining})` : "重新寄送"}</button>
        {sent && <button type="button" className="password-return" onClick={() => setShowLetter(true)}>查看信件示意</button>}
      </form>
    </>}
  </dialog>;
}
