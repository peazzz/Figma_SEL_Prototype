export const accountSections = [
  { id: "profile", label: "帳號資訊" },
  { id: "preferences", label: "偏好設定" },
];

export const familySections = [
  { id: "households", label: "家庭資訊", target: "家庭資訊" },
  { id: "members", label: "家人與親戚", target: "家庭成員" },
];

export default function AccountFamilyNavigation({ sections }: {
  sections: { id: string; label: string }[];
}) {
  return (
    <nav className="account-family-navigation bg-[#e8f0eb] flex shrink-0 w-full" data-name="分頁主題" aria-label="頁面內容導覽">
      {sections.map((section) => (
        <button key={section.id} type="button" data-name={section.label} className="flex shrink-0 cursor-pointer items-center justify-center bg-transparent border-0 text-[16px]">
          <p>{section.label}</p>
        </button>
      ))}
    </nav>
  );
}
