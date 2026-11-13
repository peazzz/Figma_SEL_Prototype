import { Children, cloneElement, createContext, isValidElement, useContext, useId, useRef, useState, useEffect, type HTMLAttributes, type ReactNode } from "react";

type ContentProps = { children?: ReactNode; hidden?: boolean; style?: React.CSSProperties };
const CollapseContext = createContext({ expanded: true, toggle: () => {}, id: "", label: "", empty: false });

function hasToggle(node: ReactNode): boolean {
  return Children.toArray(node).some((child) => isValidElement<ContentProps>(child) &&
    (child.type === SectionToggle || hasToggle(child.props.children)));
}

function hasCollapsibleContent(children: ReactNode): boolean {
  const items = Children.toArray(children);
  if (items.some((item) => isValidElement(item) && item.type === SectionToggle)) return false;
  return items.some((item) => isValidElement<ContentProps>(item) &&
    (!hasToggle(item) || hasCollapsibleContent(item.props.children)));
}
function renderContents(children: ReactNode, expanded: boolean): ReactNode {
  const items = Children.toArray(children);
  // Keep the complete title row, including its description and toggle.
  if (items.some((item) => isValidElement(item) && item.type === SectionToggle)) return children;
  return items.map((item) => {
    if (!isValidElement<ContentProps>(item)) return item;
    if (hasToggle(item)) return cloneElement(item, {}, renderContents(item.props.children, expanded));
    return cloneElement(item, expanded ? {} : { hidden: true, style: { ...item.props.style, display: "none" } });
  });
}

export function CollapsibleSection({ children, label, empty = false, ...props }: HTMLAttributes<HTMLDivElement> & { label: string; empty?: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    const expand = () => setExpanded(true);
    element?.addEventListener("expand-section", expand);
    return () => element?.removeEventListener("expand-section", expand);
  }, []);
  return (
    <CollapseContext.Provider value={{ expanded, toggle: () => setExpanded((value) => !value), id, label, empty: empty || !hasCollapsibleContent(children) }}>
      <div {...props} ref={root} id={id} data-collapsible-section="" data-collapsed={!expanded}>
        {renderContents(children, expanded)}
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
      <img src="/assets/279f8.svg" alt="" style={{ transform: expanded ? undefined : "rotate(180deg)" }} />
    </button>
  );
}
