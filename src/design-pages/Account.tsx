import { memberMetadata, formatMemberCreatedAt } from "../data/memberMetadata";
import { useState } from "react";
import AccountFamilyNavigation, { accountSections } from "../components/AccountFamilyNavigation";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const img = `${assetPathPrefix}/9cf24.png`;
const img1 = `${assetPathPrefix}/ce491.png`;
const img2 = `${assetPathPrefix}/91857.png`;
const img3 = `${assetPathPrefix}/499df.png`;
const img4 = `${assetPathPrefix}/c5014.png`;
const img5 = `${assetPathPrefix}/d4e66.png`;
const img6 = `${assetPathPrefix}/25dc6.png`;
const imgEdit = `${assetPathPrefix}/05f94.svg`;
const imgCopy = `${assetPathPrefix}/76abb.svg`;
const imgIcon = `${assetPathPrefix}/56ab4.svg`;
const imgVector2 = `${assetPathPrefix}/b249c.svg`;
const imgCheck = `${assetPathPrefix}/707ef.svg`;
const imgVector4 = `${assetPathPrefix}/95730.svg`;

type SwitchProps = {
  className?: string;
  icon?: "False";
  selected?: boolean;
  state?: "Enabled";
};

function Switch({ className, icon = "False", selected = true, state = "Enabled" }: SwitchProps) {
  return (
    <div
      className={
        className ||
        "bg-[#6750a4] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] w-[52px]"
      }
      data-node-id="7:67"
    >
      <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="7:68" data-name="Handle">
        <div
          className="-translate-y-1/2 absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2"
          data-node-id="7:69"
          data-name="Target"
        >
          <div
            className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0"
            data-node-id="7:70"
            data-name="State-layer"
          >
            <div
              className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0"
              data-node-id="7:71"
              data-name="Handle shape"
            >
              <div
                className="relative rounded-[23px] shrink-0 size-[2px]"
                data-node-id="7:72"
                data-name="Container"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const accountMembers = [
  { name: "王媽", birthday: "1989年3月24日", gender: "女性", id: memberMetadata.mom.memberId, avatar: img6, photo: img6, created: formatMemberCreatedAt(memberMetadata.mom.createdAt) },
  { name: "黃哥", birthday: "2017年3月9日", gender: "男性", id: memberMetadata.brother.memberId, avatar: import.meta.env.BASE_URL + "assets/ce2f7.png", photo: import.meta.env.BASE_URL + "assets/ce2f7.png", created: formatMemberCreatedAt(memberMetadata.brother.createdAt) },
  { name: "黃妹", birthday: "2020年8月12日", gender: "女性", id: memberMetadata.sister.memberId, avatar: import.meta.env.BASE_URL + "assets/af3e3.png", photo: import.meta.env.BASE_URL + "assets/af3e3.png", created: formatMemberCreatedAt(memberMetadata.sister.createdAt) },
  { name: "鼠鼠", birthday: "2025年10月10日", gender: "男性", id: memberMetadata.mouse.memberId, avatar: import.meta.env.BASE_URL + "assets/1ca11.png", photo: import.meta.env.BASE_URL + "assets/1ca11.png", created: formatMemberCreatedAt(memberMetadata.mouse.createdAt) },
];
export default function Component() {
  const [preferences, setPreferences] = useState({ answer: "家長一同作答", member: "固定為上次登入成員", family: "固定為上次登入家庭" });
  const [selectedMember, setSelectedMember] = useState(0);
  const [members, setMembers] = useState(accountMembers);
  const member = members[selectedMember];
  const [editing, setEditing] = useState<"name" | "birthday" | "gender" | null>(null);
  const [draft, setDraft] = useState("");
  function beginEdit(field: "name" | "birthday" | "gender") {
    setEditing(field);
    setDraft(field === "birthday" ? member.birthday.replace(/年|月/g, "-").replace("日", "").split("-").map((part, index) => index ? part.padStart(2, "0") : part).join("-") : member[field]);
  }
  function saveEdit() {
    if (!editing || !draft.trim()) return;
    const value = editing === "birthday" ? draft.split("-").map(Number).map((part, index) => part + ["年", "月", "日"][index]).join("") : draft.trim();
    setMembers(items => items.map((item, index) => index === selectedMember ? { ...item, [editing]: value } : item));
    setEditing(null);
  }
  return (
    <div
      className="bg-[#f8f8f2] content-stretch flex flex-col items-start relative size-full"
      data-node-id="7:564"
      data-name="帳號資訊"
    >
      <div
        className="bg-white content-stretch flex gap-[16px] items-center overflow-clip px-[40px] py-[28px] relative shrink-0 w-[1440px]"
        data-node-id="7:565"
        data-name="網站標題與帳號"
      >
        <div
          className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip relative text-[#315e4c]"
          data-node-id="7:566"
          data-name="品牌"
        >
          <p
            className="flex-[1_0_0] font-['Noto_Serif_JP:Bold'] font-bold leading-[1.5] min-w-px relative text-[26px]"
            data-node-id="7:567"
          >
            (Logo)品格、和諧、幸福心園地
          </p>
          <div
            className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap"
            data-node-id="7:568"
          >
            <p>
              <span className="font-['Noto_Sans_TC:Light'] font-light leading-[1.55] text-black">
                目前登入家庭：
              </span>
              <span className="font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55]">我的家庭1</span>
            </p>
          </div>
        </div>
        <div className="relative shrink-0 size-[45px]" data-node-id="7:569" data-name="媽媽">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            height="45"
            src={img}
            width="45"
          />
        </div>
      </div>
      <AccountFamilyNavigation sections={accountSections} />
      <div
        className="content-stretch flex items-start overflow-clip relative shrink-0 w-[1440px]"
        data-node-id="7:571"
        data-name="頁面主體"
      >
        <div
          className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative shrink-0 w-[264px]"
          data-node-id="7:572"
          data-name="八大主導覽"
        >
          <div
            className="content-stretch flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:573"
            data-name="導覽 / 家庭首頁"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:573;515:8823"
            >
              家庭品格幸福儀表板
            </p>
          </div>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:574"
            data-name="導覽 / 家長陪伴學院"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:574;515:8823"
            >
              家長陪伴學院
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:575"
            data-name="導覽 / 親子故事與閱讀館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:575;515:8823"
            >
              親子故事與閱讀館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:576"
            data-name="導覽 / 品格影音館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:576;515:8823"
            >
              品格影音館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:577"
            data-name="導覽 / 家庭任務館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:577;515:8823"
            >
              家庭任務館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:578"
            data-name="導覽 / 無3C家庭日"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:578;515:8823"
            >
              無3C家庭日
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:579"
            data-name="導覽 / SEL成長地圖"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:579;515:8823"
            >
              SEL成長地圖
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:580"
            data-name="導覽 / 資源與支持"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:580;515:8823"
            >
              資源與支持
            </p>
          </a>
        </div>
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[40px] relative shrink-0 w-[1176px]"
          data-node-id="7:581"
          data-name="帳號資訊內容"
        >
          <div
            className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0"
            data-node-id="7:582"
            data-name="帳號資訊"
          >
            <div
              className="content-stretch flex gap-[16px] items-center leading-[1.5] overflow-clip relative shrink-0 text-[#253e38] w-[1096px]"
              data-node-id="7:583"
              data-name="帳號資訊"
            >
              <p
                className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[26px] whitespace-nowrap"
                data-node-id="7:584"
              >
                帳號資訊
              </p>
              <p
                className="flex-[1_0_0] font-['Noto_Sans_TC:Light'] font-light min-w-px relative text-[18px] text-right"
                data-node-id="7:585"
              >
                4/6
              </p>
            </div>
            <div
              className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#262d29] text-[18px] whitespace-nowrap"
              data-node-id="7:586"
            >
              <p className="leading-[1.55]">ccyang@ncu.edu.tw</p>
            </div>
          </div>
          <div className="account-member-picker" aria-label="帳號成員">
            {members.map((person, index) => <button type="button" key={person.id} aria-label={"查看" + person.name + "帳號資訊"} aria-pressed={selectedMember === index} onClick={event => { event.stopPropagation(); setSelectedMember(index); }}><img src={person.photo} alt="" width="120" height="120"/>{index === 0 && <span>帳號持有人</span>}</button>)}
            <div className="account-member-add"><img src={img5} alt="新增成員" width="120" height="120"/></div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0 w-full"
            data-node-id="7:596"
          >
            <div
              className="bg-white content-stretch flex items-start px-[16px] py-[10px] relative rounded-[10px] shrink-0 w-full"
              data-node-id="7:600"
            >
              <div
                className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
                data-node-id="7:601"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                  data-node-id="7:602"
                >
                  <p className="leading-[1.55]">名稱</p>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                  data-node-id="7:603"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[18px] whitespace-nowrap"
                    data-node-id="7:604"
                  >
                    <p className="leading-[1.55]">{member.name}</p>
                  </div>
                  <button type="button" aria-label="編輯名稱" onClick={event => { event.stopPropagation(); beginEdit("name"); }}
                    className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative shrink-0"
                    data-node-id="7:605"
                    data-name="儲存"
                  >
                    <div
                      className="relative shrink-0 size-[20px]"
                      data-node-id="7:606"
                      data-name="Edit"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgEdit}
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="relative shrink-0 size-[70px]" data-node-id="7:609" data-name="頭像">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  height="70"
                  src={member.avatar}
                  width="70"
                />
              </div>
            </div>
            <div
              className="bg-white content-stretch flex flex-col items-start px-[16px] py-[10px] relative rounded-[10px] shrink-0 w-full"
              data-node-id="7:610"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                data-node-id="7:611"
              >
                <p className="leading-[1.55]">生日</p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:612"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[18px] whitespace-nowrap"
                  data-node-id="7:613"
                >
                  <p className="leading-[1.55]">{member.birthday}</p>
                </div>
                <button type="button" aria-label="編輯生日" onClick={event => { event.stopPropagation(); beginEdit("birthday"); }}
                  className="content-stretch cursor-pointer flex flex-[1_0_0] items-center min-w-px overflow-clip relative"
                  data-node-id="7:614"
                  data-name="儲存"
                >
                  <div
                    className="relative shrink-0 size-[20px]"
                    data-node-id="7:615"
                    data-name="Edit"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgEdit}
                    />
                  </div>
                </button>
                <button
                  className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0"
                  data-node-id="7:618"
                  data-name="切換公開按鈕"
                >
                  <div
                    className="bg-[#6750a4] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]"
                    data-node-id="I7:618;2045:1149"
                    data-name="Switch"
                  >
                    <div
                      className="flex-[1_0_0] h-full min-w-px relative"
                      data-node-id="I7:618;2045:1150"
                      data-name="Handle"
                    >
                      <div
                        className="-translate-y-1/2 absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2"
                        data-node-id="I7:618;2045:1151"
                        data-name="Target"
                      >
                        <div
                          className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0"
                          data-node-id="I7:618;2045:1152"
                          data-name="State-layer"
                        >
                          <div
                            className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0"
                            data-node-id="I7:618;2045:1153"
                            data-name="Handle shape"
                          >
                            <div
                              className="relative rounded-[23px] shrink-0 size-[2px]"
                              data-node-id="I7:618;2045:1154"
                              data-name="Container"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Light'] font-light leading-[1.55] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap"
                    data-node-id="I7:618;2045:1144"
                  >
                    公開
                  </p>
                </button>
              </div>
            </div>
            <div
              className="bg-white content-stretch flex flex-col items-start px-[16px] py-[10px] relative rounded-[10px] shrink-0 w-full"
              data-node-id="7:619"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                data-node-id="7:620"
              >
                <p className="leading-[1.55]">性別</p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:621"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[18px] whitespace-nowrap"
                  data-node-id="7:622"
                >
                  <p className="leading-[1.55]">{member.gender}</p>
                </div>
                <button type="button" aria-label="編輯性別" onClick={event => { event.stopPropagation(); beginEdit("gender"); }}
                  className="content-stretch cursor-pointer flex flex-[1_0_0] items-center min-w-px overflow-clip relative"
                  data-node-id="7:623"
                  data-name="儲存"
                >
                  <div
                    className="relative shrink-0 size-[20px]"
                    data-node-id="7:624"
                    data-name="Edit"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgEdit}
                    />
                  </div>
                </button>
                <button
                  className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0"
                  data-node-id="7:627"
                  data-name="切換公開按鈕"
                >
                  <div
                    className="bg-[#6750a4] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]"
                    data-node-id="I7:627;2045:1149"
                    data-name="Switch"
                  >
                    <div
                      className="flex-[1_0_0] h-full min-w-px relative"
                      data-node-id="I7:627;2045:1150"
                      data-name="Handle"
                    >
                      <div
                        className="-translate-y-1/2 absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2"
                        data-node-id="I7:627;2045:1151"
                        data-name="Target"
                      >
                        <div
                          className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0"
                          data-node-id="I7:627;2045:1152"
                          data-name="State-layer"
                        >
                          <div
                            className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0"
                            data-node-id="I7:627;2045:1153"
                            data-name="Handle shape"
                          >
                            <div
                              className="relative rounded-[23px] shrink-0 size-[2px]"
                              data-node-id="I7:627;2045:1154"
                              data-name="Container"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Light'] font-light leading-[1.55] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap"
                    data-node-id="I7:627;2045:1144"
                  >
                    公開
                  </p>
                </button>
              </div>
            </div>
            <div
              className="bg-white content-stretch flex flex-col items-start px-[16px] py-[10px] relative rounded-[10px] shrink-0 w-full"
              data-node-id="7:628"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                data-node-id="7:629"
              >
                <p className="leading-[1.55]">成員ID</p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0"
                data-node-id="7:630"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[18px] whitespace-nowrap"
                  data-node-id="7:631"
                >
                  <p className="leading-[1.55]">{member.id}</p>
                </div>
                <a
                  className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative shrink-0"
                  data-node-id="7:632"
                  data-name="儲存"
                >
                  <div
                    className="relative shrink-0 size-[20px]"
                    data-node-id="7:633"
                    data-name="Copy"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgCopy}
                    />
                  </div>
                </a>
              </div>
            </div>
            <div
              className="[word-break:break-word] bg-white content-stretch flex flex-col items-start leading-[0] px-[16px] py-[10px] relative rounded-[10px] shrink-0 w-full"
              data-node-id="7:636"
            >
              <div
                className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                data-node-id="7:637"
              >
                <p className="leading-[1.55]">建立時間</p>
              </div>
              <div
                className="flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#262d29] text-[18px] w-[min-content]"
                data-node-id="7:638"
              >
                <p className="leading-[1.55]">{member.created}</p>
              </div>
            </div>
            {selectedMember === 0 ? <><div
              className="[word-break:break-word] bg-white content-stretch flex flex-col items-start leading-[0] px-[16px] py-[10px] relative rounded-[10px] shrink-0 w-full"
              data-node-id="7:639"
            >
              <div
                className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                data-node-id="7:640"
              >
                <p className="leading-[1.55]">Email</p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full"
                data-node-id="7:641"
              >
                <a
                  className="flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center relative shrink-0 text-[#262d29] text-[18px] whitespace-nowrap"
                  href="mailto:ccyang@ncu.edu.tw"
                  data-node-id="7:642"
                  target="_blank"
                >
                  <p className="cursor-pointer leading-[1.55]">ccyang@ncu.edu.tw</p>
                </a>
                <div
                  className="flex flex-[1_0_0] flex-col font-['Noto_Sans_TC:DemiLight'] font-[350] justify-center min-w-px relative text-[#315e4c] text-[18px] text-right"
                  data-node-id="7:643"
                >
                  <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.55] underline">
                    更改密碼
                  </p>
                </div>
                <div
                  className="flex flex-col font-['Noto_Sans_TC:DemiLight'] font-[350] justify-center relative shrink-0 text-[#315e4c] text-[18px] text-right whitespace-nowrap"
                  data-node-id="7:644"
                >
                  <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.55] underline">
                    綁定其他Email
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-white content-stretch flex flex-col items-start px-[16px] py-[10px] relative rounded-[10px] shrink-0 w-full"
              data-node-id="7:645"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                data-node-id="7:646"
              >
                <p className="leading-[1.55]">PIN碼</p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative rounded-[10px] shrink-0 w-full"
                data-node-id="7:647"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[18px] text-right whitespace-nowrap"
                  data-node-id="7:648"
                >
                  <p className="leading-[1.55]">切換成員時輸入PIN碼</p>
                </div>
                <Switch className="bg-[#6750a4] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" />
                <div
                  className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_TC:DemiLight'] font-[350] justify-center leading-[0] min-w-px relative text-[#315e4c] text-[18px] text-right"
                  data-node-id="7:650"
                >
                  <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.55] underline">
                    更改PIN碼
                  </p>
                </div>
              </div>
            </div>
            </> : <>
              <div className="account-member-field"><span>Email</span><p>無</p></div>
              <div className="account-member-field"><span>PIN碼</span><p>無PIN碼</p></div>
            </>}
            <div
              className="content-stretch flex gap-[10px] items-center pt-[12px] relative shrink-0"
              data-node-id="7:651"
            >
              <div className="flex flex-row items-center self-stretch" data-node-id="7:656">
                <div className="bg-[#fcedec] border border-[#e8bfbc] border-solid content-stretch flex h-full items-center px-[16px] py-[10px] relative rounded-[10px] shrink-0">
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#b23a36] text-[18px] whitespace-nowrap"
                    data-node-id="7:657"
                  >
                    <p className="leading-[1.55]">{selectedMember === 0 ? "刪除帳號" : "移除成員"}</p>
                  </div>
                  <a
                    className="content-stretch cursor-pointer flex h-full items-center justify-end overflow-clip pl-[8px] pr-[2px] relative shrink-0"
                    data-node-id="7:658"
                    data-name="儲存"
                  >
                    <div
                      className="h-[26px] relative shrink-0 w-[23px]"
                      data-node-id="7:659"
                      data-name="Icon"
                    >
                      <div className="absolute inset-[-3.85%_-4.35%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon} />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:663">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector2} />
            </div>
          </div>
          <div onClick={event => event.stopPropagation()}
            className="content-stretch flex flex-col items-start relative shrink-0"
            data-node-id="7:664"
            data-name="偏好設定"
          >
            <div
              className="content-stretch flex items-center overflow-clip relative shrink-0 w-[1096px]"
              data-node-id="7:665"
              data-name="帳號資訊"
            >
              <p
                className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#253e38] text-[26px] whitespace-nowrap"
                data-node-id="7:666"
              >
                偏好設定
              </p>
            </div>
          </div>
          <div className="account-preferences" onClick={event => event.stopPropagation()}>
            {([
              { key: "answer", label: "作答方式", options: ["家長一同作答", "個別作答", "每次作答時詢問"] },
              { key: "member", label: "選擇登入成員", options: ["固定為上次登入成員", "每次登入時詢問"] },
              { key: "family", label: "選擇登入家庭", options: ["固定為上次登入家庭", "每次登入時詢問"] },
            ] as const).map(setting => <label key={setting.key} className="account-preference-field"><span>{setting.label}</span><select value={preferences[setting.key]} onChange={event => setPreferences(previous => ({ ...previous, [setting.key]: event.target.value }))}>{setting.options.map(option => <option key={option} value={option}>{option}</option>)}</select></label>)}
          </div>
        </div>
      </div>
      {editing && <div className="account-edit-overlay" onClick={event => { event.stopPropagation(); if (event.target === event.currentTarget) setEditing(null); }}>
        <form className="account-edit-dialog" role="dialog" aria-modal="true" aria-label={"編輯" + { name: "名稱", birthday: "生日", gender: "性別" }[editing]} onSubmit={event => { event.preventDefault(); saveEdit(); }}>
          <h2>編輯{{ name: "名稱", birthday: "生日", gender: "性別" }[editing]}</h2>
          {editing === "gender" ? <select autoFocus aria-label="性別" value={draft} onChange={event => setDraft(event.target.value)}>{["男性", "女性", "其他"].map(value => <option key={value}>{value}</option>)}</select> : <input autoFocus aria-label={editing === "name" ? "名稱" : "生日"} required maxLength={40} type={editing === "birthday" ? "date" : "text"} max={editing === "birthday" ? new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Taipei" }) : undefined} value={draft} onChange={event => setDraft(event.target.value)}/>}
          <div><button type="button" onClick={() => setEditing(null)}>取消</button><button type="submit">儲存</button></div>
        </form>
      </div>}
    </div>
  );
}
