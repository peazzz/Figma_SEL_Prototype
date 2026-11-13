import AccountFamilyNavigation, { accountSections } from "../components/AccountFamilyNavigation";

const assetPathPrefix = "/assets";
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

export default function Component() {
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
          className="content-stretch flex flex-col gap-[28px] items-start overflow-clip p-[40px] relative shrink-0 w-[1176px]"
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
                className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[30px] whitespace-nowrap"
                data-node-id="7:584"
              >
                帳號資訊
              </p>
              <p
                className="flex-[1_0_0] font-['Noto_Sans_TC:Light'] font-light min-w-px relative text-[20px] text-right"
                data-node-id="7:585"
              >
                4/6
              </p>
            </div>
            <div
              className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#262d29] text-[20px] whitespace-nowrap"
              data-node-id="7:586"
            >
              <p className="leading-[1.55]">ccyang@ncu.edu.tw</p>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[28px] items-start relative shrink-0"
            data-node-id="7:587"
          >
            <div
              className="content-stretch flex flex-col items-center justify-center relative shrink-0"
              data-node-id="7:588"
            >
              <div className="relative shrink-0 size-[150px]" data-node-id="7:589" data-name="頭像">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  height="150"
                  src={img1}
                  width="150"
                />
              </div>
              <div
                className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                data-node-id="7:590"
              >
                <p className="leading-[1.55]">帳號持有人</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[150px]" data-node-id="7:591" data-name="頭像">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                height="150"
                src={img2}
                width="150"
              />
            </div>
            <div className="relative shrink-0 size-[150px]" data-node-id="7:592" data-name="頭像">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                height="150"
                src={img3}
                width="150"
              />
            </div>
            <div className="relative shrink-0 size-[150px]" data-node-id="7:593" data-name="頭像">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                height="150"
                src={img4}
                width="150"
              />
            </div>
            <div className="relative shrink-0 size-[150px]" data-node-id="7:594" data-name="頭像">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                height="150"
                src={img5}
                width="150"
              />
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0 w-full"
            data-node-id="7:596"
          >
            <div
              className="bg-white content-stretch flex items-start px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
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
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                    data-node-id="7:604"
                  >
                    <p className="leading-[1.55]">王媽</p>
                  </div>
                  <a
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
                  </a>
                </div>
              </div>
              <div className="relative shrink-0 size-[70px]" data-node-id="7:609" data-name="頭像">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  height="70"
                  src={img6}
                  width="70"
                />
              </div>
            </div>
            <div
              className="bg-white content-stretch flex flex-col items-start px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
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
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                  data-node-id="7:613"
                >
                  <p className="leading-[1.55]">1989年3月24日</p>
                </div>
                <a
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
                </a>
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
              className="bg-white content-stretch flex flex-col items-start px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
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
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                  data-node-id="7:622"
                >
                  <p className="leading-[1.55]">女性</p>
                </div>
                <a
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
                </a>
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
              className="bg-white content-stretch flex flex-col items-start px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
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
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                  data-node-id="7:631"
                >
                  <p className="leading-[1.55]">50010902</p>
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
              className="[word-break:break-word] bg-white content-stretch flex flex-col items-start leading-[0] px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
              data-node-id="7:636"
            >
              <div
                className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                data-node-id="7:637"
              >
                <p className="leading-[1.55]">建立時間</p>
              </div>
              <div
                className="flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#262d29] text-[24px] w-[min-content]"
                data-node-id="7:638"
              >
                <p className="leading-[1.55]">2026年10月5日</p>
              </div>
            </div>
            <div
              className="[word-break:break-word] bg-white content-stretch flex flex-col items-start leading-[0] px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
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
                  className="flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                  href="mailto:ccyang@ncu.edu.tw"
                  data-node-id="7:642"
                  target="_blank"
                >
                  <p className="cursor-pointer leading-[1.55]">ccyang@ncu.edu.tw</p>
                </a>
                <div
                  className="flex flex-[1_0_0] flex-col font-['Noto_Sans_TC:DemiLight'] font-[350] justify-center min-w-px relative text-[#315e4c] text-[20px] text-right"
                  data-node-id="7:643"
                >
                  <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.55] underline">
                    更改密碼
                  </p>
                </div>
                <div
                  className="flex flex-col font-['Noto_Sans_TC:DemiLight'] font-[350] justify-center relative shrink-0 text-[#315e4c] text-[20px] text-right whitespace-nowrap"
                  data-node-id="7:644"
                >
                  <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.55] underline">
                    綁定其他Email
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-white content-stretch flex flex-col items-start px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
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
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[20px] text-right whitespace-nowrap"
                  data-node-id="7:648"
                >
                  <p className="leading-[1.55]">切換成員時輸入PIN碼</p>
                </div>
                <Switch className="bg-[#6750a4] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" />
                <div
                  className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_TC:DemiLight'] font-[350] justify-center leading-[0] min-w-px relative text-[#315e4c] text-[20px] text-right"
                  data-node-id="7:650"
                >
                  <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.55] underline">
                    更改PIN碼
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[10px] items-center pt-[12px] relative shrink-0"
              data-node-id="7:651"
            >
              <div className="flex flex-row items-center self-stretch" data-node-id="7:656">
                <div className="bg-[#fcedec] border border-[#e8bfbc] border-solid content-stretch flex h-full items-center px-[20px] py-[10px] relative rounded-[10px] shrink-0">
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#b23a36] text-[20px] whitespace-nowrap"
                    data-node-id="7:657"
                  >
                    <p className="leading-[1.55]">刪除帳號</p>
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
          <div
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
                className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#253e38] text-[30px] whitespace-nowrap"
                data-node-id="7:666"
              >
                偏好設定
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
            data-node-id="7:667"
          >
            <div
              className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
              data-node-id="7:668"
              data-name="作答方式"
            >
              <div
                className="bg-white content-stretch flex flex-col items-start px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
                data-node-id="7:669"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                  data-node-id="7:670"
                >
                  <p className="leading-[1.55]">作答方式</p>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                  data-node-id="7:671"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                    data-node-id="7:672"
                  >
                    <p className="leading-[1.55]">家長一同作答</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white border border-[#dce5df] border-solid content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col items-start relative rounded-[10px] shrink-0 w-full"
                data-node-id="7:677"
              >
                <div
                  className="bg-[#e8f0eb] content-stretch flex gap-[10px] items-center px-[20px] py-[5px] relative shrink-0 w-full"
                  data-node-id="7:678"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                    data-node-id="7:679"
                  >
                    <p className="leading-[1.55]">家長一同作答</p>
                  </div>
                  <a
                    className="content-stretch cursor-pointer flex flex-[1_0_0] items-center justify-end min-w-px overflow-clip relative"
                    data-node-id="7:680"
                    data-name="儲存"
                  >
                    <div
                      className="relative shrink-0 size-[24px]"
                      data-node-id="7:681"
                      data-name="Check"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgCheck}
                      />
                    </div>
                  </a>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="7:684">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector4} />
                  </div>
                </div>
                <div
                  className="content-stretch flex items-center px-[20px] py-[5px] relative shrink-0 w-full"
                  data-node-id="7:685"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#29332e] text-[24px] whitespace-nowrap"
                    data-node-id="7:686"
                  >
                    <p className="leading-[1.55]">個別作答</p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="7:687">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector4} />
                  </div>
                </div>
                <div
                  className="content-stretch flex items-center px-[20px] py-[5px] relative shrink-0 w-full"
                  data-node-id="7:688"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#29332e] text-[24px] whitespace-nowrap"
                    data-node-id="7:689"
                  >
                    <p className="leading-[1.55]">每次作答時詢問</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
              data-node-id="7:690"
              data-name="選擇登入成員"
            >
              <div
                className="bg-white content-stretch flex flex-col items-start px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
                data-node-id="7:691"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                  data-node-id="7:692"
                >
                  <p className="leading-[1.55]">選擇登入成員</p>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                  data-node-id="7:693"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                    data-node-id="7:694"
                  >
                    <p className="leading-[1.55]">固定為上次登入成員</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white border border-[#dce5df] border-solid content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col items-start relative rounded-[10px] shrink-0 w-full"
                data-node-id="7:699"
              >
                <div
                  className="bg-[#e8f0eb] content-stretch flex gap-[10px] items-center px-[20px] py-[5px] relative shrink-0 w-full"
                  data-node-id="7:700"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                    data-node-id="7:701"
                  >
                    <p className="leading-[1.55]">固定為上次登入成員</p>
                  </div>
                  <a
                    className="content-stretch cursor-pointer flex flex-[1_0_0] items-center justify-end min-w-px overflow-clip relative"
                    data-node-id="7:702"
                    data-name="儲存"
                  >
                    <div
                      className="relative shrink-0 size-[24px]"
                      data-node-id="7:703"
                      data-name="Check"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgCheck}
                      />
                    </div>
                  </a>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="7:706">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector4} />
                  </div>
                </div>
                <div
                  className="content-stretch flex items-center px-[20px] py-[5px] relative shrink-0 w-full"
                  data-node-id="7:707"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#29332e] text-[24px] whitespace-nowrap"
                    data-node-id="7:708"
                  >
                    <p className="leading-[1.55]">每次登入時詢問</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
              data-node-id="7:709"
            >
              <div
                className="bg-white content-stretch flex flex-col items-start px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
                data-node-id="7:710"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                  data-node-id="7:711"
                >
                  <p className="leading-[1.55]">選擇登入家庭</p>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
                  data-node-id="7:712"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                    data-node-id="7:713"
                  >
                    <p className="leading-[1.55]">固定為上次登入家庭</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white border border-[#dce5df] border-solid content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col items-start relative rounded-[10px] shrink-0 w-full"
                data-node-id="7:718"
              >
                <div
                  className="bg-[#e8f0eb] content-stretch flex gap-[10px] items-center px-[20px] py-[5px] relative shrink-0 w-full"
                  data-node-id="7:719"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#262d29] text-[24px] whitespace-nowrap"
                    data-node-id="7:720"
                  >
                    <p className="leading-[1.55]">固定為上次登入家庭</p>
                  </div>
                  <a
                    className="content-stretch cursor-pointer flex flex-[1_0_0] items-center justify-end min-w-px overflow-clip relative"
                    data-node-id="7:721"
                    data-name="儲存"
                  >
                    <div
                      className="relative shrink-0 size-[24px]"
                      data-node-id="7:722"
                      data-name="Check"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgCheck}
                      />
                    </div>
                  </a>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="7:725">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector4} />
                  </div>
                </div>
                <div
                  className="content-stretch flex items-center px-[20px] py-[5px] relative shrink-0 w-full"
                  data-node-id="7:726"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#29332e] text-[24px] whitespace-nowrap"
                    data-node-id="7:727"
                  >
                    <p className="leading-[1.55]">每次登入時詢問</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
