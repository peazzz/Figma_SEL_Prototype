import { useEffect, useState } from "react";

export const repairSteps = [
  { title: "承認", lines: ["家長：剛才趕著出門，我對你說話太大聲了。", "孩子：我被嚇到了。", "家長：我聽到了。我願意為剛才的語氣負責。"], prompt: "我願意承認自己做了什麼？" },
  { title: "傾聽", lines: ["家長：剛才怎麼了？我想聽你說。", "孩子：我找不到鞋子，你又一直催我。", "家長：你已經很急了，還被催，心裡很難受，對嗎？"], prompt: "我聽見對方在意什麼？" },
  { title: "道歉", lines: ["家長：對不起，我剛才用吼的催你。", "孩子：我不喜歡你這樣說。", "家長：謝謝你告訴我。下次我會走過來，好好說。"], prompt: "我想為哪個具體行為道歉？" },
  { title: "補救", lines: ["家長：現在我可以做什麼，讓你好過一點？", "孩子：可以陪我一起找鞋子嗎？", "家長：好，你看鞋櫃，我看門邊。"], prompt: "我可以做哪一件事來補救？" },
  { title: "重新約定", lines: ["家長：明天出門前，我們怎麼做會比較從容？", "孩子：我想睡前先把鞋子放在門口。", "家長：好，我會提早提醒你。我們明天一起試試看。"], prompt: "我們想試試什麼新約定？" },
];

export function RepairDetail({ step, onBack }: { step: typeof repairSteps[number]; onBack: () => void }) {
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(false);
  const key = "academy-repair-note-" + step.title;
  const [note, setNote] = useState(() => sessionStorage.getItem(key) ?? "");
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (frame < step.lines.length - 1) setFrame(frame + 1);
      else setPlaying(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, [playing, frame, step]);
  return <article className="story-library-body space-y-4">
    <button type="button" className="underline" onClick={onBack}>← 返回卡片</button>
    <h3 className="font-bold">案例影片 · 情境對話示範</h3>
    <div className="rounded-xl bg-[#e8f0eb] p-5">
      <p aria-live="polite">{step.lines[frame]}</p>
      <button type="button" className="mt-4 underline" onClick={() => {
        if (!playing && frame === step.lines.length - 1) setFrame(0);
        setPlaying(!playing);
      }}>{playing ? "暫停" : frame === step.lines.length - 1 ? "重播" : "播放"}示範</button>
    </div>
    <label className="block"><strong>行動紀錄</strong><span className="block">{step.prompt}</span>
      <textarea className="mt-2 w-full rounded-lg border p-3" rows={3} value={note} onChange={event => {
        setNote(event.target.value);
        sessionStorage.setItem(key, event.target.value);
      }} />
    </label>
  </article>;
}
