import TimetableGrid from "../components/Timetable/TimetableGrid";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import { getTimetable } from "../datas/datas";
import time from "../components/Time";

const year = "11";

const Timetable = () => {
  console.log(time)

  return (
    <WebCard>
      <div className="timetable">
        <div class="item item--1">
          <i class="bx bx-info-circle"></i>
          <h1>{`Year ${year}`}</h1>
          <i class="bx bx-time-five"></i>
          <h1>{time}</h1>
          <TimetableGrid timetableContent={getTimetable}/>
        </div>
      </div>
    </WebCard>
  );
};

export default Timetable;
