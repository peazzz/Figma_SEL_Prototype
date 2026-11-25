import PrivacySwitch from "./PrivacySwitch";

export default function AccountPinField({ hasPin, required, onToggle, onEdit }: {
  hasPin: boolean;
  required: boolean;
  onToggle: () => void;
  onEdit: () => void;
}) {
  return <div className="account-member-field">
    <span>PIN碼</span>
    <div className="flex items-center gap-[10px]">
      <p>{hasPin ? "切換成員時輸入PIN碼" : "無PIN碼"}</p>
      {hasPin && <PrivacySwitch label="切換成員時輸入PIN碼" ariaLabel="切換成員時輸入PIN碼" checked={required} onChange={onToggle} showStatus={false} />}
      <button type="button" className="ml-auto shrink-0 cursor-pointer text-[16px] font-normal text-[#315e4c] underline underline-offset-2" onClick={event => { event.stopPropagation(); onEdit(); }}>{hasPin ? "更改PIN碼" : "設定PIN碼"}</button>
    </div>
  </div>;
}
