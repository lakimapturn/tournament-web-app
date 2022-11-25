import { Col, Container, Row } from "reactstrap";
import Colors from "../../Constants/Colors";
import styles from "./Fixtures.module.css";

const MatchItem = (props) => {
  let isPlayer1Winner = false;
  let isPlayer2Winner = true;

  let player1Score = 0,
    player2Score = 0;
  if (props.match?.score) {
    player1Score = parseInt(
      props.match.score.substring(0, props.match.score.indexOf("-"))
    );
    player2Score = parseInt(
      props.match.score.substring(props.match.score.indexOf("-") + 1)
    );

    if (player1Score > player2Score) {
      isPlayer1Winner = true;
      isPlayer2Winner = false;
    }
  } else isPlayer1Winner = isPlayer2Winner = false;

  if (props.match === undefined) return <></>;
  return (
    <>
      <Container className={`d-flex ${styles["content-container"]} my-3`} fluid>
        <h6 className="my-auto me-3" style={{ color: Colors.gold }}>
          {props.location}
        </h6>
        <Container className={`${styles["match-container1"]} p-0`}>
          <Row
            className={`${isPlayer1Winner && styles["winning-team"]} w-100 m-0`}
          >
            <Col
              className={`${
                isPlayer1Winner ? styles["team-col-winner"] : styles["team-col"]
              } py-2`}
            >
              {props.match.team1?.players.map((player) => (
                <>
                  <p className="m-0 lead fs-6 fw-normal">
                    {player.first_name} {player.last_name}
                  </p>
                </>
              ))}
            </Col>
            <Col
              xs={3}
              className={`${
                isPlayer1Winner ? styles["team-col-winner"] : styles["team-col"]
              } border-start border-dark py-2 opacity-75`}
            >
              <p className="m-auto lead fs-6 fw-normal">
                {player1Score ? player1Score : "--"}
              </p>
            </Col>
          </Row>
          <hr className={`${styles["divider"]} my-0`} />
          <Row
            className={`${isPlayer2Winner && styles["winning-team"]} w-100 m-0`}
          >
            <Col
              className={`${
                isPlayer2Winner ? styles["team-col-winner"] : styles["team-col"]
              } py-2`}
            >
              {props.match.team2?.players.map((player) => (
                <>
                  <p className="m-0 lead fs-6 fw-normal">
                    {player.first_name} {player.last_name}
                  </p>
                </>
              ))}
            </Col>
            <Col
              xs={3}
              className={`${
                isPlayer2Winner ? styles["team-col-winner"] : styles["team-col"]
              } border-start border-dark py-2 opacity-75`}
            >
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
