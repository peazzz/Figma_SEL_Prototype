import { useEffect, useId, useRef, useState } from "react";
import "./AssistantWidget.css";

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const panelId = useId();
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus({ preventScroll: true });
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !wrapperRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.stopPropagation();
        setOpen(false);
        triggerRef.current?.focus({ preventScroll: true });
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} onClick={(event) => event.stopPropagation()}>
      {open && (
        <section ref={panelRef} id={panelId} className="assistant-panel" role="dialog" aria-labelledby={titleId} tabIndex={-1}>
          <h2 id={titleId}>AI助手</h2>
          <button type="button" className="assistant-panel-primary" disabled title="今日摘要功能尚未啟用">生成今日摘要</button>
          <button type="button" className="assistant-panel-secondary" disabled title="聊天功能尚未啟用">開始聊天</button>
        </section>
      )}
      <button ref={triggerRef} className="floating-assistant" type="button" aria-label="AI 小幫手" title="AI 小幫手" data-name="AI"
        aria-expanded={open} aria-controls={open ? panelId : undefined} aria-haspopup="dialog" onClick={() => setOpen((value) => !value)}>
        <img src={`${import.meta.env.BASE_URL}assets/74ef4.png`} alt="" width="50" height="50" />
      </button>
    </div>
  );
}
