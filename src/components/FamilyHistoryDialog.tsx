import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./FamilyHistoryDialog.css";

function parseRecord(record: string) {
  const match = record.match(/^(\d{4}\/\d{1,2}\/\d{1,2})\s+(\d{1,2}:\d{2}(?::\d{2})?)\s*(.*)$/);
  return match ? { date: match[1], time: match[2], content: match[3] } : { date: "其他紀錄", time: "", content: record };
}
export default function FamilyHistoryDialog({ familyName, records, onClose }: {
  familyName: string; records: string[]; onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const groups = new Map<string, ReturnType<typeof parseRecord>[]>();
  records.forEach(record => { const entry = parseRecord(record); groups.set(entry.date, [...(groups.get(entry.date) ?? []), entry]); });
  useEffect(() => {
    const dialog = dialogRef.current!;
    const trigger = document.activeElement as HTMLElement | null;
    dialog.showModal();
    return () => { dialog.close(); trigger?.focus({ preventScroll: true }); };
  }, []);
  return createPortal(<dialog ref={dialogRef} className="family-member-dialog family-history-dialog" aria-labelledby="family-history-title"
    onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => {
      event.stopPropagation();
      if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose(); }
    }}>
    <header><h2 id="family-history-title">家庭紀錄</h2><button type="button" className="member-close" aria-label="關閉家庭紀錄" onClick={onClose}>×</button></header>
    <div className="family-history-summary"><span>{familyName}</span><span className="family-history-count">{records.length} 筆紀錄</span><p>查看家庭資料與成員的變更歷程</p></div>
    <div className="family-history-list" tabIndex={0} aria-label="家庭變更紀錄">
      {Array.from(groups, ([date, entries]) => <section className="family-history-group" key={date}><h3>{date}</h3><ol>{entries.map((entry, index) => <li key={index}>{entry.time && <time>{entry.time}</time>}<p>{entry.content}</p></li>)}</ol></section>)}
      {!records.length && <div className="family-history-empty"><p>目前尚無家庭紀錄</p><span>家庭資料更新後，紀錄會顯示在這裡。</span></div>}
    </div>
    <footer><button type="button" className="family-history-back" onClick={onClose}><span aria-hidden="true">←</span> 返回家庭資料</button></footer>
  </dialog>, document.body);
}
