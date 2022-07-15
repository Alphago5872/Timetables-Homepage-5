import react from "react";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export default function GlanceBox() {
  return (
    <div>
      <div>
        <Box
          style={{
            backgroundColor: "rgba(0, 102, 255, 0.7)",
            borderRadius: "11px",
            color: "rgba(255, 255, 255, 1)",
            height: "310px",
            padding: "12px",
            width: "var(--glance-box-width)",
            paddingLeft: "19px",
          }}
        >
          <div className="glance__current">
            <h1 className="glance__current--subheading">Current Class:</h1>
            <h1 className="glance__current--class">
              {/* {currentClass} */}
              Introduction to CS50x
            </h1>
            <button className="button__button1">View in Timetable</button>
            <i class="bx bx-laptop" style={{fontSize: "20rem", position:"relative", marginLeft:"px"}} ></i>
          </div>
        </Box>
      </div>

      <div>
        <Box
          style={{
            backgroundColor: "rgba(255, 61, 0, 0.7)",
            borderRadius: "11px",
            color: "rgba(255, 255, 255, 1)",
            height: "310px",
            padding: "12px",
            width: "var(--glance-box-width)",
            marginLeft: "51%",
            marginTop: "-310px",
            paddingLeft: "19px",
          }}
        >
          <div className="glance__next">
            <h1 className="glance__next--subheading">Next Class:</h1>
            <h1 className="glance_next--class">
              {/* {nextClass} */}
              Aviation 101
            </h1>
            <button className="button__button1">View in Timetable</button>
            <i class="bx bxs-plane-alt" style={{fontSize: "20rem", position:"relative", marginLeft:"175px"}}></i>
          </div>
        </Box>
      </div>
    </div>
  );
}
