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
        <div className="relative shrink-0 size-[45px]" data-node-id="7:1615" data-name="媽媽">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            height="45"
            src={img}
            width="45"
          />
        </div>
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
            <div
              className="content-stretch flex gap-[12px] items-center relative rounded-[10px] shrink-0 w-full"
              data-node-id="7:1643"
              data-name="品格主題"
            >
              <p
                className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                data-node-id="7:1644"
              >
                SEL能力：
              </p>
              <a
                className="bg-[#315e4c] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                data-node-id="7:1645"
                data-name="自我覺察"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                  data-node-id="I7:1645;4185:3781"
                >
                  自我覺察
                </p>
              </a>
              <a
                className="bg-[#315e4c] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                data-node-id="7:1646"
                data-name="自我管理"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                  data-node-id="I7:1646;4185:3781"
                >
                  自我管理
                </p>
              </a>
              <a
                className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                data-node-id="7:1647"
                data-name="社會覺察"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                  data-node-id="I7:1647;4185:3781"
                >
                  社會覺察
                </p>
              </a>
              <a
                className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                data-node-id="7:1648"
                data-name="人際關係"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                  data-node-id="I7:1648;4185:3781"
                >
                  人際關係
                </p>
              </a>
              <a
                className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                data-node-id="7:1649"
                data-name="負責任決策"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                  data-node-id="I7:1649;4185:3781"
                >
                  負責任決策
                </p>
              </a>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
              data-node-id="7:1650"
              data-name="影片區"
            >
              <div
                className="bg-[#e6eff3] content-stretch flex gap-[16px] items-start overflow-clip p-[22px] relative rounded-[20px] shrink-0 w-full"
                data-node-id="7:1651"
                data-name="影片1"
              >
                <div
                  className="bg-[#c4c4c4] content-stretch flex flex-col h-[180px] items-end justify-end p-[5px] relative rounded-[12px] shrink-0 w-[300px]"
                  data-node-id="7:1652"
                >
                  <div
                    className="bg-[#7e7e7e] content-stretch flex flex-col h-[25px] items-center justify-center relative rounded-[6px] shrink-0 w-[50px]"
                    data-node-id="7:1653"
                    data-name="影片時數"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                      data-node-id="7:1654"
                    >
                      3:45
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end justify-end min-w-px relative self-stretch"
                  data-node-id="7:1655"
                >
                  <div
                    className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[1.55] min-h-px relative w-full whitespace-nowrap"
                    data-node-id="7:1656"
                  >
                    <p
                      className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[#293d35] text-[24px]"
                      data-node-id="7:1657"
                    >
                      影片標題
                    </p>
                    <p
                      className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#315e4c] text-[14px]"
                      data-node-id="7:1658"
                    >
                      影片說明
                    </p>
                  </div>
                  <a
                    className="bg-[#726497] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                    data-node-id="7:1659"
                    data-name="自我覺察"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                      data-node-id="I7:1659;4185:3781"
                    >
                      自我覺察
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="bg-[#e6eff3] content-stretch flex gap-[16px] items-start overflow-clip p-[22px] relative rounded-[20px] shrink-0 w-full"
                data-node-id="7:1660"
                data-name="影片1"
              >
                <div
                  className="bg-[#c4c4c4] content-stretch flex flex-col h-[180px] items-end justify-end p-[5px] relative rounded-[12px] shrink-0 w-[300px]"
                  data-node-id="7:1661"
                >
                  <div
                    className="bg-[#7e7e7e] content-stretch flex flex-col h-[25px] items-center justify-center relative rounded-[6px] shrink-0 w-[50px]"
                    data-node-id="7:1662"
                    data-name="影片時數"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                      data-node-id="7:1663"
                    >
                      3:45
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end justify-end min-w-px relative self-stretch"
                  data-node-id="7:1664"
                >
                  <div
                    className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[1.55] min-h-px relative w-full whitespace-nowrap"
                    data-node-id="7:1665"
                  >
                    <p
                      className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[#293d35] text-[24px]"
                      data-node-id="7:1666"
                    >
                      影片標題
                    </p>
                    <p
                      className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#315e4c] text-[14px]"
                      data-node-id="7:1667"
                    >
                      影片說明
                    </p>
                  </div>
                  <a
                    className="bg-[#726497] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                    data-node-id="7:1668"
                    data-name="自我覺察"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                      data-node-id="I7:1668;4185:3781"
                    >
                      自我覺察
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="bg-white border border-[#d6ded3] border-solid content-stretch flex flex-col items-center justify-center overflow-clip py-[10px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="7:1669"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                  data-node-id="7:1670"
                >
                  查看更多
                </p>
              </div>
            </div>
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
            <div
              className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
              data-node-id="7:1683"
              data-name="影片區"
            >
              <div
                className="bg-[#e8f0eb] content-stretch flex gap-[16px] items-start overflow-clip p-[22px] relative rounded-[20px] shrink-0 w-full"
                data-node-id="7:1684"
                data-name="影片1"
              >
                <div
                  className="bg-[#c4c4c4] content-stretch flex flex-col h-[180px] items-end justify-end p-[5px] relative rounded-[12px] shrink-0 w-[300px]"
                  data-node-id="7:1685"
                >
                  <div
                    className="bg-[#7e7e7e] content-stretch flex flex-col h-[25px] items-center justify-center relative rounded-[6px] shrink-0 w-[50px]"
                    data-node-id="7:1686"
                    data-name="影片時數"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                      data-node-id="7:1687"
                    >
                      3:45
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end justify-end min-w-px relative self-stretch"
                  data-node-id="7:1688"
                >
                  <div
                    className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[1.55] min-h-px relative w-full whitespace-nowrap"
                    data-node-id="7:1689"
                  >
                    <p
                      className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[#293d35] text-[24px]"
                      data-node-id="7:1690"
                    >
                      影片標題
                    </p>
                    <p
                      className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#315e4c] text-[14px]"
                      data-node-id="7:1691"
                    >
                      影片說明
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#e8f0eb] content-stretch flex gap-[16px] items-start overflow-clip p-[22px] relative rounded-[20px] shrink-0 w-full"
                data-node-id="7:1693"
                data-name="影片1"
              >
                <div
                  className="bg-[#c4c4c4] content-stretch flex flex-col h-[180px] items-end justify-end p-[5px] relative rounded-[12px] shrink-0 w-[300px]"
                  data-node-id="7:1694"
                >
                  <div
                    className="bg-[#7e7e7e] content-stretch flex flex-col h-[25px] items-center justify-center relative rounded-[6px] shrink-0 w-[50px]"
                    data-node-id="7:1695"
                    data-name="影片時數"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                      data-node-id="7:1696"
                    >
                      3:45
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end justify-end min-w-px relative self-stretch"
                  data-node-id="7:1697"
                >
                  <div
                    className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[1.55] min-h-px relative w-full whitespace-nowrap"
                    data-node-id="7:1698"
                  >
                    <p
                      className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[#293d35] text-[24px]"
                      data-node-id="7:1699"
                    >
                      影片標題
                    </p>
                    <p
                      className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#315e4c] text-[14px]"
                      data-node-id="7:1700"
                    >
                      影片說明
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white border border-[#d6ded3] border-solid content-stretch flex flex-col items-center justify-center overflow-clip py-[10px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="7:1702"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                  data-node-id="7:1703"
                >
                  查看更多
                </p>
              </div>
            </div>
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
            <div
              className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
              data-node-id="7:1716"
              data-name="影片區"
            >
              <div
                className="bg-[#e6eff3] content-stretch flex gap-[16px] items-start overflow-clip p-[22px] relative rounded-[20px] shrink-0 w-full"
                data-node-id="7:1717"
                data-name="影片1"
              >
                <div
                  className="bg-[#c4c4c4] content-stretch flex flex-col h-[180px] items-end justify-end p-[5px] relative rounded-[12px] shrink-0 w-[300px]"
                  data-node-id="7:1718"
                >
                  <div
                    className="bg-[#7e7e7e] content-stretch flex flex-col h-[25px] items-center justify-center relative rounded-[6px] shrink-0 w-[50px]"
                    data-node-id="7:1719"
                    data-name="影片時數"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                      data-node-id="7:1720"
                    >
                      3:45
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end justify-end min-w-px relative self-stretch"
                  data-node-id="7:1721"
                >
                  <div
                    className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[1.55] min-h-px relative w-full whitespace-nowrap"
                    data-node-id="7:1722"
                  >
                    <p
                      className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[#293d35] text-[24px]"
                      data-node-id="7:1723"
                    >
                      影片標題
                    </p>
                    <p
                      className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#315e4c] text-[14px]"
                      data-node-id="7:1724"
                    >
                      影片說明
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#e6eff3] content-stretch flex gap-[16px] items-start overflow-clip p-[22px] relative rounded-[20px] shrink-0 w-full"
                data-node-id="7:1726"
                data-name="影片1"
              >
                <div
                  className="bg-[#c4c4c4] content-stretch flex flex-col h-[180px] items-end justify-end p-[5px] relative rounded-[12px] shrink-0 w-[300px]"
                  data-node-id="7:1727"
                >
                  <div
                    className="bg-[#7e7e7e] content-stretch flex flex-col h-[25px] items-center justify-center relative rounded-[6px] shrink-0 w-[50px]"
                    data-node-id="7:1728"
                    data-name="影片時數"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                      data-node-id="7:1729"
                    >
                      3:45
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end justify-end min-w-px relative self-stretch"
                  data-node-id="7:1730"
                >
                  <div
                    className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[1.55] min-h-px relative w-full whitespace-nowrap"
                    data-node-id="7:1731"
                  >
                    <p
                      className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[#293d35] text-[24px]"
                      data-node-id="7:1732"
                    >
                      影片標題
                    </p>
                    <p
                      className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#315e4c] text-[14px]"
                      data-node-id="7:1733"
                    >
                      影片說明
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white border border-[#d6ded3] border-solid content-stretch flex flex-col items-center justify-center overflow-clip py-[10px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="7:1735"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                  data-node-id="7:1736"
                >
                  查看更多
                </p>
              </div>
            </div>
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
