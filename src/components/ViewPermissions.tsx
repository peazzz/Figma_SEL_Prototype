import { createContext, useContext, useEffect, useRef, useState } from "react";
import { closeDialogOnBackdrop } from "./closeDialogOnBackdrop";
import "./AccountCredentialDialog.css";
import "./ViewPermissions.css";

export type ViewGroup = { id: string; label: string; sections: { id: string; label: string; target?: string }[] };
export type ViewSettings = Record<string, Record<string, boolean>>;
export const ViewPermissionsContext = createContext({ groups: [] as ViewGroup[], settings: {} as ViewSettings, update: (_memberId: string, _key: string, _visible: boolean) => {} });
export function useViewPermissions() { return useContext(ViewPermissionsContext); }
export function readViewSettings(): ViewSettings {
  try {
    const saved = JSON.parse(localStorage.getItem("sel-view-permissions") ?? "{}");
    if (saved && typeof saved === "object" && Object.values(saved).every(value => value && typeof value === "object" && Object.values(value).every(flag => typeof flag === "boolean"))) return saved;
  } catch { /* Use visible defaults when storage is unavailable. */ }
  return {};
}

type PermissionMember = { id: string; name: string; photo: string; color?: string };

export default function ViewPermissionsDialog({ memberId, members, onSelectMember, onClose }: { memberId: string; members: PermissionMember[]; onSelectMember: (id: string) => void; onClose: () => void }) {
  const { groups, settings, update } = useViewPermissions();
  const ref = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  useEffect(() => { const dialog = ref.current!; dialog.showModal(); return () => dialog.close(); }, []);
  function eye(key: string, label: string) {
    const visible = settings[memberId]?.[key] !== false;
    return <button type="button" className="view-eye" aria-label={`${visible ? "隱藏" : "顯示"}${label}`} aria-pressed={visible} onClick={() => update(memberId, key, !visible)}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>{!visible && <path d="m3 3 18 18"/>}</svg>
    </button>;
  }
  return <dialog ref={ref} className="account-credential-dialog view-permissions-dialog" aria-labelledby="view-title" onCancel={onClose} onClick={event => closeDialogOnBackdrop(event, onClose)}>
    <header><h2 id="view-title">觀看權限</h2><button type="button" className="credential-close" aria-label="關閉觀看權限" onClick={onClose}>×</button></header>
    <div className="view-member-picker" role="group" aria-label="選擇要設定觀看權限的成員">
      {members.map(member => <button key={member.id} type="button" className="view-member-choice" aria-label={`設定${member.name}的觀看權限`} aria-pressed={member.id === memberId} onClick={() => onSelectMember(member.id)}>
        <img src={member.photo} alt="" width="48" height="48" style={{ backgroundColor: member.color || undefined }} />
        <span>{member.name}</span>
      </button>)}
    </div>
    <div className="view-permissions-list">{groups.map(group => <section key={group.id} className="view-group">
      <div className="view-group-heading"><button type="button" aria-expanded={expanded === group.id} onClick={() => setExpanded(value => value === group.id ? null : group.id)}>{group.label}<svg className="view-group-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></button>{eye(group.id, group.label)}</div>
      {expanded === group.id && <div className="view-items">{group.sections.map(section => <div key={section.id} className="view-item"><span>{section.label}</span>{eye(`${group.id}/${section.id}`, section.label)}</div>)}</div>}
    </section>)}</div>
  </dialog>;
}
