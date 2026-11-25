import HeaderAvatar from "../components/HeaderAvatar";
import { CollapsibleSection, SectionToggle } from "../components/CollapsibleSection";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const img = `${assetPathPrefix}/9cf24.png`;
const imgVector11 = `${assetPathPrefix}/3c87e.svg`;
const imgVector1 = `${assetPathPrefix}/01bd7.svg`;
const img2 = `${assetPathPrefix}/6adc3.svg`;
const imgVector26 = `${assetPathPrefix}/9788c.svg`;
const imgBannerArrowLeft1 = `${assetPathPrefix}/52ab0.svg`;
const imgBannerArrowRight1 = `${assetPathPrefix}/6c5c4.svg`;
const imgPlus = `${assetPathPrefix}/1d156.svg`;

export default function Sel() {
  return (
    <div
      className="bg-[#f8f8f2] content-stretch flex flex-col items-start relative size-full"
      data-node-id="7:1983"
      data-name="SEL成長地圖"
    >
      <div
        className="bg-white content-stretch flex gap-[16px] items-center overflow-clip px-[40px] py-[28px] relative shrink-0 w-[1440px]"
        data-node-id="7:1984"
        data-name="網站標題與帳號"
      >
        <div
          className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip relative text-[#315e4c]"
          data-node-id="7:1985"
          data-name="品牌"
        >
          <p
            className="flex-[1_0_0] font-['Noto_Serif_JP:Bold'] font-bold leading-[1.5] min-w-px relative text-[26px]"
            data-node-id="7:1986"
          >
            (Logo)品格、和諧、幸福心園地
          </p>
          <div
            className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap"
            data-node-id="7:1987"
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
        data-node-id="7:1990"
        data-name="分頁主題"
      >
        <a
          className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1991"
          data-name="個人SEL雷達圖"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[#315e4c] text-[16px] text-left whitespace-nowrap"
            data-node-id="7:1993"
          >
            個人SEL雷達圖
          </p>
          <div className="h-0 relative shrink-0 w-full" data-node-id="7:1995">
            <div className="absolute inset-[-1.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector11} />
            </div>
          </div>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1996"
          data-name="家庭SEL練習雷達圖"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1996;4185:3781"
          >
            家庭SEL練習雷達圖
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1997"
          data-name="品格任務歷程"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1997;4185:3781"
          >
            品格任務歷程
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1998"
          data-name="家庭成長敘事月報"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1998;4185:3781"
          >
            家庭成長敘事月報
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1999"
          data-name="自訂下一步目標"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1999;4185:3781"
          >
            自訂下一步目標
          </p>
        </a>
      </div>
      <div
        className="content-stretch flex items-start overflow-clip relative shrink-0 w-[1440px]"
        data-node-id="7:2000"
        data-name="頁面主體"
      >
        <div
          className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative shrink-0 w-[264px]"
          data-node-id="7:2001"
          data-name="八大主導覽"
        >
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:2002"
            data-name="導覽 / 家庭首頁"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:2002;515:8823"
            >
              家庭品格幸福儀表板
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:2003"
            data-name="導覽 / 家長陪伴學院"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:2003;515:8823"
            >
              家長陪伴學院
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:2004"
            data-name="導覽 / 親子故事與閱讀館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:2004;515:8823"
            >
              親子故事與閱讀館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:2005"
            data-name="導覽 / 品格影音館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:2005;515:8823"
            >
              品格影音館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:2006"
            data-name="導覽 / 家庭任務館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:2006;515:8823"
            >
              家庭任務館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:2007"
            data-name="導覽 / 無3C家庭日"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:2007;515:8823"
            >
              無3C家庭日
            </p>
          </a>
          <div
            className="bg-[#315e4c] content-stretch flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:2008"
            data-name="導覽 / SEL成長地圖"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[16px] text-center text-white whitespace-nowrap"
              data-node-id="I7:2008;515:8823"
            >
              SEL成長地圖
            </p>
          </div>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:2009"
            data-name="導覽 / 資源與支持"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:2009;515:8823"
            >
              資源與支持
            </p>
          </a>
        </div>
        <div
          className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[40px] relative self-stretch shrink-0 w-[1176px]"
          data-node-id="7:2010"
          data-name="家庭首頁內容"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[32px] whitespace-nowrap"
            data-node-id="7:2011"
          >
            SEL成長地圖
          </p>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:2012">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="個人 SEL 雷達圖"
            className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full"
            data-node-id="7:2013"
            data-name="個人SEL雷達圖"
          >
            <div
              className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full"
              data-node-id="7:2014"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] min-w-px relative text-[#253e38] text-[23px]"
                data-node-id="7:2015"
              >
                個人 SEL 雷達圖
              </p>
              <SectionToggle />
            </div>
            <div
              className="bg-[#f7f9f7] content-stretch flex gap-[20px] items-start relative rounded-[12px] shrink-0 w-full"
              data-node-id="7:2025"
            >
              <div
                className="h-[294px] relative rounded-[12px] shrink-0 w-[337px]"
                data-node-id="7:2026"
              >
                <div
                  className="absolute h-[250px] left-[41px] top-[22px] w-[263px]"
                  data-node-id="7:2027"
                  data-name="雷達圖 2"
                >
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2} />
                </div>
                <p
                  className="[word-break:break-word] absolute font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] left-[74px] text-[#34443c] text-[14px] top-[250px] whitespace-nowrap"
                  data-node-id="7:2041"
                >
                  負責任決策
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] left-[208px] text-[#34443c] text-[14px] top-[250px] whitespace-nowrap"
                  data-node-id="7:2042"
                >
                  人際關係
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] left-[281px] text-[#34443c] text-[14px] top-[103px] whitespace-nowrap"
                  data-node-id="7:2043"
                >
                  社會覺察
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] left-[13px] text-[#34443c] text-[14px] top-[103px] whitespace-nowrap"
                  data-node-id="7:2044"
                >
                  自我管理
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] left-[145px] text-[#34443c] text-[14px] top-[22px] whitespace-nowrap"
                  data-node-id="7:2045"
                >
                  自我覺察
                </p>
              </div>
              <div
                className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[20px] relative self-stretch shrink-0"
                data-node-id="7:2046"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] relative shrink-0 text-[#34443c] text-[14px] whitespace-nowrap"
                  data-node-id="7:2047"
                >
                  自我察覺：7.4/10
                </p>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] relative shrink-0 text-[#34443c] text-[14px] whitespace-nowrap"
                  data-node-id="7:2048"
                >
                  自我管理：7/10
                </p>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] relative shrink-0 text-[#34443c] text-[14px] whitespace-nowrap"
                  data-node-id="7:2049"
                >
                  社會察覺：6.1/10
                </p>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] relative shrink-0 text-[#34443c] text-[14px] whitespace-nowrap"
                  data-node-id="7:2050"
                >
                  人際關係：8.5/10
                </p>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] relative shrink-0 text-[#34443c] text-[14px] whitespace-nowrap"
                  data-node-id="7:2051"
                >
                  負責任決策：5.2/10
                </p>
                <div
                  className="content-stretch flex flex-col items-start justify-end relative shrink-0"
                  data-node-id="7:2052"
                >
                  <div
                    className="bg-white border border-[#d6ded3] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[14px] relative rounded-[12px] shrink-0 w-full"
                    data-node-id="7:2053"
                    data-name="查看完整分析"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                      data-node-id="I7:2053;4185:3781"
                    >
                      查看完整分析 →
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative self-stretch shrink-0 w-0" data-node-id="7:2054">
                <div className="absolute inset-[0_-0.5px]">
                  <img alt="" className="block max-w-none size-full" src={imgVector26} />
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col font-['Noto_Sans_TC:Regular'] font-normal gap-[10px] items-start justify-center p-[20px] relative shrink-0 text-[#315e4c] text-[14px]"
                data-node-id="7:2055"
              >
                <p
                  className="leading-[1.6] relative shrink-0 whitespace-nowrap"
                  data-node-id="7:2056"
                >
                  診斷結果（範例）
                </p>
                <ul
                  className="block leading-[0] list-disc relative shrink-0 w-[474px]"
                  data-node-id="7:2057"
                >
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.6]">{`雖然處理事情並不靈活，但是做事態度專心一致，且能不屈不撓踏實自在的工作。 `}</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.6]">
                      厭惡被動而引人注目之工作，僅追求安定的平凡主義。
                      對他人的言行具忍耐力，與人相處態度超然，感情不輕易投入。
                    </span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.6]">{`處事相當冷靜，有時過於理性，稍顯待人冷漠。 `}</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.6]">{`獨立自主性高，決斷力強，但承襲傳統意識強烈，對新的嚐試或變化容易抱持抵制或反抗的態度。 `}</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.6]">{`處事相當深思熟慮，對於事情分析頗為周延，並能掌握客觀狀況，因應各種變化。 `}</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[1.6]">神經細膩敏銳，做任何事都非常的用心。</span>
                  </li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:2058">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            data-node-id="7:2059"
            data-name="家庭SEL練習雷達圖"
          >
            <div
              className="[word-break:break-word] content-stretch flex gap-[16px] items-center leading-[1.6] relative shrink-0 w-full whitespace-nowrap"
              data-node-id="7:2060"
            >
              <p
                className="font-['Noto_Sans_TC:Bold'] font-bold relative shrink-0 text-[#253e38] text-[23px]"
                data-node-id="7:2061"
              >
                家庭 SEL 練習雷達圖
              </p>
              <p
                className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#69786f] text-[14px]"
                data-node-id="7:2062"
              >
                綜合家庭成員SEL能力
              </p>
            </div>
            <div
              className="bg-[#f7f9f7] content-stretch flex gap-[20px] items-start relative rounded-[12px] shrink-0 w-full"
              data-node-id="7:2063"
            >
              <div
                className="h-[294px] relative rounded-[12px] shrink-0 w-[337px]"
                data-node-id="7:2064"
              >
                <div
                  className="absolute h-[250px] left-[41px] top-[22px] w-[263px]"
                  data-node-id="7:2065"
                  data-name="雷達圖 2"
                >
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2} />
                </div>
                <p
                  className="[word-break:break-word] absolute font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] left-[74px] text-[#34443c] text-[14px] top-[250px] whitespace-nowrap"
                  data-node-id="7:2079"
                >
                  負責任決策
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] left-[208px] text-[#34443c] text-[14px] top-[250px] whitespace-nowrap"
                  data-node-id="7:2080"
                >
                  人際關係
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] left-[281px] text-[#34443c] text-[14px] top-[103px] whitespace-nowrap"
                  data-node-id="7:2081"
                >
                  社會覺察
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] left-[13px] text-[#34443c] text-[14px] top-[103px] whitespace-nowrap"
                  data-node-id="7:2082"
                >
                  自我管理
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] left-[145px] text-[#34443c] text-[14px] top-[22px] whitespace-nowrap"
                  data-node-id="7:2083"
                >
                  自我覺察
                </p>
              </div>
              <div
                className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[20px] relative self-stretch shrink-0"
                data-node-id="7:2084"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] relative shrink-0 text-[#34443c] text-[14px] whitespace-nowrap"
                  data-node-id="7:2085"
                >
                  自我察覺：7.4/10
                </p>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] relative shrink-0 text-[#34443c] text-[14px] whitespace-nowrap"
                  data-node-id="7:2086"
                >
                  自我管理：7/10
                </p>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] relative shrink-0 text-[#34443c] text-[14px] whitespace-nowrap"
                  data-node-id="7:2087"
                >
                  社會察覺：6.1/10
                </p>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] relative shrink-0 text-[#34443c] text-[14px] whitespace-nowrap"
                  data-node-id="7:2088"
                >
                  人際關係：8.5/10
                </p>
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.6] relative shrink-0 text-[#34443c] text-[14px] whitespace-nowrap"
                  data-node-id="7:2089"
                >
                  負責任決策：5.2/10
                </p>
                <div
                  className="content-stretch flex flex-col items-start justify-end relative shrink-0"
                  data-node-id="7:2090"
                >
                  <div
                    className="bg-white border border-[#d6ded3] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[14px] relative rounded-[12px] shrink-0 w-full"
                    data-node-id="7:2091"
                    data-name="查看完整分析"
                  >
                    <p
                      className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                      data-node-id="I7:2091;4185:3781"
                    >
                      查看完整分析 →
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative self-stretch shrink-0 w-0" data-node-id="7:2092">
                <div className="absolute inset-[0_-0.5px]">
                  <img alt="" className="block max-w-none size-full" src={imgVector26} />
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col font-['Noto_Sans_TC:Regular'] font-normal gap-[10px] items-start justify-center p-[20px] relative shrink-0 text-[#315e4c] text-[14px]"
                data-node-id="7:2093"
              >
                <p
                  className="leading-[1.6] relative shrink-0 whitespace-nowrap"
                  data-node-id="7:2094"
                >
                  診斷結果（範例）
                </p>
                <ul
                  className="block leading-[0] list-disc relative shrink-0 w-[474px]"
                  data-node-id="7:2095"
                >
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.6]">{`雖然處理事情並不靈活，但是做事態度專心一致，且能不屈不撓踏實自在的工作。 `}</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.6]">
                      厭惡被動而引人注目之工作，僅追求安定的平凡主義。
                      對他人的言行具忍耐力，與人相處態度超然，感情不輕易投入。
                    </span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.6]">{`處事相當冷靜，有時過於理性，稍顯待人冷漠。 `}</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.6]">{`獨立自主性高，決斷力強，但承襲傳統意識強烈，對新的嚐試或變化容易抱持抵制或反抗的態度。 `}</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.6]">{`處事相當深思熟慮，對於事情分析頗為周延，並能掌握客觀狀況，因應各種變化。 `}</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[1.6]">神經細膩敏銳，做任何事都非常的用心。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:2098">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="品格任務歷程"
            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            data-node-id="7:2099"
            data-name="品格任務歷程"
          >
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
              data-node-id="7:2100"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] min-w-px relative text-[#253e38] text-[23px]"
                data-node-id="7:2101"
              >
                品格任務歷程
              </p>
              <SectionToggle />
            </div>
            <div
              className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
              data-node-id="7:2103"
            >
              <div
                className="content-stretch flex gap-[12px] items-center relative rounded-[10px] shrink-0 w-full"
                data-node-id="7:2104"
                data-name="品格主題"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                  data-node-id="7:2105"
                >
                  品格主題：
                </p>
                <a
                  className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                  data-node-id="7:2106"
                  data-name="全部"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                    data-node-id="I7:2106;4185:3781"
                  >
                    全部
                  </p>
                </a>
                <a
                  className="bg-[#315e4c] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                  data-node-id="7:2107"
                  data-name="誠實與信任"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                    data-node-id="I7:2107;4185:3781"
                  >
                    誠實與信任
                  </p>
                </a>
                <a
                  className="bg-[#315e4c] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                  data-node-id="7:2108"
                  data-name="自律與毅力"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                    data-node-id="I7:2108;4185:3781"
                  >
                    自律與毅力
                  </p>
                </a>
                <a
                  className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                  data-node-id="7:2109"
                  data-name="關懷與同理"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                    data-node-id="I7:2109;4185:3781"
                  >
                    關懷與同理
                  </p>
                </a>
                <a
                  className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                  data-node-id="7:2110"
                  data-name="勇氣與正義"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                    data-node-id="I7:2110;4185:3781"
                  >
                    勇氣與正義
                  </p>
                </a>
                <a
                  className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                  data-node-id="7:2111"
                  data-name="尊重與界線"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                    data-node-id="I7:2111;4185:3781"
                  >
                    尊重與界線
                  </p>
                </a>
                <a
                  className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                  data-node-id="7:2112"
                  data-name="責任與貢獻"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                    data-node-id="I7:2112;4185:3781"
                  >
                    責任與貢獻
                  </p>
                </a>
                <a
                  className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                  data-node-id="7:2113"
                  data-name="公平與合作"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                    data-node-id="I7:2113;4185:3781"
                  >
                    公平與合作
                  </p>
                </a>
                <a
                  className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                  data-node-id="7:2114"
                  data-name="感恩與公民責任"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[#315e4c] text-[12px] text-left whitespace-nowrap"
                    data-node-id="I7:2114;4185:3781"
                  >
                    感恩與公民責任
                  </p>
                </a>
              </div>
              <div
                className="content-stretch flex gap-[16px] items-center relative shrink-0"
                data-node-id="7:2115"
                data-name="完成日期"
              >
                <p
                  className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                  data-node-id="7:2116"
                >
                  完成日期：
                </p>
                <div
                  className="content-stretch flex gap-[10px] items-center relative shrink-0"
                  data-node-id="7:2117"
                >
                  <div
                    className="bg-[#f0f0f0] border border-black border-solid content-stretch flex items-start overflow-clip p-[10px] relative rounded-[5px] shrink-0"
                    data-node-id="7:2118"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#293d35] text-[20px] text-center whitespace-nowrap"
                      data-node-id="7:2119"
                    >
                      <p className="leading-none">2026/3/29</p>
                    </div>
                  </div>
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center whitespace-nowrap"
                    data-node-id="7:2120"
                  >
                    <p className="leading-none">~</p>
                  </div>
                  <div
                    className="bg-[#f0f0f0] border border-black border-solid content-stretch flex items-start overflow-clip p-[10px] relative rounded-[5px] shrink-0"
                    data-node-id="7:2121"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#293d35] text-[20px] text-center whitespace-nowrap"
                      data-node-id="7:2122"
                    >
                      <p className="leading-none">2026/11/4</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[12px] items-end justify-center relative shrink-0 w-full"
                data-node-id="7:2123"
                data-name="任務清單"
              >
                <div className="h-[240px] relative shrink-0 w-full" data-node-id="7:2124">
                  <div
                    className="absolute content-stretch flex items-center justify-center left-0 overflow-clip right-0 top-0"
                    data-node-id="7:2125"
                  >
                    <div
                      className="content-stretch flex gap-[10px] items-center relative shrink-0"
                      data-node-id="7:2126"
                    >
                      <div
                        className="bg-[#ffe6e6] content-stretch flex flex-col gap-[10px] h-[240px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[200px]"
                        data-node-id="7:2127"
                      >
                        <div
                          className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] min-h-px relative text-[#293d35] text-[24px] text-center w-full"
                          data-node-id="7:2128"
                        >
                          <p className="leading-none">任務名稱</p>
                        </div>
                        <div
                          className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0 w-full"
                          data-node-id="7:2129"
                        >
                          <a
                            className="bg-[#726497] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                            data-node-id="7:2130"
                            data-name="誠實與信任"
                          >
                            <p
                              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                              data-node-id="I7:2130;4185:3781"
                            >
                              誠實與信任
                            </p>
                          </a>
                          <p
                            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#64766f] text-[12px] whitespace-nowrap"
                            data-node-id="7:2131"
                          >
                            完成日期：2026/4/1
                          </p>
                        </div>
                      </div>
                      <div
                        className="bg-[#ffe6e6] content-stretch flex flex-col gap-[10px] h-[240px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[200px]"
                        data-node-id="7:2132"
                      >
                        <div
                          className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] min-h-px relative text-[#293d35] text-[24px] text-center w-full"
                          data-node-id="7:2133"
                        >
                          <p className="leading-none">任務名稱</p>
                        </div>
                        <div
                          className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0 w-full"
                          data-node-id="7:2134"
                        >
                          <a
                            className="bg-[#726497] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                            data-node-id="7:2135"
                            data-name="誠實與信任"
                          >
                            <p
                              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                              data-node-id="I7:2135;4185:3781"
                            >
                              誠實與信任
                            </p>
                          </a>
                          <p
                            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#64766f] text-[12px] whitespace-nowrap"
                            data-node-id="7:2136"
                          >
                            完成日期：2026/4/3
                          </p>
                        </div>
                      </div>
                      <div
                        className="bg-[#ffe6e6] content-stretch flex flex-col gap-[10px] h-[240px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[200px]"
                        data-node-id="7:2137"
                      >
                        <div
                          className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] min-h-px relative text-[#293d35] text-[24px] text-center w-full"
                          data-node-id="7:2138"
                        >
                          <p className="leading-none">任務名稱</p>
                        </div>
                        <div
                          className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0 w-full"
                          data-node-id="7:2139"
                        >
                          <a
                            className="bg-[#726497] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                            data-node-id="7:2140"
                            data-name="誠實與信任"
                          >
                            <p
                              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                              data-node-id="I7:2140;4185:3781"
                            >
                              誠實與信任
                            </p>
                          </a>
                          <p
                            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#64766f] text-[12px] whitespace-nowrap"
                            data-node-id="7:2141"
                          >
                            完成日期：2026/4/4
                          </p>
                        </div>
                      </div>
                      <div
                        className="bg-[#ffe6e6] content-stretch flex flex-col gap-[10px] h-[240px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[200px]"
                        data-node-id="7:2142"
                      >
                        <div
                          className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] min-h-px relative text-[#293d35] text-[24px] text-center w-full"
                          data-node-id="7:2143"
                        >
                          <p className="leading-none">任務名稱</p>
                        </div>
                        <div
                          className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0 w-full"
                          data-node-id="7:2144"
                        >
                          <a
                            className="bg-[#726497] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                            data-node-id="7:2145"
                            data-name="自律與毅力"
                          >
                            <p
                              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                              data-node-id="I7:2145;4185:3781"
                            >
                              自律與毅力
                            </p>
                          </a>
                          <p
                            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#64766f] text-[12px] whitespace-nowrap"
                            data-node-id="7:2146"
                          >
                            完成日期：2026/4/7
                          </p>
                        </div>
                      </div>
                      <div
                        className="bg-[#ffe6e6] content-stretch flex flex-col gap-[10px] h-[240px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[200px]"
                        data-node-id="7:2147"
                      >
                        <div
                          className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] min-h-px relative text-[#293d35] text-[24px] text-center w-full"
                          data-node-id="7:2148"
                        >
                          <p className="leading-none">任務名稱</p>
                        </div>
                        <div
                          className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0 w-full"
                          data-node-id="7:2149"
                        >
                          <a
                            className="bg-[#726497] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                            data-node-id="7:2150"
                            data-name="自律與毅力"
                          >
                            <p
                              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                              data-node-id="I7:2150;4185:3781"
                            >
                              自律與毅力
                            </p>
                          </a>
                          <p
                            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#64766f] text-[12px] whitespace-nowrap"
                            data-node-id="7:2151"
                          >
                            完成日期：2026/4/9
                          </p>
                        </div>
                      </div>
                      <div
                        className="bg-[#ffe6e6] content-stretch flex flex-col gap-[10px] h-[240px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[200px]"
                        data-node-id="7:2152"
                      >
                        <div
                          className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_TC:Medium'] font-medium justify-center leading-[0] min-h-px relative text-[#293d35] text-[24px] text-center w-full"
                          data-node-id="7:2153"
                        >
                          <p className="leading-none">任務名稱</p>
                        </div>
                        <div
                          className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0 w-full"
                          data-node-id="7:2154"
                        >
                          <a
                            className="bg-[#726497] content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                            data-node-id="7:2155"
                            data-name="自律與毅力"
                          >
                            <p
                              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[12px] text-left text-white whitespace-nowrap"
                              data-node-id="I7:2155;4185:3781"
                            >
                              自律與毅力
                            </p>
                          </a>
                          <p
                            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#64766f] text-[12px] whitespace-nowrap"
                            data-node-id="7:2156"
                          >
                            完成日期：2026/4/9
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute content-stretch flex items-center justify-between left-0 top-[91px] w-[1096px]"
                    data-node-id="7:2157"
                  >
                    <div
                      className="relative shrink-0 size-[44px]"
                      data-node-id="7:2158"
                      data-name="banner-arrow-left 1"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgBannerArrowLeft1}
                      />
                    </div>
                    <div
                      className="relative shrink-0 size-[44px]"
                      data-node-id="7:2161"
                      data-name="banner-arrow-right 1"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgBannerArrowRight1}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex items-center justify-end relative shrink-0 w-full"
                  data-node-id="7:2165"
                >
                  <a
                    className="bg-white border border-[#315e4c] border-solid content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0"
                    data-node-id="7:2166"
                    data-name="展開全部"
                  >
                    <div
                      className="relative shrink-0 size-[16px]"
                      data-node-id="I7:2166;4185:3780"
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
                      data-node-id="I7:2166;4185:3781"
                    >
                      展開全部
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </CollapsibleSection>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:2167">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="家庭成長敘事月報"
            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            data-node-id="7:2168"
            data-name="家庭成長敘事月報"
          >
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
              data-node-id="7:2169"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] min-w-px relative text-[#253e38] text-[23px]"
                data-node-id="7:2170"
              >
                家庭成長敘事月報
              </p>
              <SectionToggle />
            </div>
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0"
              data-node-id="7:2172"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#315e4c] text-[16px] whitespace-nowrap"
                data-node-id="7:2173"
              >
                月份：
              </p>
              <div
                className="bg-[#f0f0f0] border border-black border-solid content-stretch flex items-start overflow-clip p-[10px] relative rounded-[5px] shrink-0"
                data-node-id="7:2174"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#293d35] text-[20px] text-center whitespace-nowrap"
                  data-node-id="7:2175"
                >
                  <p className="leading-none">2026/11</p>
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] bg-[#eaf2f7] content-stretch flex flex-col font-['Noto_Sans_TC:Regular'] font-normal gap-[10px] h-[460px] items-end justify-center overflow-clip p-[22px] relative rounded-[20px] shrink-0 w-full"
              data-node-id="7:2176"
              data-name="家庭成長敘事月報"
            >
              <div
                className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-full relative text-[24px] text-black w-[min-content]"
                data-node-id="7:2177"
              >
                <ul className="list-disc">
                  <li className="mb-[10px] ms-[36px]">
                    <span className="leading-[1.55]">
                      本月我們一家最常練習的是「自我管理」與「人際關係」。
                    </span>
                  </li>
                  <li className="mb-[10px] ms-[36px]">
                    <span className="leading-[1.55]">
                      我們一起看了「汪汪在哪裡？」的影片，我們也慢慢在手足衝突中，學會使用使用「先命名情緒，再討論規則」的策略。
                    </span>
                  </li>
                  <li className="ms-[36px]">
                    <span className="leading-[1.55]">
                      我們家「無3C家庭日」已進行兩次！第一次好困難呀（自我評分僅有３分），但第二次我們一起以桌遊與炒菜替代手機使用了！下個月我們也想要繼續試試看！
                    </span>
                  </li>
                </ul>
              </div>
              <p
                className="leading-none relative shrink-0 text-[#64766f] text-[12px] text-center whitespace-nowrap"
                data-node-id="7:2178"
              >
                生成日期：2026/11/5
              </p>
            </div>
          </CollapsibleSection>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:2179">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="自訂下一步目標" empty
            className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
            data-node-id="7:2180"
          >
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] min-w-px relative text-[#253e38] text-[23px]"
              data-node-id="7:2181"
            >
              自訂下一步目標
            </p>
            <SectionToggle />
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
}
