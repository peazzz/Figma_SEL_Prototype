import { useEffect } from "react";

type Section = { id: string; label: string; target?: string };

export function useSectionNavigation(sections: Section[], selected: Section | undefined, navigation: object) {
  useEffect(() => {
    const tabBar = document.querySelector<HTMLElement>('[data-name="分頁主題"]');
    const body = document.querySelector<HTMLElement>('[data-name="頁面主體"]');
    if (!tabBar || !body) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }
    const tabs = Array.from(tabBar.querySelectorAll<HTMLElement>(":scope > [data-name]"));
    const candidates = Array.from(body.querySelectorAll<HTMLElement>("[data-name], p, h1, h2, h3"))
      .filter((element) => !element.closest('[data-name="八大主導覽"]'));
    const targets = sections.flatMap((section) => {
      const name = section.target ?? section.label;
      const element = candidates.find((item) => item.dataset.name === name)
        ?? candidates.find((item) => item.textContent?.trim() === name);
      return element ? [{ section, element }] : [];
    });

    function highlight(section?: Section) {
      for (const tab of tabs) {
        if (tab.dataset.name === section?.label) {
          tab.setAttribute("data-route-active", "true");
          tab.setAttribute("aria-current", "location");
        } else {
          tab.removeAttribute("data-route-active");
          tab.removeAttribute("aria-current");
        }
      }
    }

    function updateFromScroll() {
      if (window.scrollY <= 1) {
        highlight();
        return;
      }
      let readingLine = tabBar!.getBoundingClientRect().bottom + 16;
      const sidebar = body!.querySelector<HTMLElement>('[data-name="八大主導覽"]');
      if (window.innerWidth <= 900 && sidebar) {
        const bounds = sidebar.getBoundingClientRect();
        if (bounds.top <= readingLine) readingLine = Math.max(readingLine, bounds.bottom + 16);
      }
      let current: Section | undefined;
      for (const { section, element } of targets) {
        if (element.getBoundingClientRect().top <= readingLine) current = section;
      }
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = targets.at(-1)?.section ?? current;
      highlight(current);
    }

    let frame = 0;
    let skipNavigationScroll = false;
    function scheduleUpdate(event: Event) {
      if (event.type === "scroll" && skipNavigationScroll) {
        skipNavigationScroll = false;
        return;
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateFromScroll);
    }
    const initialFrame = requestAnimationFrame(() => {
      highlight(selected);
      if (selected) {
        const previousY = window.scrollY;
        targets.find(({ section }) => section.id === selected.id)?.element.scrollIntoView({ block: "start", behavior: "instant" });
        skipNavigationScroll = window.scrollY !== previousY;
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(initialFrame);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sections, selected, navigation]);
}
