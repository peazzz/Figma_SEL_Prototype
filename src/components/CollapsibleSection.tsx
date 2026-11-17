import { Children, cloneElement, createContext, isValidElement, useContext, useId, useRef, useState, useEffect, type HTMLAttributes, type ReactNode } from "react";

type ContentProps = HTMLAttributes<HTMLElement>;
const CollapseContext = createContext({ expanded: true, toggle: () => {}, id: "", label: "", empty: false });

function hasToggle(node: ReactNode): boolean {
  return Children.toArray(node).some((child) => isValidElement<ContentProps>(child) &&
    (child.type === SectionToggle || (child.type !== CollapsibleSection && hasToggle(child.props.children))));
}

function hasCollapsibleContent(children: ReactNode): boolean {
  const items = Children.toArray(children);
  if (items.some((item) => isValidElement(item) && item.type === SectionToggle)) return false;
  return items.some((item) => isValidElement<ContentProps>(item) &&
    (!hasToggle(item) || hasCollapsibleContent(item.props.children)));
}
function renderContents(children: ReactNode, expanded: boolean, toggle: () => void, empty: boolean): ReactNode {
  const items = Children.toArray(children);
  // Keep the complete title row, including its description and toggle.
  if (items.some((item) => isValidElement(item) && item.type === SectionToggle)) return children;
  return items.map((item) => {
    if (!isValidElement<ContentProps>(item)) return item;
    if (hasToggle(item)) {
      const isTitleRow = Children.toArray(item.props.children).some((child) => isValidElement(child) && child.type === SectionToggle);
      return cloneElement(item, isTitleRow && !empty ? {
        style: { ...item.props.style, cursor: "pointer" },
        onClick: (event: React.MouseEvent<HTMLElement>) => {
          event.stopPropagation();
          // Keep links and other controls in the row independent.
          if ((event.target as HTMLElement).closest("button, a, input, select, textarea")) return;
          toggle();
        },
      } : {}, renderContents(item.props.children, expanded, toggle, empty));
    }
    // Custom components may not forward hidden/style to their rendered element.
    if (typeof item.type !== "string") {
      return <div key={item.key} hidden={!expanded} style={{ display: expanded ? "contents" : "none" }}>{item}</div>;
    }
    return cloneElement(item, expanded ? {} : { hidden: true, style: { ...item.props.style, display: "none" } });
  });
}

export function CollapsibleSection({ children, label, empty = false, defaultExpanded = true, ...props }: HTMLAttributes<HTMLDivElement> & { label: string; empty?: boolean; defaultExpanded?: boolean }) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    const expand = () => setExpanded(true);
    element?.addEventListener("expand-section", expand);
    return () => element?.removeEventListener("expand-section", expand);
  }, []);
  const isEmpty = empty || !hasCollapsibleContent(children);
  const toggle = () => setExpanded((value) => !value);
  return (
    <CollapseContext.Provider value={{ expanded, toggle, id, label, empty: isEmpty }}>
      <div {...props} ref={root} id={id} data-collapsible-section="" data-collapsed={!expanded}>
        {renderContents(children, expanded, toggle, isEmpty)}
      </div>
    </CollapseContext.Provider>
  );
}

export function SectionToggle() {
  const { expanded, toggle, id, label, empty } = useContext(CollapseContext);
  return (
    <button type="button" className="section-toggle" aria-label={empty ? `${label}（尚無可收合內容）` : `${expanded ? "收合" : "展開"}${label}`}
      aria-expanded={empty ? undefined : expanded} aria-controls={id} disabled={empty}
      title={empty ? "此區塊目前只有標題，尚無可收合內容" : undefined}
      onClick={(event) => { event.stopPropagation(); toggle(); }}>
      <img src={`${import.meta.env.BASE_URL}assets/279f8.svg`} alt="" style={{ transform: expanded ? undefined : "rotate(180deg)" }} />
    </button>
  );
}
