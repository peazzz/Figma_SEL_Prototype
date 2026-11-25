import AgeStoryLibrary from "../components/AgeStoryLibrary";
import CharacterActionTasks from "../components/CharacterActionTasks";
import RoleModelStoryLibrary from "../components/RoleModelStoryLibrary";
import HeaderAvatar from "../components/HeaderAvatar";
import { CollapsibleSection, SectionToggle } from "../components/CollapsibleSection";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const img = `${assetPathPrefix}/9cf24.png`;
const imgVector11 = `${assetPathPrefix}/23674.svg`;
const imgVector1 = `${assetPathPrefix}/01bd7.svg`;

export default function Component() {
  return (
    <div
      className="bg-[#f8f8f2] content-stretch flex flex-col items-start relative size-full"
      data-node-id="7:1353"
      data-name="親子故事與閱讀館"
    >
      <div
        className="bg-white content-stretch flex gap-[16px] items-center overflow-clip px-[40px] py-[28px] relative shrink-0 w-[1440px]"
        data-node-id="7:1354"
        data-name="網站標題與帳號"
      >
        <div
          className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip relative text-[#315e4c]"
          data-node-id="7:1355"
          data-name="品牌"
        >
          <p
            className="flex-[1_0_0] font-['Noto_Serif_JP:Bold'] font-bold leading-[1.5] min-w-px relative text-[26px]"
            data-node-id="7:1356"
          >
            (Logo)品格、和諧、幸福心園地
          </p>
          <div
            className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap"
            data-node-id="7:1357"
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
        data-node-id="7:1360"
        data-name="分頁主題"
      >
        <a
          className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1361"
          data-name="分齡故事"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[#315e4c] text-[16px] text-left whitespace-nowrap"
            data-node-id="7:1363"
          >
            分齡故事
          </p>
          <div className="h-0 relative shrink-0 w-full" data-node-id="7:1365">
            <div className="absolute inset-[-1.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector11} />
            </div>
          </div>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1366"
          data-name="偉人與標竿人物故事"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1366;4185:3781"
          >
            偉人與標竿人物故事
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1367"
          data-name="導讀教學"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1367;4185:3781"
          >
            導讀教學
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1368"
          data-name="品格行動延伸任務"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1368;4185:3781"
          >
            品格行動延伸任務
          </p>
        </a>
      </div>
      <div
        className="content-stretch flex items-start overflow-clip relative shrink-0 w-[1440px]"
        data-node-id="7:1369"
        data-name="頁面主體"
      >
        <div
          className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative shrink-0 w-[264px]"
          data-node-id="7:1370"
          data-name="八大主導覽"
        >
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1371"
            data-name="導覽 / 家庭首頁"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1371;515:8823"
            >
              家庭品格幸福儀表板
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1372"
            data-name="導覽 / 家長陪伴學院"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1372;515:8823"
            >
              家長陪伴學院
            </p>
          </a>
          <div
            className="bg-[#315e4c] content-stretch flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1373"
            data-name="導覽 / 親子故事與閱讀館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[16px] text-center text-white whitespace-nowrap"
              data-node-id="I7:1373;515:8823"
            >
              親子故事與閱讀館
            </p>
          </div>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1374"
            data-name="導覽 / 品格影音館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1374;515:8823"
            >
              品格影音館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1375"
            data-name="導覽 / 家庭任務館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1375;515:8823"
            >
              家庭任務館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1376"
            data-name="導覽 / 無3C家庭日"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1376;515:8823"
            >
              無3C家庭日
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1377"
            data-name="導覽 / SEL成長地圖"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1377;515:8823"
            >
              SEL成長地圖
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1378"
            data-name="導覽 / 資源與支持"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1378;515:8823"
            >
              資源與支持
            </p>
          </a>
        </div>
        <div
          className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[40px] relative self-stretch shrink-0 w-[1176px]"
          data-node-id="7:1379"
          data-name="家庭首頁內容"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[30px] whitespace-nowrap"
            data-node-id="7:1380"
          >
            親子故事與閱讀館
          </p>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:1381">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="分齡故事" className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="7:1382" data-name="分齡故事">
            <div className="flex items-center gap-[12px] w-full"><h2 className="font-['Noto_Sans_TC:Bold'] text-[23px] font-bold leading-[1.6] text-[#253e38]">分齡故事</h2><SectionToggle /></div>
            <AgeStoryLibrary />
          </CollapsibleSection>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:1458">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="偉人與標竿人物故事"
            className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full"
            data-node-id="7:1459"
            data-name="偉人與標竿人物故事"
          >
            <div
              className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full"
              data-node-id="7:1460"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] min-w-px relative text-[#253e38] text-[23px]"
                data-node-id="7:1461"
              >
                偉人與標竿人物故事
              </p>
              <SectionToggle />
            </div>
            <RoleModelStoryLibrary />
          </CollapsibleSection>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:1509">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="導讀教學"
            className="grid w-full shrink-0 grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5"
            data-node-id="7:1510"
            data-name="導讀教學"
          >
            <div
              className="col-span-2 flex w-full items-center gap-7"
              data-node-id="7:1511"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] min-w-px relative text-[#253e38] text-[23px]"
                data-node-id="7:1512"
              >
                導讀教學
              </p>
              <SectionToggle />
            </div>
            <div
              className="flex min-w-0 flex-col items-start gap-3 rounded-[20px] bg-white p-3 sm:p-4 xl:flex-row"
              data-node-id="7:1514"
              data-name="影片1"
            >
              <div
                className="flex aspect-video w-full shrink-0 items-end justify-end rounded-[12px] bg-[#c4c4c4] p-[5px] xl:w-1/2"
                data-node-id="7:1515"
              >
                <div
                  className="bg-[#7e7e7e] content-stretch flex flex-col h-[25px] items-center justify-center relative rounded-[6px] shrink-0 w-[50px]"
                  data-node-id="7:1516"
                  data-name="影片時數"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    data-node-id="7:1517"
                  >
                    3:45
                  </p>
                </div>
              </div>
              <div
                className="order-first min-w-0 self-start xl:order-none xl:flex-1"
                data-node-id="7:1518"
              >
                <div
                  className="flex w-full flex-col items-start gap-2 leading-[1.55]"
                  data-node-id="7:1519"
                >
                  <p
                    className="font-['Noto_Sans_TC:Bold'] text-base font-bold text-[#293d35] sm:text-xl"
                    data-node-id="7:1520"
                  >
                    親子共讀影片
                  </p>
                  <p
                    className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#315e4c] text-[14px]"
                    data-node-id="7:1521"
                  >
                    影片說明
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex min-w-0 flex-col items-start gap-3 rounded-[20px] bg-white p-3 sm:p-4 xl:flex-row"
              data-node-id="7:1523"
              data-name="影片1"
            >
              <div
                className="flex aspect-video w-full shrink-0 items-end justify-end rounded-[12px] bg-[#c4c4c4] p-[5px] xl:w-1/2"
                data-node-id="7:1524"
              >
                <div
                  className="bg-[#7e7e7e] content-stretch flex flex-col h-[25px] items-center justify-center relative rounded-[6px] shrink-0 w-[50px]"
                  data-node-id="7:1525"
                  data-name="影片時數"
                >
                  <p
                    className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-[1.55] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    data-node-id="7:1526"
                  >
                    3:45
                  </p>
                </div>
              </div>
              <div
                className="order-first min-w-0 self-start xl:order-none xl:flex-1"
                data-node-id="7:1527"
              >
                <div
                  className="flex w-full flex-col items-start gap-2 leading-[1.55]"
                  data-node-id="7:1528"
                >
                  <p
                    className="font-['Noto_Sans_TC:Bold'] text-base font-bold text-[#293d35] sm:text-xl"
                    data-node-id="7:1529"
                  >
                    導讀示範
                  </p>
                  <p
                    className="font-['Noto_Sans_TC:Regular'] font-normal relative shrink-0 text-[#315e4c] text-[14px]"
                    data-node-id="7:1530"
                  >
                    影片說明
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:1532">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <CollapsibleSection label="品格行動延伸任務"
            className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
            data-node-id="7:1533"
          >
            <div
              className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full"
              data-node-id="7:1534"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] min-w-px relative text-[#253e38] text-[23px]"
                data-node-id="7:1535"
              >
                品格行動延伸任務
              </p>
              <SectionToggle />
            </div>
            <CharacterActionTasks />
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
}
