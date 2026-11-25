import { useEffect, useRef, useState } from "react";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import EmailBindingFlow from "./EmailBindingFlow";
import "./AccountCredentialDialog.css";

export default function AccountCredentialDialog({ kind, onClose, onForgotPin, onPinSet, loginEmail = "ccyang@ncu.edu.tw", onUnbindEmail, onBindEmail }: { kind: "email" | "pin" | "reauth" | "changePin" | "switchPin"; onClose: () => void; onForgotPin?: () => void; onPinSet?: () => void; loginEmail?: string; onUnbindEmail?: () => void; onBindEmail?: (email: string) => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [reauthComplete, setReauthComplete] = useState(false);
  const [settingNewPin, setSettingNewPin] = useState(false);
  const [bindingMethod, setBindingMethod] = useState<"email" | "google" | null>(null);
  function bindEmail(email: string) {
    onBindEmail?.(email);
    onClose();
  }
  function unbindEmail() {
    onUnbindEmail?.();
    setReauthComplete(true);
  }
  const currentKind = reauthComplete ? "email" : settingNewPin ? "newPin" : kind;
  const title = { email: "綁定Email", pin: "設定PIN碼", reauth: "解除綁定Email", changePin: "更改PIN碼", newPin: "設定新PIN碼", switchPin: "輸入PIN碼" }[currentKind];
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);
  return <dialog ref={ref} className={`account-credential-dialog${kind === "reauth" ? " account-compact-dialog" : ""}`} aria-labelledby="credential-title" onCancel={onClose} onClick={event => closeDialogOnBackdrop(event, onClose)}>
    {!bindingMethod && <header><h2 id="credential-title">{title}</h2><button type="button" className="credential-close" aria-label="關閉" onClick={onClose}>×</button></header>}
    {currentKind === "reauth" ? <>
      <form onSubmit={event => { event.preventDefault(); unbindEmail(); }}>
        <div className="credential-pin"><span>登入信箱</span><p className="text-[20px] text-[#262d29] break-all">{loginEmail}</p></div>
        <label className="credential-pin">密碼<input autoFocus type="password" autoComplete="current-password" /></label>
        <button type="submit" className="credential-option credential-done">確認</button>
      </form>
      <img className="credential-divider" src={`${import.meta.env.BASE_URL}assets/account-email-divider.svg`} width="389" height="32" alt="" />
      <button type="button" className="credential-option" onClick={unbindEmail}><img src={`${import.meta.env.BASE_URL}assets/account-google.png`} width="24" height="24" alt="" />Google登入</button>
    </> : currentKind === "email" ? bindingMethod ? <EmailBindingFlow method={bindingMethod} onClose={onClose} onComplete={bindEmail} /> : <div className="credential-options">
      <button type="button" className="credential-option" onClick={() => setBindingMethod("email")}><img src={`${import.meta.env.BASE_URL}assets/account-email.png`} width="24" height="24" alt="" />Email登入</button>
      <button type="button" className="credential-option" onClick={() => setBindingMethod("google")}><img src={`${import.meta.env.BASE_URL}assets/account-google.png`} width="24" height="24" alt="" />Google登入</button>
    </div> : <form key={currentKind} onSubmit={event => {
      event.preventDefault();
      if (currentKind === "changePin") setSettingNewPin(true);
      else { onPinSet?.(); onClose(); }
    }}>
      <label className="credential-pin">{currentKind === "changePin" ? "原PIN碼" : currentKind === "newPin" ? "新PIN碼" : "PIN碼"}<input autoFocus type="password" inputMode="numeric" autoComplete="off" /></label>
      {currentKind === "changePin" && onForgotPin && <button type="button" className="mb-[16px] text-[15px] text-[#315e4c] underline underline-offset-2 cursor-pointer" onClick={onForgotPin}>忘記PIN碼？</button>}
      <button type="submit" className="credential-option credential-done">{kind === "switchPin" ? "切換" : kind === "changePin" ? "確認" : "完成"}</button>
      {kind === "switchPin" && onForgotPin && <button type="button" className="mt-[16px] w-full cursor-pointer text-center text-[15px] text-[#315e4c]" onClick={onForgotPin}>忘記PIN碼</button>}
    </form>}
  </dialog>;
}
