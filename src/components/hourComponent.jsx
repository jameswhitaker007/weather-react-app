import { Card } from "react-bootstrap";
import { useGetHour } from "../utils/utils";
import { iconURL } from "../constants";
import percipitationIcon from "../assets/percipitation.png";

export default function HourComponent({ hour }) {
  const time = useGetHour(hour.dt);
  const srcURL = iconURL + hour.weather[0].icon + "@4x.png";
  return (
    <>
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          backgroundColor: "lightgray",
        }}
      >
        <Card.Body>
          <Card.Title>{time}</Card.Title>
          <img src={srcURL} />
          <Card.Text>{Math.round(hour.temp)}&#176;</Card.Text>
          <Card.Text className="d-flex align-items-baseline">
            <img src={percipitationIcon} height={13} style={{marginRight: '.3rem'}}/>
            {Math.round(hour.pop * 100)}<span>&#37;</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
