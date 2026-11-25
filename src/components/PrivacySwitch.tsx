import "./PrivacySwitch.css";

export default function PrivacySwitch({ label, checked, onChange, ariaLabel, showStatus = true }: {
  label: string;
  checked: boolean;
  onChange: () => void;
  ariaLabel?: string;
  showStatus?: boolean;
}) {
  return <button type="button" role="switch" aria-label={ariaLabel ?? label + "公開"} aria-checked={checked} className="family-privacy" onClick={event => { event.stopPropagation(); onChange(); }}>
    <span aria-hidden="true" className="family-privacy-track"><span /></span>
    {showStatus && <small>{checked ? "公開" : "非公開"}</small>}
  </button>;
}
