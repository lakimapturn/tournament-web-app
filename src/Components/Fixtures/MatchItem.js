import { Col, Container, Row } from "reactstrap";
import Colors from "../../Constants/Colors";
import { formatScore } from "../../Constants/Functions";
import HoverableCard from "../HoverableCard/HoverableCard";
import styles from "./Fixtures.module.css";

const MatchItem = (props) => {
  let isPlayer1Winner = false;
  let isPlayer2Winner = true;

  const matchScore = props.match?.score[0];

  let player1Score = 0,
    player2Score = 0;
  if (matchScore) {
    [player1Score, player2Score] = formatScore(matchScore);

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
        <HoverableCard
          onClick={() =>
            (isPlayer1Winner || isPlayer2Winner) &&
            props.onPressMatch(
              props.match?.score.slice(1),
              props.match?.team1.school,
              props.match?.team2.school
            )
          }
          className={`${styles["match-container1"]} p-0`}
        >
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
                {player1Score !== null ? player1Score : "--"}
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
                {player2Score !== null ? player2Score : "--"}
              </p>
            </Col>
          </Row>
        </HoverableCard>
      </Container>
    </>
  );
};

export default MatchItem;
