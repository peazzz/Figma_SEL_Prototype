import RelativeDialog, { relativeAge, initialRelativeProfiles, type RelativeProfile } from "../components/RelativeDialog";
import JoinFamilyDialog from "../components/JoinFamilyDialog";
import CreateFamilyDialog, { type CreatedFamily } from "../components/CreateFamilyDialog";
import FamilyDetailsDialog, { initialFamilyDetails } from "../components/FamilyDetailsDialog";
import { useFamilyProfile } from "../FamilyProfile";
import { useRef, useState } from "react";
import FamilyMemberDialog, { initialMembers } from "../components/FamilyMemberDialog";
import FamilySelectionDialog from "../components/FamilySelectionDialog";
import AccountFamilyNavigation, { familySections } from "../components/AccountFamilyNavigation";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const img = `${assetPathPrefix}/9cf24.png`;
const img1 = `${assetPathPrefix}/1c033.png`;
const img2 = `${assetPathPrefix}/ad49b.png`;
const img3 = `${assetPathPrefix}/644ba.png`;
const img4 = `${assetPathPrefix}/45647.png`;
const img5 = `${assetPathPrefix}/e478c.png`;
const img6 = `${assetPathPrefix}/00cad.png`;
const img7 = `${assetPathPrefix}/e8f12.png`;
const img8 = `${assetPathPrefix}/6770f.png`;
const img9 = `${assetPathPrefix}/2ae07.png`;
const img10 = `${assetPathPrefix}/8a73f.png`;
const img11 = `${assetPathPrefix}/62514.png`;
const img12 = `${assetPathPrefix}/85550.png`;
const img13 = `${assetPathPrefix}/6ccc2.png`;
const img14 = `${assetPathPrefix}/a7a0f.png`;
const img15 = `${assetPathPrefix}/ce2f7.png`;
const img16 = `${assetPathPrefix}/af3e3.png`;
const img17 = `${assetPathPrefix}/8a0f7.png`;
const img18 = `${assetPathPrefix}/ddb18.png`;
const img19 = `${assetPathPrefix}/cc4df.png`;
const imgVector1 = `${assetPathPrefix}/b249c.svg`;
const imgUserPlus = `${assetPathPrefix}/00eba.svg`;

export default function Component() {
  const { selectedFamily, setSelectedFamily } = useFamilyProfile();
  const [relativesAdded, setRelativesAdded] = useState<RelativeProfile[]>(initialRelativeProfiles);
  const [relativeEditor, setRelativeEditor] = useState<RelativeProfile | "new" | null>(null);
  const [joinOpen, setJoinOpen] = useState(false);
  const [homeDeleted, setHomeDeleted] = useState(false);
  const [createdDetailsOpen, setCreatedDetailsOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [createdFamily, setCreatedFamily] = useState<CreatedFamily | null>(null);
  const [familyDetails, setFamilyDetails] = useState(initialFamilyDetails);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [familyMembers, setFamilyMembers] = useState(initialMembers);
  const canManageFamily = !homeDeleted && familyMembers.some(member => member.id === "mom" && member.parent);
  const [memberDialogOpen, setMemberDialogOpen] = useState(false);
  const [familyDialogOpen, setFamilyDialogOpen] = useState(false);
  const familyTriggerRef = useRef<HTMLButtonElement>(null);
  const availableFamilies = [
    ...(!homeDeleted ? [{ name: "我的家庭1", label: familyDetails.name, image: assetPathPrefix + "/family-choice-home.png" }] : []),
    { name: "王家", image: assetPathPrefix + "/family-choice-wang.png" },
    ...(createdFamily ? [{ name: "created-family", label: createdFamily.details.name, image: assetPathPrefix + "/5b005.png" }] : []),
  ];
  function deleteFamily(target: "home" | "created") {
    if (target === "home" && !canManageFamily) return;
    if (target === "created" && !createdFamily?.members.some(member => member.id === "mom" && member.parent)) return;
    setDetailsOpen(false); setCreatedDetailsOpen(false); setMemberDialogOpen(false);
    if (target === "home") setHomeDeleted(true); else setCreatedFamily(null);
    const selectedId = target === "home" ? "我的家庭1" : "created-family";
    if (selectedFamily === selectedId) { setSelectedFamily(""); setFamilyDialogOpen(true); }
  }
  function closeFamilyDialog() {
    setFamilyDialogOpen(false);
    familyTriggerRef.current?.focus({ preventScroll: true });
  }
  return (
    <div
      className="bg-[#f8f8f2] content-stretch flex flex-col items-start relative size-full"
      data-node-id="7:728"
      data-name="家庭資訊"
    >
      <div
        className="bg-white content-stretch flex gap-[16px] items-center overflow-clip px-[40px] py-[28px] relative shrink-0 w-[1440px]"
        data-node-id="7:729"
        data-name="網站標題與帳號"
      >
        <div
          className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip relative text-[#315e4c]"
          data-node-id="7:730"
          data-name="品牌"
        >
          <p
            className="flex-[1_0_0] font-['Noto_Serif_JP:Bold'] font-bold leading-[1.5] min-w-px relative text-[26px]"
            data-node-id="7:731"
          >
            (Logo)品格、和諧、幸福心園地
          </p>
          <div
            className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap"
            data-node-id="7:732"
          >
            <p>
              <span className="font-['Noto_Sans_TC:Light'] font-light leading-[1.55] text-black">
                目前登入家庭：
              </span>
              <span className="font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55]">{availableFamilies.find(family => family.name === selectedFamily)?.label ?? (selectedFamily || "尚未選擇家庭")}</span>
            </p>
          </div>
        </div>
        <div className="relative shrink-0 size-[45px]" data-node-id="7:733" data-name="媽媽">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            height="45"
            src={img}
            width="45"
          />
        </div>
      </div>
      <AccountFamilyNavigation sections={familySections} />
      <div
        className="content-stretch flex items-start overflow-clip relative shrink-0 w-[1440px]"
        data-node-id="7:735"
        data-name="頁面主體"
      >
        <div
          className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative shrink-0 w-[264px]"
          data-node-id="7:736"
          data-name="八大主導覽"
        >
          <div
            className="content-stretch flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:737"
            data-name="導覽 / 家庭首頁"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:737;515:8823"
            >
              家庭品格幸福儀表板
            </p>
          </div>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:738"
            data-name="導覽 / 家長陪伴學院"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:738;515:8823"
            >
              家長陪伴學院
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:739"
            data-name="導覽 / 親子故事與閱讀館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:739;515:8823"
            >
              親子故事與閱讀館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:740"
            data-name="導覽 / 品格影音館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:740;515:8823"
            >
              品格影音館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:741"
            data-name="導覽 / 家庭任務館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:741;515:8823"
            >
              家庭任務館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:742"
            data-name="導覽 / 無3C家庭日"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:742;515:8823"
            >
              無3C家庭日
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:743"
            data-name="導覽 / SEL成長地圖"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:743;515:8823"
            >
              SEL成長地圖
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:744"
            data-name="導覽 / 資源與支持"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:744;515:8823"
            >
              資源與支持
            </p>
          </a>
        </div>
        <div
          className="content-stretch flex flex-col gap-[28px] items-start overflow-clip p-[40px] relative shrink-0 w-[1176px]"
          data-node-id="7:745"
          data-name="家庭資訊內容"
        >
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-[1096px]"
            data-node-id="7:746"
            data-name="家庭資訊"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#253e38] text-[30px] whitespace-nowrap"
              data-node-id="7:747"
            >
              家庭資訊
            </p>
            <div
              className="content-stretch flex flex-col items-center justify-center relative shrink-0"
              data-node-id="7:748"
            >
              <button
                type="button"
                ref={familyTriggerRef}
                aria-haspopup="dialog"
                aria-expanded={familyDialogOpen}
                onClick={(event) => { event.stopPropagation(); setFamilyDialogOpen(true); }}
                className="bg-[#315e4c] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[14px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="7:749"
                data-name="選擇登入家庭"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[15px] text-left text-white whitespace-nowrap"
                  data-node-id="I7:749;4185:3781"
                >
                  選擇登入家庭
                </p>
              </button>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Light'] font-light leading-[1.5] min-w-px relative text-[#253e38] text-[20px] text-right"
              data-node-id="7:750"
            >
              {availableFamilies.length}/3
            </p>
          </div>
          <div
            className="content-stretch flex gap-[16px] items-start overflow-clip relative rounded-[20px] shrink-0 w-full"
            data-node-id="7:751"
            data-name="家庭"
          >
            {!homeDeleted && <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative"
              data-node-id="7:752"
              data-name="我的家庭1"
            >
              <div
                className="bg-white border-2 border-[#056b0c] border-solid content-stretch flex flex-col gap-[10px] items-center overflow-clip p-[22px] relative rounded-[20px] shrink-0 w-full"
                style={{ borderColor: selectedFamily === "我的家庭1" ? "#056b0c" : "transparent" }}
                data-node-id="7:753"
                data-name="我的家庭1"
              >
                <button type="button" aria-label={"查看" + familyDetails.name + "家庭資料"} onClick={(event) => { event.stopPropagation(); setDetailsOpen(true); }}
                  className="family-details-trigger content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full"
                  data-node-id="7:754"
                >
                  <div
                    className="relative shrink-0 size-[45px]"
                    data-node-id="7:755"
                    data-name="我的家庭1"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      height="45"
                      src={img1}
                      width="45"
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55] relative shrink-0 text-[#253e38] text-[20px] whitespace-nowrap"
                    data-node-id="7:756"
                  >
                    {familyDetails.name}
                  </p>
                </button>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] min-w-full relative shrink-0 text-[#64766f] text-[14px] w-[min-content]"
                  data-node-id="7:758"
                >
                  家庭成員({familyMembers.length})
                </p>
                {familyMembers.map(member => <div key={member.id} className="family-current-member" data-member-id={member.id}>
                  <img src={assetPathPrefix + "/" + member.avatar} alt="" width="45" height="45"/>
                  <div><strong>{member.name}</strong><small>{member.parent ? "(家長)" : ""}{member.id === "mom" ? "(我)" : ""}</small></div>
                  {member.hasEditedName && <span>{member.realName}</span>}
                </div>)}
                {canManageFamily && <div
                  className="content-stretch cursor-pointer flex gap-[10px] items-start pt-[20px] relative shrink-0 w-full"
                  data-node-id="7:781"
                >
                  <button type="button" onClick={(event) => { event.stopPropagation(); setMemberDialogOpen(true); }}
                    className="bg-[#315e4c] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px overflow-clip px-[12px] py-[14px] relative rounded-[12px]"
                    data-node-id="7:782"
                    data-name="編輯成員"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[15px] text-left text-white whitespace-nowrap"
                      data-node-id="I7:782;4185:3781"
                    >
                      編輯成員
                    </p>
                  </button>
                  <button type="button" onClick={(event) => { event.stopPropagation(); setDetailsOpen(true); }}
                    className="bg-white border border-[#315e4c] border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px overflow-clip px-[12px] py-[14px] relative rounded-[12px]"
                    data-node-id="7:783"
                    data-name="家庭資料"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[#315e4c] text-[15px] text-left whitespace-nowrap"
                      data-node-id="I7:783;4185:3781"
                    >
                      家庭資料
                    </p>
                  </button>
                </div>}
              </div>
              <p
                className="[word-break:break-word] font-['Noto_Sans_TC:Light'] font-light leading-[1.5] relative shrink-0 text-[#315e4c] text-[12px] whitespace-nowrap"
                hidden={selectedFamily !== "我的家庭1"}
                data-node-id="7:784"
              >
                ．目前登入家庭
              </p>
            </div>}
            <div className="flex flex-1 min-w-0 flex-col items-stretch">
            <div
              className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-w-px overflow-clip p-[22px] relative rounded-[20px]"
              style={{ border: "2px solid", borderColor: selectedFamily === "王家" ? "#056b0c" : "transparent" }}
              data-node-id="7:785"
              data-name="王家"
            >
              <div
                className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full"
                data-node-id="7:786"
              >
                <div
                  className="relative shrink-0 size-[45px]"
                  data-node-id="7:787"
                  data-name="媽媽"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img5}
                    width="45"
                  />
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55] relative shrink-0 text-[#253e38] text-[20px] whitespace-nowrap"
                  data-node-id="7:788"
                >
                  王家
                </p>
              </div>
              <p
                className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] min-w-full relative shrink-0 text-[#64766f] text-[14px] w-[min-content]"
                data-node-id="7:790"
              >
                家庭成員(10)
              </p>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:791"
                data-name="王1"
              >
                <div className="relative shrink-0 size-[45px]" data-node-id="7:792" data-name="王1">
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img6}
                    width="45"
                  />
                </div>
                <div
                  className="[word-break:break-word] content-stretch flex flex-[1_0_0] items-center leading-[1.55] min-w-px relative whitespace-nowrap"
                  data-node-id="7:793"
                >
                  <p
                    className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[#253e38] text-[20px]"
                    data-node-id="7:794"
                  >
                    王1
                  </p>
                  <p
                    className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#717171] text-[12px] text-right"
                    data-node-id="7:795"
                  >
                    (家長)
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#717171] text-[16px] text-right whitespace-nowrap"
                  data-node-id="7:796"
                >
                  王XX
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:797"
                data-name="王2"
              >
                <div className="relative shrink-0 size-[45px]" data-node-id="7:798" data-name="王2">
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img7}
                    width="45"
                  />
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
                  data-node-id="7:799"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55] relative shrink-0 text-[#253e38] text-[20px] whitespace-nowrap"
                    data-node-id="7:800"
                  >
                    王2
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#717171] text-[16px] text-right whitespace-nowrap"
                  data-node-id="7:801"
                >
                  王XX
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:802"
                data-name="王3"
              >
                <div className="relative shrink-0 size-[45px]" data-node-id="7:803" data-name="王3">
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img8}
                    width="45"
                  />
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
                  data-node-id="7:804"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55] relative shrink-0 text-[#253e38] text-[20px] whitespace-nowrap"
                    data-node-id="7:805"
                  >
                    王3
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#717171] text-[16px] text-right whitespace-nowrap"
                  data-node-id="7:806"
                >
                  王XX
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:807"
                data-name="王4"
              >
                <div className="relative shrink-0 size-[45px]" data-node-id="7:808" data-name="王4">
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img9}
                    width="45"
                  />
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
                  data-node-id="7:809"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55] relative shrink-0 text-[#253e38] text-[20px] whitespace-nowrap"
                    data-node-id="7:810"
                  >
                    王4
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#717171] text-[16px] text-right whitespace-nowrap"
                  data-node-id="7:811"
                >
                  王XX
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:812"
                data-name="王5"
              >
                <div className="relative shrink-0 size-[45px]" data-node-id="7:813" data-name="王5">
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img10}
                    width="45"
                  />
                </div>
                <div
                  className="[word-break:break-word] content-stretch flex flex-[1_0_0] items-center leading-[1.55] min-w-px relative whitespace-nowrap"
                  data-node-id="7:814"
                >
                  <p
                    className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[#253e38] text-[20px]"
                    data-node-id="7:815"
                  >
                    王5
                  </p>
                  <p
                    className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#717171] text-[12px] text-right"
                    data-node-id="7:816"
                  >
                    (家長)
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#717171] text-[16px] text-right whitespace-nowrap"
                  data-node-id="7:817"
                >
                  王XX
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:818"
                data-name="王6"
              >
                <div className="relative shrink-0 size-[45px]" data-node-id="7:819" data-name="王6">
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img11}
                    width="45"
                  />
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
                  data-node-id="7:820"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55] relative shrink-0 text-[#253e38] text-[20px] whitespace-nowrap"
                    data-node-id="7:821"
                  >
                    王6
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#717171] text-[16px] text-right whitespace-nowrap"
                  data-node-id="7:822"
                >
                  王XX
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:823"
                data-name="王7"
              >
                <div className="relative shrink-0 size-[45px]" data-node-id="7:824" data-name="王7">
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img}
                    width="45"
                  />
                </div>
                <div
                  className="[word-break:break-word] content-stretch flex flex-[1_0_0] items-center leading-[1.55] min-w-px relative whitespace-nowrap"
                  data-node-id="7:825"
                >
                  <p
                    className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[#253e38] text-[20px]"
                    data-node-id="7:826"
                  >
                    王7
                  </p>
                  <p
                    className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#717171] text-[12px] text-right"
                    data-node-id="7:827"
                  >
                    (我)
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#717171] text-[16px] text-right whitespace-nowrap"
                  data-node-id="7:828"
                >
                  王XX
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:829"
                data-name="王8"
              >
                <div className="relative shrink-0 size-[45px]" data-node-id="7:830" data-name="王8">
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img12}
                    width="45"
                  />
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
                  data-node-id="7:831"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55] relative shrink-0 text-[#253e38] text-[20px] whitespace-nowrap"
                    data-node-id="7:832"
                  >
                    王8
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#717171] text-[16px] text-right whitespace-nowrap"
                  data-node-id="7:833"
                >
                  王XX
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:834"
                data-name="王9"
              >
                <div className="relative shrink-0 size-[45px]" data-node-id="7:835" data-name="王9">
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img13}
                    width="45"
                  />
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
                  data-node-id="7:836"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55] relative shrink-0 text-[#253e38] text-[20px] whitespace-nowrap"
                    data-node-id="7:837"
                  >
                    王9
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#717171] text-[16px] text-right whitespace-nowrap"
                  data-node-id="7:838"
                >
                  王XX
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                data-node-id="7:839"
                data-name="王10"
              >
                <div
                  className="relative shrink-0 size-[45px]"
                  data-node-id="7:840"
                  data-name="王10"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    height="45"
                    src={img14}
                    width="45"
                  />
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
                  data-node-id="7:841"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55] relative shrink-0 text-[#253e38] text-[20px] whitespace-nowrap"
                    data-node-id="7:842"
                  >
                    王10
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#717171] text-[16px] text-right whitespace-nowrap"
                  data-node-id="7:843"
                >
                  王XX
                </p>
              </div>
            </div>
              {selectedFamily === "王家" && <p className="family-login-marker">．目前登入家庭</p>}
            </div>
            {createdFamily ? <section style={{ border: selectedFamily === "created-family" ? "2px solid #056b0c" : "2px solid transparent" }} className="created-family-card" aria-label={createdFamily.details.name}>
              <button type="button" className="created-family-heading family-details-trigger" onClick={event => { event.stopPropagation(); setCreatedDetailsOpen(true); }}><img src={assetPathPrefix + "/5b005.png"} alt=""/><h3>{createdFamily.details.name}</h3></button>
              <p className="member-caption">家庭成員({createdFamily.members.length})</p>
              {createdFamily.members.map(member => <div key={member.id} className="family-current-member"><img src={assetPathPrefix + "/" + member.avatar} alt=""/><div><strong>{member.name}</strong><small>{member.parent ? "(家長)" : ""}{member.id === "mom" ? "(我)" : ""}</small></div>{member.hasEditedName && <span>{member.realName}</span>}</div>)}
            </section> : <div
              className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip p-[22px] relative rounded-[20px]"
              data-node-id="7:846"
              data-name="空"
            >
              <p
                className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55] relative shrink-0 text-[#253e38] text-[20px] w-[310px]"
                data-node-id="7:847"
              >
                尚未加入
              </p>
              <p
                className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#64766f] text-[14px] w-[310px]"
                data-node-id="7:848"
              >
                加入現有家庭或建立家庭
              </p>
              <div
                className="content-stretch cursor-pointer flex gap-[10px] items-start relative shrink-0"
                data-node-id="7:849"
              >
                <button type="button" onClick={event => { event.stopPropagation(); setCreateOpen(true); }}
                  className="bg-white border border-[#d6ded3] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[14px] relative rounded-[12px] shrink-0"
                  data-node-id="7:850"
                  data-name="建立家庭"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[#315e4c] text-[15px] text-left whitespace-nowrap"
                    data-node-id="I7:850;4185:3781"
                  >
                    建立家庭
                  </p>
                </button>
                <button type="button" onClick={event => { event.stopPropagation(); setJoinOpen(true); }}
                  className="bg-white border border-[#d6ded3] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[14px] relative rounded-[12px] shrink-0"
                  data-node-id="7:851"
                  data-name="加入家庭"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[#315e4c] text-[15px] text-left whitespace-nowrap"
                    data-node-id="I7:851;4185:3781"
                  >
                    加入家庭
                  </p>
                </button>
              </div>
            </div>}
          </div>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:861">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip relative shrink-0 w-[1096px]"
            data-node-id="7:862"
            data-name="家庭成員"
          >
            <div
              className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full"
              data-node-id="7:863"
              data-name="標題"
            >
              <p
                className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#253e38] text-[30px] whitespace-nowrap"
                data-node-id="7:864"
              >
                家人與親戚
              </p>
              <div
                className="content-stretch flex flex-col items-center justify-center relative shrink-0"
                data-node-id="7:865"
              >
                <button type="button" onClick={event => { event.stopPropagation(); setRelativeEditor("new"); }}
                  className="bg-[#315e4c] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[14px] relative rounded-[12px] shrink-0 w-full"
                  data-node-id="7:866"
                  data-name="新增"
                >
                  <div
                    className="relative shrink-0 size-[16px]"
                    data-node-id="I7:866;4185:3780"
                    data-name="User plus"
                  >
                    <div className="absolute inset-[0_-2.08%]">
                      <img alt="" className="block max-w-none size-full" src={imgUserPlus} />
                    </div>
                  </div>
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[15px] text-left text-white whitespace-nowrap"
                    data-node-id="I7:866;4185:3781"
                  >
                    新增
                  </p>
                </button>
              </div>
            </div>
            <div
              className="family-relatives-grid"
              data-node-id="7:868"
              data-name="家庭成員"
            >
              {relativesAdded.map(relative => <div key={relative.id} className="new-relative-card" data-relative-id={relative.id} style={{ backgroundColor: relative.color }}><img src={assetPathPrefix + "/" + relative.avatar} alt=""/><strong>{relative.name}</strong><p>{[relativeAge(relative.birthday) || relative.ageLabel, relative.relation].filter(Boolean).join(" · ")}</p><button type="button" onClick={event => { event.stopPropagation(); setRelativeEditor(relative); }}>個人資料</button></div>)}
            </div>
          </div>
        </div>
      </div>
      {relativeEditor && <RelativeDialog initial={relativeEditor === "new" ? undefined : relativeEditor} onClose={() => setRelativeEditor(null)} onSave={relative => { const original = relativesAdded.find(item => item.id === relative.id); if (original?.owned === false) relative = { ...original, relation: relative.relation }; setFamilyMembers(items => items.map(item => item.id === relative.id ? { ...item, realName: relative.realName, name: item.hasEditedName ? item.name : relative.realName } : item)); setRelativesAdded(items => items.some(item => item.id === relative.id) ? items.map(item => item.id === relative.id ? relative : item) : [...items, relative]); setRelativeEditor(null); }} />}
      {joinOpen && <JoinFamilyDialog onClose={() => setJoinOpen(false)}/>}
      {createdDetailsOpen && createdFamily && <FamilyDetailsDialog familyId={createdFamily.id} createdAt={createdFamily.createdAt} details={createdFamily.details} editable actor="媽媽" onSave={details => setCreatedFamily({ ...createdFamily, details })} onDelete={() => deleteFamily("created")} onClose={() => setCreatedDetailsOpen(false)} />}
      {createOpen && <CreateFamilyDialog extraRelatives={relativesAdded} existingNames={availableFamilies.map(family => family.label ?? family.name)} onClose={() => setCreateOpen(false)} onCreate={family => { setCreatedFamily(family); setCreateOpen(false); }} />}
      {detailsOpen && !homeDeleted && familyMembers.some(member => member.id === "mom") && <FamilyDetailsDialog details={familyDetails} editable={canManageFamily} actor={familyMembers.find(member => member.id === "mom")?.name ?? "媽媽"} onSave={next => { if (canManageFamily) setFamilyDetails(next); }} onDelete={() => deleteFamily("home")} onClose={() => setDetailsOpen(false)} />}
      {canManageFamily && <FamilyMemberDialog extraRelatives={relativesAdded} members={familyMembers} setMembers={setFamilyMembers} open={memberDialogOpen} onClose={() => setMemberDialogOpen(false)} />}
      {familyDialogOpen && <FamilySelectionDialog families={availableFamilies} selected={selectedFamily} onClose={closeFamilyDialog}
        onSelect={(name) => { setSelectedFamily(name); closeFamilyDialog(); }} />}
    </div>
  );
}
