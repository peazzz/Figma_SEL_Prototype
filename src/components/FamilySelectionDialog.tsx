import { useEffect, useRef } from "react";
import "./FamilySelectionDialog.css";

const families = [
  { name: "我的家庭1", image: "/assets/family-choice-home.png" },
  { name: "王家", image: "/assets/family-choice-wang.png" },
];

export default function FamilySelectionDialog({ selected, onSelect, onClose }: {
  selected: string;
  onSelect: (name: string) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current!;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="family-selection-dialog" aria-labelledby="family-selection-title"
      onCancel={onClose} onClick={(event) => {
        event.stopPropagation();
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
        }
      }}>
      <header className="family-selection-header">
        <h2 id="family-selection-title">選擇登入家庭</h2>
        <button type="button" aria-label="關閉家庭選擇" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </header>
      {families.map((family) => (
        <button key={family.name} type="button" className="family-selection-option"
          aria-pressed={selected === family.name} onClick={() => onSelect(family.name)}>
          <img src={family.image} alt="" width="100" height="100" />
          <span>{family.name}</span>
        </button>
      ))}
    </dialog>
  );
}
