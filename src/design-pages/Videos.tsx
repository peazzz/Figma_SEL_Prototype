import VideoCategory from "../components/VideoCategory";
import HeaderAvatar from "../components/HeaderAvatar";
import { CollapsibleSection, SectionToggle } from "../components/CollapsibleSection";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const img = `${assetPathPrefix}/9cf24.png`;
const imgVector11 = `${assetPathPrefix}/f0584.svg`;
const imgVector1 = `${assetPathPrefix}/01bd7.svg`;
const imgPlus = `${assetPathPrefix}/1d156.svg`;

export default function Component() {
  return (
    <div
      className="bg-[#f8f8f2] content-stretch flex flex-col items-start relative size-full"
      data-node-id="7:1610"
      data-name="品格影音館"
    >
      <div
        className="bg-white content-stretch flex gap-[16px] items-center overflow-clip px-[40px] py-[28px] relative shrink-0 w-[1440px]"
        data-node-id="7:1611"
        data-name="網站標題與帳號"
      >
        <div
          className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip relative text-[#315e4c]"
          data-node-id="7:1612"
          data-name="品牌"
        >
          <p
            className="flex-[1_0_0] font-['Noto_Serif_JP:Bold'] font-bold leading-[1.5] min-w-px relative text-[26px]"
            data-node-id="7:1613"
          >
            (Logo)品格、和諧、幸福心園地
          </p>
          <div
            className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap"
            data-node-id="7:1614"
          >
            <p>
              <span className="font-['Noto_Sans_TC:Light'] font-light leading-[1.55] text-black">
                目前登入家庭：
              </span>
              <span className="font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55]">我的家庭1</span>
            </p>
          </div>
        </div>
        <HeaderAvatar />
      </div>
      <div
        className="bg-[#e8f0eb] content-stretch cursor-pointer flex h-[48px] items-start justify-center overflow-clip relative shrink-0 w-full"
        data-node-id="7:1617"
        data-name="分頁主題"
      >
        <a
          className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1618"
          data-name="SEL情境短片"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[#315e4c] text-[16px] text-left whitespace-nowrap"
            data-node-id="7:1620"
          >
            SEL情境短片
          </p>
          <div className="h-0 relative shrink-0 w-full" data-node-id="7:1622">
            <div className="absolute inset-[-1.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector11} />
            </div>
          </div>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1623"
          data-name="親子討論影片"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1623;4185:3781"
          >
            親子討論影片
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1624"
          data-name="家長示範影片"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1624;4185:3781"
          >
            家長示範影片
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1625"
          data-name="關螢幕後的線下任務"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1625;4185:3781"
          >
            關螢幕後的線下任務
          </p>
        </a>
      </div>
      <div
        className="content-stretch flex items-start overflow-clip relative shrink-0 w-[1440px]"
        data-node-id="7:1626"
        data-name="頁面主體"
      >
        <div
          className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative shrink-0 w-[264px]"
          data-node-id="7:1627"
          data-name="八大主導覽"
        >
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1628"
            data-name="導覽 / 家庭首頁"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1628;515:8823"
            >
              家庭品格幸福儀表板
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1629"
            data-name="導覽 / 家長陪伴學院"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1629;515:8823"
            >
              家長陪伴學院
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1630"
            data-name="導覽 / 親子故事與閱讀館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1630;515:8823"
            >
              親子故事與閱讀館
            </p>
          </a>
          <div
            className="bg-[#315e4c] content-stretch flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1631"
            data-name="導覽 / 品格影音館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[16px] text-center text-white whitespace-nowrap"
              data-node-id="I7:1631;515:8823"
            >
              品格影音館
            </p>
          </div>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1632"
            data-name="導覽 / 家庭任務館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1632;515:8823"
            >
              家庭任務館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1633"
            data-name="導覽 / 無3C家庭日"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1633;515:8823"
            >
              無3C家庭日
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1634"
            data-name="導覽 / SEL成長地圖"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1634;515:8823"
            >
              SEL成長地圖
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1635"
            data-name="導覽 / 資源與支持"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1635;515:8823"
            >
              資源與支持
            </p>
          </a>
        </div>
        <div
          className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[40px] relative shrink-0 w-[1176px]"
          data-node-id="7:1636"
          data-name="家庭首頁內容"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[32px] whitespace-nowrap"
            data-node-id="7:1637"
          >
            品格影音館
          </p>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:1638">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="SEL情境短片"
            className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full"
            data-node-id="7:1639"
            data-name="SEL情境短片"
          >
            <div
              className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full"
              data-node-id="7:1640"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] min-w-px relative text-[#253e38] text-[23px]"
                data-node-id="7:1641"
              >
                SEL情境短片
              </p>
              <SectionToggle />
            </div>
            <VideoCategory category="SEL情境短片" />
          </CollapsibleSection>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:1671">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="親子討論影片"
            className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full"
            data-node-id="7:1672"
            data-name="親子討論影片"
          >
            <div
              className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full"
              data-node-id="7:1673"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] min-w-px relative text-[#253e38] text-[23px]"
                data-node-id="7:1674"
              >
                親子討論影片
              </p>
              <SectionToggle />
            </div>
            <VideoCategory category="親子討論影片" />
          </CollapsibleSection>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:1704">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="家長示範影片"
            className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full"
            data-node-id="7:1705"
            data-name="家長示範影片"
          >
            <div
              className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full"
              data-node-id="7:1706"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] min-w-px relative text-[#253e38] text-[23px]"
                data-node-id="7:1707"
              >
                家長示範影片
              </p>
              <SectionToggle />
            </div>
            <VideoCategory category="家長示範影片" />
          </CollapsibleSection>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:1737">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full"
            data-node-id="7:1738"
            data-name="關螢幕後的線下任務"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[23px] whitespace-nowrap"
              data-node-id="7:1739"
            >
              關螢幕後的線下任務
            </p>
            <div
              className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
              data-node-id="7:1750"
            >
              <div
                className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full"
                data-node-id="7:1751"
              >
                <div
                  className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
                  data-node-id="7:1786"
                >
                  <div
                    className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
                    data-node-id="7:1787"
                  >
                    <div
                      className="bg-[#ffe6e6] content-stretch flex flex-[1_0_0] h-[60px] items-center justify-center min-w-px px-[20px] py-[10px] relative rounded-[12px]"
                      data-node-id="7:1788"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#293d35] text-[18px] text-center whitespace-nowrap"
                        data-node-id="7:1789"
                      >
                        <p className="leading-none">任務名稱</p>
                      </div>
                      <div
                        className="content-stretch flex flex-[1_0_0] h-[24px] items-center justify-end min-w-px relative"
                        data-node-id="7:1790"
                      />
                    </div>
                    <div
                      className="bg-[#ffe6e6] content-stretch flex flex-[1_0_0] h-[60px] items-center justify-center min-w-px px-[20px] py-[10px] relative rounded-[12px]"
                      data-node-id="7:1792"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#293d35] text-[18px] text-center whitespace-nowrap"
                        data-node-id="7:1793"
                      >
                        <p className="leading-none">任務名稱</p>
                      </div>
                      <div
                        className="content-stretch flex flex-[1_0_0] h-[24px] items-center justify-end min-w-px relative"
                        data-node-id="7:1794"
                      />
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
                    data-node-id="7:1796"
                  >
                    <div
                      className="bg-[#ffe6e6] content-stretch flex flex-[1_0_0] h-[60px] items-center justify-center min-w-px px-[20px] py-[10px] relative rounded-[12px]"
                      data-node-id="7:1797"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#293d35] text-[18px] text-center whitespace-nowrap"
                        data-node-id="7:1798"
                      >
                        <p className="leading-none">任務名稱</p>
                      </div>
                      <div
                        className="content-stretch flex flex-[1_0_0] h-[24px] items-center justify-end min-w-px relative"
                        data-node-id="7:1799"
                      />
                    </div>
                    <div
                      className="bg-[#ffe6e6] content-stretch flex flex-[1_0_0] h-[60px] items-center justify-center min-w-px px-[20px] py-[10px] relative rounded-[12px]"
                      data-node-id="7:1801"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#293d35] text-[18px] text-center whitespace-nowrap"
                        data-node-id="7:1802"
                      >
                        <p className="leading-none">任務名稱</p>
                      </div>
                      <div
                        className="content-stretch flex flex-[1_0_0] h-[24px] items-center justify-end min-w-px relative"
                        data-node-id="7:1803"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[28px] relative shrink-0 w-full" data-node-id="7:1805">
                  <div
                    className="absolute content-stretch flex items-center justify-center left-0 px-[382px] top-[7px] w-[1096px]"
                    data-node-id="7:1806"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#69786f] text-[14px] text-center whitespace-nowrap"
                      data-node-id="7:1807"
                    >
                      點選任務查看內容，或隨機抽取一項
                    </p>
                  </div>
                  <a
                    className="absolute bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center left-[1000px] overflow-clip px-[12px] py-[6px] rounded-[12px] top-0"
                    data-node-id="7:1808"
                    data-name="展開全部"
                  >
                    <div
                      className="relative shrink-0 size-[16px]"
                      data-node-id="I7:1808;4185:3780"
                      data-name="Plus"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgPlus}
                      />
                    </div>
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                      data-node-id="I7:1808;4185:3781"
                    >
                      展開全部
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                data-node-id="7:1809"
              >
                <div
                  className="bg-[#315e4c] border border-black border-solid content-stretch flex flex-col items-center justify-center overflow-clip py-[10px] relative rounded-[12px] shrink-0 w-[240px]"
                  data-node-id="7:1810"
                  data-name="隨機抽取"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[16px] text-white whitespace-nowrap"
                    data-node-id="7:1811"
                  >
                    隨機抽取
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
