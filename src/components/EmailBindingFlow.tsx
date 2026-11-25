import { useEffect, useState } from "react";

type Props = {
  method: "email" | "google";
  onClose: () => void;
  onComplete: (email: string) => void;
};

export default function EmailBindingFlow({ method, onClose, onComplete }: Props) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState(method === "google" ? "new.google@example.com" : "");
  const [remaining, setRemaining] = useState(0);
  const [error, setError] = useState("");
  const boundEmail = email.trim() || "new.email@example.com";
  const title = step === 1 ? "綁定Email" : step === 2 ? "驗證碼輸入" : "設定密碼";

  useEffect(() => {
    if (remaining === 0) return;
    const timer = window.setTimeout(() => setRemaining(value => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [remaining]);

  function sendCode() {
    setRemaining(60);
    setStep(2);
  }

  return <>
    <header>
      <h2 id="credential-title">{title}</h2>
      {method === "email" && <span className="credential-step" aria-label={`步驟 ${step}，共 3 步`}>{step}/3</span>}
      <button type="button" className="credential-close" aria-label="關閉" onClick={onClose}>×</button>
    </header>
    <form key={step} onSubmit={event => {
      event.preventDefault();
      if (step === 1) sendCode();
      else if (step === 2) {
        if (method === "google") onComplete(boundEmail);
        else setStep(3);
      } else {
        const fields = new FormData(event.currentTarget);
        if (fields.get("password") !== fields.get("confirmPassword")) {
          setError("兩次輸入的密碼不一致");
          return;
        }
        onComplete(boundEmail);
      }
    }}>
      {step === 1 && <>
        {method === "google" ? <p className="credential-explanation">將寄送驗證碼至<br />{boundEmail}</p> :
          <label className="credential-pin">Email<input autoFocus type="email" autoComplete="email" placeholder="例如：new@example.com" value={email} onChange={event => setEmail(event.target.value)} /></label>}
        <button type="submit" className="credential-option credential-done">寄送驗證碼</button>
      </>}
      {step === 2 && <>
        <p className="credential-explanation" role="status">已寄送驗證碼至<br />{boundEmail}<br /><small>（模擬寄送）</small></p>
        <label className="credential-pin">驗證碼<input autoFocus inputMode="numeric" autoComplete="one-time-code" /></label>
        <button type="submit" className="credential-option credential-done">確認</button>
        <div className="credential-flow-actions">
          <button type="button" disabled={remaining > 0} onClick={sendCode}>{remaining > 0 ? `重新寄送(${remaining})` : "重新寄送"}</button>
          {method === "email" && <button type="button" onClick={() => { setStep(1); setRemaining(0); }}>更改Email</button>}
        </div>
      </>}
      {step === 3 && <>
        <label className="credential-pin">密碼<input autoFocus name="password" type="password" autoComplete="new-password" onChange={() => setError("")} /></label>
        <label className="credential-pin">確認密碼<input name="confirmPassword" type="password" autoComplete="new-password" onChange={() => setError("")} /></label>
        {error && <p className="credential-flow-error" role="alert">{error}</p>}
        <button type="submit" className="credential-option credential-done">完成綁定</button>
      </>}
    </form>
  </>;
}
