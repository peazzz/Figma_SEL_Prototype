import { memberAvatars } from "../memberAvatars";
import { useFamilyProfile } from "../FamilyProfile";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import "./DigitalContract.css";

const screenFreeOptions = ["用餐時", "睡前準備與就寢後", "家庭談話與共讀時", "過馬路與移動時"];
const deviceOptions = ["手機", "平板", "電腦", "電視", "遊戲機"];
const initialContract = {
  family: "", adults: "", children: "", weekdayMinutes: "", weekendMinutes: "",
  weekdayStart: "", weekdayEnd: "", weekendStart: "", weekendEnd: "",
  startDate: "", reviewDate: "", devices: [] as string[],
  screenFree: ["用餐時", "睡前準備與就寢後"],
  purpose: "本約定適用於休閒娛樂使用；學習、視訊聯絡等需求，先與家人討論。",
  safety: "使用適齡內容；下載、購買或分享個人資料前先與家長確認。遇到不舒服的內容或訊息，停止觀看並告訴信任的大人。",
  ending: "結束前先提醒，完成手邊的小段落後關閉裝置，放回共同約定的位置，改做一項無螢幕活動。",
  alternatives: "一起散步、閱讀、畫畫、桌遊或自由遊戲，由孩子參與選擇。",
  repair: "若沒有做到，先了解原因，再一起討論補救及下一次的做法，不羞辱或責罵。特殊情況先討論，於檢視日調整約定。",
  other: "",
};
type Contract = typeof initialContract;

function ContractPreview({ value }: { value: Contract }) {
  const signers = [
    ...value.adults.split("、").filter(Boolean).map((name) => ({ name, role: "家長／照顧者" })),
    ...value.children.split("、").filter(Boolean).map((name) => ({ name, role: "參與成員" })),
  ];
  return (
    <article className="digital-contract-paper" aria-label="家庭數位契約預覽">
      <header><h2>{value.family.trim() ? value.family + "的" : ""}家庭數位契約</h2><p>這是我們共同討論的生活約定，孩子與大人都能提出想法，並在需要時一起調整。</p></header>
      <dl className="contract-meta">{[["家長／照顧者", value.adults], ["孩子／參與成員", value.children], ["開始日期", value.startDate], ["共同檢視日期", value.reviewDate]].filter(([, text]) => text.trim()).map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>
      {(value.weekdayMinutes !== "" || value.weekendMinutes !== "" || value.weekdayStart || value.weekdayEnd || value.weekendStart || value.weekendEnd || value.purpose.trim()) && <section><h3>使用時間與範圍</h3>
        {(value.weekdayMinutes !== "" || value.weekendMinutes !== "" || value.weekdayStart || value.weekdayEnd || value.weekendStart || value.weekendEnd) && <table><thead><tr><th>日期類型</th><th>每日上限</th><th>可使用時段</th></tr></thead><tbody>{[["平日", value.weekdayMinutes, value.weekdayStart, value.weekdayEnd], ["假日", value.weekendMinutes, value.weekendStart, value.weekendEnd]].filter(([, limit, start, end]) => limit !== "" || start || end).map(([label, limit, start, end]) => <tr key={label}><th>{label}</th><td>{limit !== "" ? limit + " 分鐘" : "—"}</td><td>{start && end ? start + "–" + end : start ? start + "起" : end ? "至" + end : "—"}</td></tr>)}</tbody></table>}
        {value.purpose.trim() && <p>{value.purpose}</p>}
      </section>}
      {value.devices.length > 0 && <section><h3>適用裝置</h3><p>{value.devices.join("、")}</p></section>}
      {(value.screenFree.length > 0 || value.safety.trim()) && <section><h3>無螢幕情境與安全</h3>{value.screenFree.length > 0 && <p>無螢幕情境：{value.screenFree.join("、")}</p>}{value.safety.trim() && <p>{value.safety}</p>}</section>}
      {(value.ending.trim() || value.alternatives.trim()) && <section><h3>結束使用與替代活動</h3>{value.ending.trim() && <p>{value.ending}</p>}{value.alternatives.trim() && <p>可以改做：{value.alternatives}</p>}</section>}
      {value.repair.trim() && <section><h3>共同調整</h3><p>{value.repair}</p></section>}
      {value.other.trim() && <section><h3>其他約定</h3><p>{value.other}</p></section>}
      {signers.length > 0 && <footer className="contract-signatures">
        <h3>共同簽署</h3>
        <div className="contract-signature-grid">
          {signers.map(({ name, role }) => (
            <div className="contract-signature-person" key={role + name}>
              <p>{role}：{name}</p>
              <div className="contract-signature-line" aria-label={name + "的簽名欄"}>簽名：</div>
              <p className="contract-signature-date">簽署日期：________________</p>
            </div>
          ))}
        </div>
      </footer>}
    </article>
  );
}

export default function DigitalContract() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [preview, setPreview] = useState(false);
  const { profile } = useFamilyProfile();
  const [value, setValue] = useState<Contract>(() => ({ ...initialContract, family: profile.name, adults: profile.adults.join("、"), children: profile.members.join("、") }));
  const [error, setError] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!open) { trigger.current?.focus({ preventScroll: true }); return; }
    const element = dialog.current!;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => { element.close(); document.body.style.overflow = overflow; };
  }, [open]);
  useEffect(() => {
    if (open) { dialog.current?.scrollTo(0, 0); heading.current?.focus({ preventScroll: true }); }
  }, [open, preview, step]);
  function update<K extends keyof Contract>(key: K, next: Contract[K]) {
    setValue((current) => ({ ...current, [key]: next }));
    setError("");
  }
  function toggle(key: "devices" | "screenFree", option: string) {
    setValue((current) => ({ ...current, [key]: current[key].includes(option) ? current[key].filter((item) => item !== option) : [...current[key], option] }));
  }
  function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 4) { setStep(step + 1); setError(""); return; }
    setPreview(true);
  }
  function memberChoices(key: "adults" | "children", label: string, names: string[]) {
    const selected = value[key].split("、").filter(Boolean);
    return (
      <div className="contract-member-group" role="group" aria-label={label}>
        <p>{label}（可複選）</p>
        <div className="contract-member-options">
          {names.map((name) => (
            <label key={name} className="contract-member-option" data-selected={selected.includes(name)}>
              <input type="checkbox" checked={selected.includes(name)} onChange={() => {
                const next = selected.includes(name) ? selected.filter((item) => item !== name) : [...selected, name];
                update(key, names.filter((item) => next.includes(item)).join("、"));
              }} />
              <img src={import.meta.env.BASE_URL + "assets/" + memberAvatars[name]} alt="" width="44" height="44" />
              <span>{name}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }
  const input = (key: keyof Contract, label: string, type = "text") => (
    <label className="contract-field" key={key}>{label}<input type={type} value={value[key] as string} onChange={(event) => update(key, event.target.value)}
      required maxLength={type === "text" ? 100 : undefined} min={type === "number" ? 0 : undefined} max={type === "number" ? 1440 : undefined} step={type === "number" ? 1 : undefined} /></label>
  );
  const textarea = (key: keyof Contract, label: string) => (
    <label className="contract-field" key={key}>{label}<textarea rows={3} maxLength={1500} value={value[key] as string} onChange={(event) => update(key, event.target.value)} /></label>
  );
  return (
    <div className="digital-contract-entry" onClick={(event) => event.stopPropagation()}>
      <h3>家庭數位契約產生器</h3>
      <p>一起約定使用時間、無螢幕情境與家庭承諾，產生可簽名的契約。</p>
      <button ref={trigger} type="button" className="contract-primary" onClick={() => setOpen(true)} aria-haspopup="dialog">家庭數位契約產生器</button>
      {open && createPortal(
        <dialog ref={dialog} className="digital-contract-dialog" aria-labelledby="digital-contract-title" onCancel={() => setOpen(false)}
          onClick={(event) => { event.stopPropagation(); if (event.target === event.currentTarget) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) setOpen(false); } }}>
          <header className="contract-dialog-header"><div className="contract-title-row"><h2 ref={heading} tabIndex={-1} id="digital-contract-title">{preview ? "契約預覽" : "家庭數位契約產生器"}</h2>{!preview && <p role="status">步驟 {step} / 4：{["家庭與約定日期", "螢幕使用時間", "適用裝置與無螢幕情境", "我們的共同做法"][step - 1]}</p>}</div><button type="button" aria-label="關閉家庭數位契約" onClick={() => setOpen(false)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></header>
          {preview ? <><div className="contract-actions"><button type="button" onClick={() => setPreview(false)}>返回編輯</button><button type="button" className="contract-primary" onClick={() => window.print()}>列印契約／儲存 PDF</button></div><ContractPreview value={value} /></> :
            <form noValidate className="contract-form" onSubmit={generate}>
              {step === 1 && <fieldset><legend>家庭與約定日期</legend><div className="contract-family-identity"><img src={import.meta.env.BASE_URL + "assets/" + profile.image} alt="" width="56" height="56" />{input("family", "家庭名稱")}</div>{memberChoices("adults", "家長／照顧者", profile.adults)}{memberChoices("children", "孩子／參與成員", profile.members)}<div className="contract-field-grid">{input("startDate", "開始日期", "date")}{input("reviewDate", "共同檢視日期", "date")}</div></fieldset>}
              {step === 2 && <fieldset><legend>螢幕使用時間</legend><p className="contract-note">依家庭作息與孩子需要共同決定，以下不預設建議時數。0 分鐘表示當日不安排休閒螢幕時間；可使用時段請填同一天內的範圍。</p><div className="contract-field-grid">{input("weekdayMinutes", "平日每日上限（分鐘）", "number")}{input("weekendMinutes", "假日每日上限（分鐘）", "number")}{input("weekdayStart", "平日可使用開始時間", "time")}{input("weekdayEnd", "平日可使用結束時間", "time")}{input("weekendStart", "假日可使用開始時間", "time")}{input("weekendEnd", "假日可使用結束時間", "time")}</div>{textarea("purpose", "適用範圍與特殊需求")}</fieldset>}
              {step === 3 && <><fieldset><legend>適用裝置（可複選）</legend><div className="contract-checks">{deviceOptions.map((option) => <label key={option}><input type="checkbox" checked={value.devices.includes(option)} onChange={() => toggle("devices", option)} />{option}</label>)}</div></fieldset>
              <fieldset><legend>無螢幕情境（可複選）</legend><div className="contract-checks">{screenFreeOptions.map((option) => <label key={option}><input type="checkbox" checked={value.screenFree.includes(option)} onChange={() => toggle("screenFree", option)} />{option}</label>)}</div>{textarea("safety", "內容、隱私與使用安全")}</fieldset></>}
              {step === 4 && <fieldset><legend>我們的共同做法</legend>{textarea("ending", "時間到時怎麼做")}{textarea("alternatives", "無螢幕替代活動")}{textarea("repair", "未做到約定與特殊情況如何調整")}{textarea("other", "其他約定（選填）")}</fieldset>}
              {error && <p className="contract-error" role="alert">{error}</p>}
              <div className="contract-actions">{step > 1 && <button type="button" onClick={() => { setStep(step - 1); setError(""); }}>上一步</button>}<button type="submit" className="contract-primary">{step < 4 ? "下一步" : "產生契約預覽"}</button></div>
            </form>}
        </dialog>, document.body)}
    </div>
  );
}
