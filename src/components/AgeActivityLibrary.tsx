import { useCategoryFilter } from "../useCategoryFilter";
import "./AgeActivityLibrary.css";

const ages = ["0~3歲", "4~6歲", "7~9歲", "10~12歲"];
const activities = ages.flatMap((age) => [1, 2].map((number) => ({
  id: age + "-" + number, age, title: "活動 " + number,
})));

export default function AgeActivityLibrary() {
  const ageFilter = useCategoryFilter(ages);
  const visible = activities.filter((activity) => ageFilter.matches(activity.age));
  return (
    <div className="age-activity-library" onClick={(event) => event.stopPropagation()}>
      <div className="age-activity-filters" role="group" aria-label="分齡替代活動年齡">
        <span>孩子年齡：</span>
        {["全部", ...ages].map((age) => (
          <button type="button" key={age} aria-pressed={ageFilter.isSelected(age)} onClick={() => ageFilter.toggle(age)}>{age}</button>
        ))}
      </div>
      <div className="age-activity-grid" aria-label="分齡替代活動">
        {visible.map((activity) => (
          <article className="age-activity-card" key={activity.id} aria-label={activity.age + activity.title}>
            <p>{activity.title}</p><span>{activity.age}</span>
          </article>
        ))}
      </div>
      <span className="sr-only" role="status">{ageFilter.label}，共 {visible.length} 個活動</span>
    </div>
  );
}
