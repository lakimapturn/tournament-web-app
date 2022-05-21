import { Col, Container, Row } from "reactstrap";
import Colors from "../../Constants/Colors";
import styles from "./Fixtures.module.css";

const MatchItem = (props) => {
  let player1Score = 0,
    player2Score = 0;
  if (props.match?.score) {
    player1Score = parseInt(
      props.match.score.substring(0, props.match.score.indexOf("-"))
    );
    player2Score = parseInt(
      props.match.score.substring(props.match.score.indexOf("-") + 1)
    );
  }

  if (props.match === undefined) return <></>;
  return (
    <>
      <Container className={`d-flex ${styles["content-container"]} my-3`} fluid>
        <h6 className="my-auto me-3" style={{ color: Colors.gold }}>
          {props.location}
        </h6>
        <Container className={`${styles["match-container1"]} p-0`}>
          <Row
            className={`${
              player1Score > player2Score && styles["winning-team"]
            } w-100 m-0`}
          >
            <Col className={`${styles["team-col"]} py-2`}>
              {props.match.team1?.players.map((player) => (
                <>
                  <p className="m-0 lead fs-6 fw-normal">
                    {player.first_name} {player.last_name}
                  </p>
                </>
              ))}
            </Col>
            <Col xs={3} className={`${styles["score-col"]} py-2`}>
              <p className="m-0 lead fs-6 fw-normal">
                {player1Score ? player1Score : "--"}
              </p>
            </Col>
          </Row>
          <hr className={`${styles["divider"]} my-0`} />
          <Row
            className={`${
              player1Score < player2Score && styles["winning-team"]
            } w-100 m-0`}
          >
            <Col className={`${styles["team-col"]} py-2`}>
              {props.match.team2?.players.map((player) => (
                <>
                  <p className="m-0 lead fs-6 fw-normal">
                    {player.first_name} {player.last_name}
                  </p>
                </>
              ))}
            </Col>
            <Col xs={3} className={`${styles["score-col"]} py-2`}>
              <p className="m-0 lead fs-6 fw-normal">
                {player2Score ? player2Score : "--"}
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default MatchItem;
