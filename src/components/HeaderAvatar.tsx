import { createContext, useContext } from "react";

export const switchableMembers = [
  { id: "50010902", name: "王媽", image: `${import.meta.env.BASE_URL}assets/6c914.png` },
  { id: "72016885", name: "黃哥", image: `${import.meta.env.BASE_URL}assets/45647.png` },
  { id: "72016886", name: "黃妹", image: `${import.meta.env.BASE_URL}assets/644ba.png` },
  { id: "85684410", name: "鼠鼠", image: `${import.meta.env.BASE_URL}assets/23595.png` },
];
export type SessionMember = (typeof switchableMembers)[number];
export const SessionMemberContext = createContext<SessionMember>(switchableMembers[0]);
export const RemovedAccountMembersContext = createContext({ ids: [] as string[], remove: (_id: string) => {} });
export const AccountLifecycleContext = createContext({ deleteAccount: () => {}, signedOut: false });

export default function HeaderAvatar() {
  const member = useContext(SessionMemberContext);
  const { signedOut } = useContext(AccountLifecycleContext);
  if (signedOut) return <span className="shrink-0 text-[16px] text-[#315e4c]" aria-label="登入狀態">未登入</span>;
  return <button type="button" className="relative shrink-0 size-[45px] cursor-pointer rounded-full" data-name="媽媽" aria-label={`${member.name}，開啟帳號選單`} aria-haspopup="dialog">
    <img alt={`${member.name}的頭像`} className="block size-full rounded-full object-cover" src={member.image} width="45" height="45" />
  </button>;
}
