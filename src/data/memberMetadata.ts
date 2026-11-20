// Shared prototype identity metadata for account and family profile views.
export const memberMetadata = {
  mom: { memberId: "50010902", createdAt: "2026/10/5" },
  brother: { memberId: "72016885", createdAt: "2026/10/6" },
  sister: { memberId: "72016886", createdAt: "2026/10/6" },
  mouse: { memberId: "85684410", createdAt: "2026/10/7" },
  dad: { memberId: "63102754", createdAt: "2026/10/6" },
  grandpa: { memberId: "77206810", createdAt: "2026/10/8" },
};
export function formatMemberCreatedAt(date: string) {
  const [year, month, day] = date.split("/");
  return year + "年" + month + "月" + day + "日";
}
