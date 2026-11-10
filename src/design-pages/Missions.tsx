const assetPathPrefix = "/assets";
const img = `${assetPathPrefix}/9cf24.png`;
const imgVector11 = `${assetPathPrefix}/f69a5.svg`;
const imgVector1 = `${assetPathPrefix}/01bd7.svg`;
const imgChevronUp = `${assetPathPrefix}/279f8.svg`;

export default function Component() {
  return (
    <div
      className="bg-[#f8f8f2] content-stretch flex flex-col items-start relative size-full"
      data-node-id="7:1812"
      data-name="家庭任務館 / 架構預覽"
    >
      <div
        className="bg-white content-stretch flex gap-[16px] items-center overflow-clip px-[40px] py-[28px] relative shrink-0 w-[1440px]"
        data-node-id="7:1813"
        data-name="網站標題與帳號"
      >
        <div
          className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip relative text-[#315e4c]"
          data-node-id="7:1814"
          data-name="品牌"
        >
          <p
            className="flex-[1_0_0] font-['Noto_Serif_JP:Bold'] font-bold leading-[1.5] min-w-px relative text-[26px]"
            data-node-id="7:1815"
          >
            (Logo)品格、和諧、幸福心園地
          </p>
          <div
            className="flex flex-col font-['Noto_Sans_TC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap"
            data-node-id="7:1816"
          >
            <p>
              <span className="font-['Noto_Sans_TC:Light'] font-light leading-[1.55] text-black">
                目前登入家庭：
              </span>
              <span className="font-['Noto_Sans_TC:Bold'] font-bold leading-[1.55]">我的家庭1</span>
            </p>
          </div>
        </div>
        <div className="relative shrink-0 size-[45px]" data-node-id="7:1817" data-name="媽媽">
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
        data-node-id="7:1819"
        data-name="分頁主題"
      >
        <a
          className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1820"
          data-name="情緒天氣站"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Medium'] font-medium leading-none relative shrink-0 text-[#315e4c] text-[16px] text-left whitespace-nowrap"
            data-node-id="7:1822"
          >
            情緒天氣站
          </p>
          <div className="h-0 relative shrink-0 w-full" data-node-id="7:1824">
            <div className="absolute inset-[-1.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector11} />
            </div>
          </div>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1825"
          data-name="停一下再說"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1825;4185:3781"
          >
            停一下再說
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1826"
          data-name="角色轉轉轉"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1826;4185:3781"
          >
            角色轉轉轉
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1827"
          data-name="家庭小會議"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1827;4185:3781"
          >
            家庭小會議
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1828"
          data-name="修復小行動"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1828;4185:3781"
          >
            修復小行動
          </p>
        </a>
        <a
          className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pt-[16px] px-[12px] relative shrink-0"
          data-node-id="7:1829"
          data-name="數位同理任務"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#526b60] text-[16px] text-left whitespace-nowrap"
            data-node-id="I7:1829;4185:3781"
          >
            數位同理任務
          </p>
        </a>
      </div>
      <div
        className="content-stretch flex items-start overflow-clip relative shrink-0 w-[1440px]"
        data-node-id="7:1830"
        data-name="頁面主體"
      >
        <div
          className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative shrink-0 w-[264px]"
          data-node-id="7:1831"
          data-name="八大主導覽"
        >
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1832"
            data-name="導覽 / 家庭首頁"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1832;515:8823"
            >
              家庭品格幸福儀表板
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1833"
            data-name="導覽 / 家長陪伴學院"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1833;515:8823"
            >
              家長陪伴學院
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1834"
            data-name="導覽 / 親子故事與閱讀館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1834;515:8823"
            >
              親子故事與閱讀館
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1835"
            data-name="導覽 / 品格影音館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1835;515:8823"
            >
              品格影音館
            </p>
          </a>
          <div
            className="bg-[#315e4c] content-stretch flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1836"
            data-name="導覽 / 家庭任務館"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-none relative shrink-0 text-[16px] text-center text-white whitespace-nowrap"
              data-node-id="I7:1836;515:8823"
            >
              家庭任務館
            </p>
          </div>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1837"
            data-name="導覽 / 無3C家庭日"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1837;515:8823"
            >
              無3C家庭日
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1838"
            data-name="導覽 / SEL成長地圖"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1838;515:8823"
            >
              SEL成長地圖
            </p>
          </a>
          <a
            className="content-stretch cursor-pointer flex gap-[6px] h-[52px] items-center pl-[18px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[216px]"
            data-node-id="7:1839"
            data-name="導覽 / 資源與支持"
          >
            <p
              className="[word-break:break-word] font-['Noto_Sans_TC:Regular'] font-normal leading-none relative shrink-0 text-[#253e38] text-[16px] text-center whitespace-nowrap"
              data-node-id="I7:1839;515:8823"
            >
              資源與支持
            </p>
          </a>
        </div>
        <div
          className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[40px] relative shrink-0 w-[1176px]"
          data-node-id="7:1840"
          data-name="家庭首頁內容"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[32px] whitespace-nowrap"
            data-node-id="7:1841"
          >
            家庭任務館
          </p>
          <div className="h-0 relative shrink-0 w-[1096px]" data-node-id="7:1842">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full"
            data-node-id="7:1843"
            data-name="情緒天氣站"
          >
            <div
              className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full"
              data-node-id="7:1844"
            >
              <p
                className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[23px] whitespace-nowrap"
                data-node-id="7:1845"
              >
                情緒天氣站
              </p>
              <div
                className="relative shrink-0 size-[24px]"
                data-node-id="7:1847"
                data-name="Chevron up"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgChevronUp}
                />
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[23px] whitespace-nowrap"
            data-node-id="7:1856"
          >
            停一下再說
          </p>
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[23px] whitespace-nowrap"
            data-node-id="7:1857"
          >
            角色轉轉轉
          </p>
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[23px] whitespace-nowrap"
            data-node-id="7:1858"
          >
            家庭小會議
          </p>
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[23px] whitespace-nowrap"
            data-node-id="7:1859"
          >
            修復小行動
          </p>
          <p
            className="[word-break:break-word] font-['Noto_Sans_TC:Bold'] font-bold leading-[1.6] relative shrink-0 text-[#253e38] text-[23px] whitespace-nowrap"
            data-node-id="7:1860"
          >
            數位同理任務
          </p>
        </div>
      </div>
    </div>
  );
}
