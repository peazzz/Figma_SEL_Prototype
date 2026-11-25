import AssistantWidget from "./components/AssistantWidget";
import HeaderAvatar, { AccountLifecycleContext, RemovedAccountMembersContext, SessionMemberContext, switchableMembers, type SessionMember } from "./components/HeaderAvatar";
import AccountCredentialDialog from "./components/AccountCredentialDialog";
import { ViewPermissionsContext, readViewSettings, type ViewGroup } from "./components/ViewPermissions";
import { accountSections, familySections } from "./components/AccountFamilyNavigation";
import { useSectionNavigation } from "./useSectionNavigation";
import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Academy from "./design-pages/Academy";
import Account from "./design-pages/Account";
import Family from "./design-pages/Family";
import Home from "./design-pages/Home";
import Missions from "./design-pages/Missions";
import ScreenFree from "./design-pages/ScreenFree";
import SelMap from "./design-pages/SelMap";
import Stories from "./design-pages/Stories";
import Videos from "./design-pages/Videos";

type Section = { id: string; label: string; target?: string };
type PageDefinition = {
  id: string;
  label: string;
  component: React.ComponentType;
  sections: Section[];
};

const mainPages: PageDefinition[] = [
  {
    id: "home",
    label: "家庭品格幸福儀表板",
    component: Home,
    sections: [
      { id: "daily", label: "每日記錄" },
      { id: "weekly-goal", label: "本週目標", target: "本週焦點" },
      { id: "schedule", label: "行程排定" },
    ],
  },
  {
    id: "academy",
    label: "家長陪伴學院",
    component: Academy,
    sections: [
      {
        id: "stress-awareness",
        label: "教養情緒與壓力察覺",
        target: "教養情緒與壓力覺察",
      },
      { id: "emotion-coaching", label: "親子情緒教練" },
      { id: "conflict-repair", label: "衝突修復與家庭溝通" },
      { id: "digital-life", label: "健康數位生活與手機不育兒" },
    ],
  },
  {
    id: "stories",
    label: "親子故事與閱讀館",
    component: Stories,
    sections: [
      { id: "age-stories", label: "分齡故事" },
      { id: "role-models", label: "偉人與標竿人物故事" },
      { id: "reading-prompts", label: "導讀教學" },
      { id: "character-actions", label: "品格行動延伸任務" },
    ],
  },
  {
    id: "videos",
    label: "品格影音館",
    component: Videos,
    sections: [
      { id: "sel-scenarios", label: "SEL情境短片" },
      { id: "family-discussion", label: "親子討論影片" },
      { id: "parent-demos", label: "家長示範影片" },
      { id: "offline-tasks", label: "關螢幕後的線下任務" },
    ],
  },
  {
    id: "missions",
    label: "家庭任務館",
    component: Missions,
    sections: [
      { id: "emotion-weather", label: "情緒天氣站" },
      { id: "pause", label: "停一下再說" },
      { id: "role-swap", label: "角色轉轉轉" },
      { id: "family-meeting", label: "家庭小會議" },
      { id: "repair-action", label: "修復小行動" },
      { id: "digital-empathy", label: "數位同理任務" },
    ],
  },
  {
    id: "screen-free",
    label: "無3C家庭日",
    component: ScreenFree,
    sections: [
      { id: "agreement", label: "家庭數位共識" },
      { id: "alternatives", label: "替代活動工具包", target: "替代活動工具" },
      { id: "calendar", label: "家庭日行事曆" },
      { id: "reflection", label: "實踐反思" },
    ],
  },
  {
    id: "sel-map",
    label: "SEL成長地圖",
    component: SelMap,
    sections: [
      { id: "personal-radar", label: "個人SEL雷達圖" },
      { id: "family-radar", label: "家庭SEL練習雷達圖" },
      { id: "mission-history", label: "品格任務歷程" },
      { id: "monthly-story", label: "家庭成長敘事月報" },
      { id: "next-goal", label: "自訂下一步目標" },
    ],
  },
  {
    id: "resources",
    label: "資源與支持",
    component: ResourcesPage,
    sections: [
      { id: "parenting", label: "親職資源" },
      { id: "school-tools", label: "家校合作工具" },
      { id: "crisis-support", label: "危機支持與轉介資訊" },
      { id: "privacy", label: "隱私與資料權利說明" },
    ],
  },
];

const utilityPages: PageDefinition[] = [
  { id: "account", label: "帳號資訊", component: Account, sections: accountSections },
  { id: "family", label: "家庭資訊", component: Family, sections: familySections },
  { id: "password", label: "設定新密碼", component: PasswordPage, sections: [] },
];

const allPages = [...mainPages, ...utilityPages];
const viewGroups: ViewGroup[] = [...utilityPages.filter(page => page.id !== "password"), ...mainPages].map(page => ({ id: page.id, label: page.id === "home" ? "家庭首頁" : page.label, sections: page.id === "home" ? [
  { id: "micro", label: "每日計畫：每日微任務", target: "今日微任務" },
  { id: "mood", label: "每日計畫：情緒檢核", target: "情緒天氣" },
  { id: "recommendations", label: "本週目標：推薦的教材與影音", target: "推薦的教材與影音" },
  { id: "learning", label: "本週目標：學習計畫", target: "本週學習計畫" },
  { id: "offline", label: "行程排定：無3C家庭日", target: "無3C家庭日" },
  { id: "meeting", label: "行程排定：家庭會議", target: "家庭會議" },
] : page.sections }));
const sideRoutes: Record<string, string> = {
  "導覽 / 家庭首頁": "home",
  "導覽 / 家長陪伴學院": "academy",
  "導覽 / 親子故事與閱讀館": "stories",
  "導覽 / 品格影音館": "videos",
  "導覽 / 家庭任務館": "missions",
  "導覽 / 無3C家庭日": "screen-free",
  "導覽 / SEL成長地圖": "sel-map",
  "導覽 / 資源與支持": "resources",
};

function hashFor(page: PageDefinition, sectionId?: string) {
  const section = sectionId;
  return `#/${page.id}${section ? `/${section}` : ""}`;
}

function readRoute() {
  const [pageId = "home", sectionId] = window.location.hash.replace(/^#\/?/, "").split("/");
  const page = allPages.find((candidate) => candidate.id === pageId) ?? mainPages[0];
  const section = page.sections.find((candidate) => candidate.id === sectionId);
  return { page, section };
}

function DesignHeader() {
  return (
    <div
      className="bg-white content-stretch flex gap-[16px] items-center overflow-clip px-[40px] py-[28px] relative shrink-0 w-[1440px]"
      data-name="網站標題與帳號"
    >
      <div
        className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip relative text-[#315e4c]"
        data-name="品牌"
      >
        <p className="flex-[1_0_0] font-['Noto_Serif_JP:Bold'] font-bold leading-[1.5] min-w-px relative text-[26px]">
          (Logo)品格、和諧、幸福心園地
        </p>
        <p className="font-['Noto_Sans_TC:Regular'] text-[14px] whitespace-nowrap">
          <span className="font-['Noto_Sans_TC:Light'] text-black">目前登入家庭：</span>
          <span className="font-['Noto_Sans_TC:Bold'] font-bold">我的家庭1</span>
        </p>
      </div>
      <HeaderAvatar />
    </div>
  );
}

function DesignSidebar({ activePage }: { activePage: string }) {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative shrink-0 w-[264px]"
      data-name="八大主導覽"
    >
      {mainPages.map((page) => (
        <a
          className={`${activePage === page.id ? "bg-[#315e4c] text-white font-['Noto_Sans_TC:Bold'] font-bold" : "text-[#253e38] font-['Noto_Sans_TC:Regular']"} content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]`}
          data-name={Object.entries(sideRoutes).find(([, id]) => id === page.id)?.[0]}
          key={page.id}
        >
          <span className="leading-none text-[16px] text-center whitespace-nowrap">
            {page.label}
          </span>
        </a>
      ))}
    </div>
  );
}

function ResourcesPage() {
  const tabs = mainPages.find((page) => page.id === "resources")!.sections;
  return (
    <div
      className="bg-[#f8f8f2] content-stretch flex flex-col items-start relative size-full"
      data-name="資源與支持 / 架構預覽"
    >
      <DesignHeader />
      <div
        className="bg-[#e8f0eb] content-stretch flex h-[48px] items-start justify-center overflow-clip relative shrink-0 w-full"
        data-name="分頁主題"
      >
        {tabs.map((tab) => (
          <a
            className="content-stretch cursor-pointer flex items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0 text-[#526b60] text-[16px]"
            data-name={tab.label}
            key={tab.id}
          >
            {tab.label}
          </a>
        ))}
      </div>
      <div
        className="content-stretch flex items-start overflow-clip relative shrink-0 w-[1440px]"
        data-name="頁面主體"
      >
        <DesignSidebar activePage="resources" />
        <div className="content-stretch flex flex-col font-['Noto_Sans_TC:Bold'] font-bold gap-[28px] items-start leading-[1.6] overflow-clip p-[40px] relative shrink-0 text-[#253e38] w-[1176px]">
          <p className="text-[32px]">資源與支持</p>
          {tabs.map((tab) => (
            <p className="text-[23px]" data-name={tab.label} key={tab.id}>
              {tab.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function PasswordPage() {
  return (
    <div
      className="bg-[#f8f8f2] content-stretch flex flex-col items-start relative size-full"
      data-name="設定新密碼｜完整頁面"
    >
      <DesignHeader />
      <div
        className="content-stretch flex items-start overflow-clip relative shrink-0 w-[1440px]"
        data-name="頁面主體"
      >
        <DesignSidebar activePage="" />
        <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip p-[40px] relative shrink-0 w-[1176px]">
          <p className="font-['Noto_Sans_TC:Bold'] font-bold leading-[1.5] text-[#253e38] text-[30px]">
            設定新密碼
          </p>
          <form
            className="content-stretch flex flex-col gap-[10px] h-[466px] items-start pt-[20px] relative shrink-0 w-[480px]"
            onSubmit={(event) => event.preventDefault()}
          >
            {["密碼", "確認密碼"].map((label) => (
              <label
                className="font-['Noto_Sans_TC:Regular'] pb-[10px] text-[#315e4c] text-[24px] w-full"
                key={label}
              >
                {label} <span className="text-[#ff191d]">*</span>
                <input
                  className="bg-[#f0f0f0] border border-[#315e4c] h-[39px] mt-[10px] rounded-[5px] w-full"
                  type="password"
                />
              </label>
            ))}
            <button
              className="bg-[#315e4c] border border-black px-[30px] py-[10px] rounded-[12px] text-[18px] text-white"
              type="submit"
            >
              完成
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function AvatarMenu({
  selectedMember,
  onSelectMember,
  onClose,
  onFamily,
  onAccount,
  onLogout,
}: {
  selectedMember: SessionMember;
  onSelectMember: (member: SessionMember) => void;
  onClose: () => void;
  onFamily: () => void;
  onAccount: () => void;
  onLogout: () => void;
}) {
  const [menuTop, setMenuTop] = useState(0);
  useLayoutEffect(() => {
    const header = document.querySelector<HTMLElement>('[data-name="網站標題與帳號"]');
    const page = header?.closest<HTMLElement>(".design-page");
    if (!header || !page) return;
    const updatePosition = () => {
      setMenuTop(header.getBoundingClientRect().bottom - page.getBoundingClientRect().top);
    };
    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);
  const [membersExpanded, setMembersExpanded] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const removedMembers = useContext(RemovedAccountMembersContext);
  const members = switchableMembers.filter(member => !removedMembers.ids.includes(member.id));

  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <>
      <button
        aria-label="關閉帳號選單"
        className="avatar-menu-backdrop"
        onClick={onClose}
        type="button"
      />
      <section
        aria-label="帳號與家庭選單"
        aria-modal="true"
        className="avatar-menu"
        style={{ top: menuTop }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="avatar-menu-close-row">
          <button
            aria-label="關閉選單"
            className="avatar-menu-close"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <img alt="" height="30" src={`${import.meta.env.BASE_URL}assets/8b70b.svg`} width="30" />
          </button>
        </div>
        <img
          alt={`${selectedMember.name}的頭像`}
          className="avatar-menu-profile"
          height="100"
          src={selectedMember.image}
          width="100"
        />
        <p className="avatar-menu-name">{selectedMember.name}</p>
        <div className="avatar-menu-actions">
          <div className="avatar-menu-primary-actions">
            <button onClick={onFamily} type="button">
              <img alt="" height="16" src={`${import.meta.env.BASE_URL}assets/79b00.svg`} width="16" />
              家庭資訊
            </button>
            <button onClick={onAccount} type="button">
              <img alt="" height="16" src={`${import.meta.env.BASE_URL}assets/91706.svg`} width="16" />
              帳號資訊
            </button>
          </div>
          <button
            aria-expanded={membersExpanded}
            className="avatar-menu-members-toggle"
            onClick={() => setMembersExpanded((current) => !current)}
            type="button"
          >
            <span>{membersExpanded ? "隱藏成員" : "選擇成員"}</span>
            <img
              alt=""
              height="24"
              src={membersExpanded ? `${import.meta.env.BASE_URL}assets/e4575.svg` : `${import.meta.env.BASE_URL}assets/bf5a9.svg`}
              width="24"
            />
          </button>
          {membersExpanded && (
            <div className="avatar-menu-members">
              {members.map((member) => (
                <button
                  className={selectedMember.name === member.name ? "is-selected" : ""}
                  aria-pressed={selectedMember.name === member.name}
                  key={member.name}
                  onClick={() => onSelectMember(member)}
                  type="button"
                >
                  <img alt="" height="45" src={member.image} width="45" />
                  <span>{member.name}</span>
                </button>
              ))}
            </div>
          )}
          <button className="avatar-menu-logout" onClick={onLogout} type="button">
            <img alt="" height="16" src={`${import.meta.env.BASE_URL}assets/11d77.svg`} width="16" />
            登出
          </button>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const [activeMember, setActiveMember] = useState(switchableMembers[0]);
  const [pendingMember, setPendingMember] = useState<SessionMember | null>(null);
  const [removedMemberIds, setRemovedMemberIds] = useState<string[]>([]);
  const [viewSettings, setViewSettings] = useState(readViewSettings);
  const [logoutReason, setLogoutReason] = useState<string | null>(null);
  const isOwner = activeMember.id === switchableMembers[0].id;
  const permissions = isOwner ? {} : viewSettings[activeMember.id] ?? {};
  const pageVisible = permissions[route.page.id] !== false && (!route.section || permissions[`${route.page.id}/${route.section.id}`] !== false);
  useEffect(() => { if (logoutReason === "deleted") return; try { localStorage.setItem("sel-view-permissions", JSON.stringify(viewSettings)); } catch { /* Keep in-memory settings. */ } }, [viewSettings, logoutReason]);
  useLayoutEffect(() => {
    const root = document.querySelector(".design-page");
    if (!root) return;
    root.querySelectorAll("[data-view-hidden]").forEach(node => node.removeAttribute("data-view-hidden"));
    function hide(selector: string) { root!.querySelectorAll(selector).forEach(node => node.setAttribute("data-view-hidden", "true")); }
    for (const group of viewGroups) {
      const page = allPages.find(page => page.id === group.id)!;
      if (permissions[group.id] === false) {
        const routeName = Object.entries(sideRoutes).find(([, id]) => id === group.id)?.[0];
        if (routeName) hide(`[data-name="${routeName}"]`);
        root.querySelectorAll(".avatar-menu-primary-actions button").forEach(node => { if (node.textContent?.trim() === group.label) node.setAttribute("data-view-hidden", "true"); });
      }
      if (route.page.id !== group.id) continue;
      for (const section of group.sections) {
        if (permissions[`${group.id}/${section.id}`] !== false) continue;
        const target = section.target ?? section.label;
        hide(`[data-name="分頁主題"] [data-name="${section.label}"]`);
        hide(`[data-name="頁面主體"] [data-name="${target}"]:not([data-name="八大主導覽"] *)`);
        if (group.id === "account") hide(section.id === "preferences" ? '[data-node-id="7:664"],.account-preferences' : '.account-member-picker,[data-node-id="7:596"] > :not([data-node-id="7:664"]):not(.account-preferences)');
        if (group.id === "family" && section.id === "households") hide('[data-name="家庭資訊內容"] > :not([data-name="家庭成員"]):not([data-node-id="7:861"])');
        // Section containers carry their full content, not just their title.
        root.querySelectorAll<HTMLElement>("[data-collapsible-section]").forEach(node => { if (node.dataset.name === target) node.setAttribute("data-view-hidden", "true"); });
      }
      for (const section of page.sections) {
        if (group.id === "home" && group.sections.filter(child => {
          const parent = child.id === "micro" || child.id === "mood" ? "daily" : child.id === "learning" || child.id === "recommendations" ? "weekly-goal" : "schedule";
          return parent === section.id;
        }).every(child => permissions[`home/${child.id}`] === false)) hide(`[data-name="分頁主題"] [data-name="${section.label}"]`);
      }
    }
  }, [route, activeMember, viewSettings, avatarMenuOpen]);
  const [logoutMessage, setLogoutMessage] = useState(false);
  const PageComponent = useMemo(() => route.page.component, [route.page]);

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onHashChange);
    if (!window.location.hash) window.history.replaceState(null, "", hashFor(mainPages[0]));
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useSectionNavigation(route.page.sections, route.section, route);

  function navigate(page: PageDefinition, sectionId?: string) {
    const nextHash = hashFor(page, sectionId);
    if (window.location.hash === nextHash) setRoute(readRoute());
    else window.location.hash = nextHash;
  }

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (logoutReason) {
      event.preventDefault();
      setLogoutMessage(true);
      window.setTimeout(() => setLogoutMessage(false), 3000);
      return;
    }
    const target = event.target as HTMLElement;
    const text = target.textContent?.trim();
    const named = target.closest<HTMLElement>("[data-name]");
    const name = named?.dataset.name;
    const isHeaderAvatar =
      name === "媽媽" && Boolean(named?.closest('[data-name="網站標題與帳號"]'));

    let page: PageDefinition | undefined;
    let sectionId: string | undefined;

    if (isHeaderAvatar) {
      event.preventDefault();
      setAvatarMenuOpen((current) => !current);
      return;
    }

    if (text?.startsWith("目前登入家庭") || text === "我的家庭1")
      page = allPages.find((candidate) => candidate.id === "family");
    else if (name === "品牌") page = mainPages[0];
    else if (name && sideRoutes[name])
      page = mainPages.find((candidate) => candidate.id === sideRoutes[name]);
    else {
      const tab = target.closest<HTMLElement>('[data-name="分頁主題"] > [data-name]');
      if (!tab) return;
      const section = route.page.sections.find((candidate) => candidate.label === tab.dataset.name);
      if (section) {
        page = route.page;
        sectionId = section.id;
      }
    }

    if (!page) return;
    event.preventDefault();
    navigate(page, sectionId);
  }

  function deleteAccount() {
    if (!isOwner) return;
    try {
      localStorage.removeItem("sel-account-email-bindings");
      localStorage.removeItem("sel-view-permissions");
      sessionStorage.setItem("sel-account-session", "deleted");
    } catch { /* The display still signs out if storage is unavailable. */ }
    setAvatarMenuOpen(false);
    setPendingMember(null);
    setViewSettings({});
    setRemovedMemberIds(switchableMembers.map(member => member.id));
    setLogoutReason("deleted");
    window.location.hash = "#/home";
  }

  return (
    <AccountLifecycleContext.Provider value={{ deleteAccount, signedOut: Boolean(logoutReason) }}>
    <ViewPermissionsContext.Provider value={{ groups: viewGroups, settings: viewSettings, update: (memberId, key, visible) => { if (isOwner) setViewSettings(current => ({ ...current, [memberId]: { ...current[memberId], [key]: visible } })); } }}>
    <SessionMemberContext.Provider value={activeMember}>
    <RemovedAccountMembersContext.Provider value={{ ids: removedMemberIds, remove: id => { setRemovedMemberIds(current => [...current, id]); if (activeMember.id === id) setActiveMember(switchableMembers[0]); setViewSettings(current => { const next = { ...current }; delete next[id]; return next; }); } }}>
    <div className="design-page" onClick={handleClick}>
      {logoutReason ? <Home /> : pageVisible ? <PageComponent /> : <><DesignHeader /><div className="flex"><DesignSidebar activePage="" /><p className="p-[40px] text-[#64766f]">此成員未開啟這個區塊的觀看權限，請選擇其他區塊。</p></div></>}
      <footer className="site-footer">
        Copyright © 2026 國立中央大學 學習與教學研究所
      </footer>
      <AssistantWidget />
      {avatarMenuOpen && (
        <AvatarMenu
          selectedMember={activeMember}
          onSelectMember={member => {
            if (member.name === "王媽") {
              setAvatarMenuOpen(false);
              setPendingMember(member);
            } else setActiveMember(member);
          }}
          onAccount={() => {
            setAvatarMenuOpen(false);
            navigate(allPages.find((page) => page.id === "account")!);
          }}
          onClose={() => setAvatarMenuOpen(false)}
          onFamily={() => {
            setAvatarMenuOpen(false);
            navigate(allPages.find((page) => page.id === "family")!);
          }}
          onLogout={() => {
            setAvatarMenuOpen(false);
            setLogoutMessage(true);
            navigate(mainPages[0]);
            window.setTimeout(() => setLogoutMessage(false), 3000);
          }}
        />
      )}
      {pendingMember && <AccountCredentialDialog kind="switchPin" onClose={() => setPendingMember(null)} onPinSet={() => setActiveMember(pendingMember)} onForgotPin={() => { setPendingMember(null); setAvatarMenuOpen(false); navigate(allPages.find(page => page.id === "account")!); }} />}
      {logoutMessage && (
        <div aria-live="polite" className="logout-toast" role="status">
          {logoutReason ? "請先登入帳號" : "已登出"}
        </div>
      )}
    </div>
    </RemovedAccountMembersContext.Provider>
    </SessionMemberContext.Provider>
    </ViewPermissionsContext.Provider>
    </AccountLifecycleContext.Provider>
  );
}
