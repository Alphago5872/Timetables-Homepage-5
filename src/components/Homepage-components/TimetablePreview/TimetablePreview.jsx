import TimetablePreviewCard from "./TimetablePreviewCard";
import { Link, NavLink, Route } from "react-router-dom";

const TimetablePreview = () => {
  return (
    <div>
      <h1>Timetables</h1>
      <TimetablePreviewCard year='8'/>
      <TimetablePreviewCard year='9'/>
      <TimetablePreviewCard year='10'/>
      <br />
      <TimetablePreviewCard year='11'/>
      <TimetablePreviewCard year='12'/>
    </div>
  );
};

export default TimetablePreview;
