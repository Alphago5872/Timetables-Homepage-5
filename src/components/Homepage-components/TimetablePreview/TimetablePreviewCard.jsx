import { Navigate } from "react-router-dom";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const TimetablePreviewCard = (props) => {
  const toogleButtonHandler = () => {
    <Navigate to={`/timetable/${props.year}`} replace/>
  };
  
  return (
    <div className="timeBox">
      <div>
        <button
          style={{
            width: "var(--tthome-box-width)",
            flexDirection: "row",
            position: "inline-block",
          }}
          onClick={toogleButtonHandler}
        >
          <Box
            style={{
              backgroundColor: "var(--primary-color)",
              borderRadius: 0,
              color: "rgba(255, 255, 255, 1)",
              Height: "100%",
              padding: 100,
            }}
          >
            <div className="glance__current">
              <h2 className="glance__current--subheading">{`Year ${props.year}`}</h2>
            </div>
          </Box>
        </button>
      </div>
    </div>
  );
};

export default TimetablePreviewCard;
