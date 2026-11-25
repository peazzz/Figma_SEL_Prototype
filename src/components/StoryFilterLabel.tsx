export default function StoryFilterLabel({ label }: { label: string }) {
  const characters = [...label.slice(0, -1), `${label.slice(-1)}：`];
  return <span className="story-filter-label" aria-label={`${label}：`}>{characters.map((character, index) => <span key={index} aria-hidden="true">{character}</span>)}</span>;
}
