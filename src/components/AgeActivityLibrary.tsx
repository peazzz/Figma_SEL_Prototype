import { FilterableCardLibrary } from "./EmotionToolkits";

const activities = [
  { id: 1, age: "0~3歲", kind: "動一動", title: "小手跟著節奏拍" },
  { id: 2, age: "0~3歲", kind: "親子創作", title: "一起畫出彩色雨滴" },
  { id: 3, age: "4~6歲", kind: "動一動", title: "模仿動物走一圈" },
  { id: 4, age: "4~6歲", kind: "親子創作", title: "用紙盒蓋一個家" },
  { id: 5, age: "7~9歲", kind: "動一動", title: "設計客廳障礙賽" },
  { id: 6, age: "7~9歲", kind: "親子創作", title: "自製家庭故事骰" },
  { id: 7, age: "10~12歲", kind: "動一動", title: "規劃巷弄健走路線" },
  { id: 8, age: "10~12歲", kind: "親子創作", title: "畫一套家庭桌遊" },
];

export default function AgeActivityLibrary() {
  return <FilterableCardLibrary title="分齡替代活動庫" itemLabel="活動" cards={activities} kinds={["動一動", "親子創作"]} />;
}
