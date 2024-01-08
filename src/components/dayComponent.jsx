import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useGetDay } from "../utils/utils";
import percipitationIcon from "../assets/percipitation.png";
import { iconURL } from "../constants";

export default function DayComponent({ day, index }) {
  let d = useGetDay(day.dt);
  if (index === 0) d = "Today";
  const srcURL = iconURL + day.weather[0].icon + ".png";
  return (
    <>
      <Row className="m-0">
        <Col xs={8} className="d-flex align-items-center justify-content-start">
          {d}
        </Col>
        <Col className="d-flex align-items-center justify-content-start">
          <img
            src={percipitationIcon}
            style={{ marginRight: ".5rem" }}
            height={13}
          />
          {Math.round(day.pop * 100)}
          <span>&#37;</span>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <img src={srcURL} />
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <span style={{ marginRight: ".75rem" }}>
            {Math.round(day.temp.day)}&#176;
          </span>
          {Math.round(day.temp.eve)}&#176;
        </Col>
      </Row>
    </>
  );
}
