import {
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableBody,
  Table,
  tableCellClasses,
  styled,
  Tab,
} from "@mui/material";
import Colors from "../../Constants/Colors";
import styles from "./Fixtures.module.css";

const MatchItem = (props) => {
  const StyledPlayerCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      borderWidth: 1,
      borderColor: Colors.black,
      backgroundColor: Colors.gold,
      color: Colors.black,
    },
  }));
  const StyledScoreCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      borderWidth: 1,
      backgroundColor: Colors.pale_gold,
      borderColor: Colors.black,
      // opacity: 0.7,
      color: Colors.black,
      width: "2.5rem",
    },
  }));

  if (props.match === undefined) return <></>;
  return (
    <TableContainer component={Paper} className={styles[`match-container`]}>
      <h6 className="m-0" style={{ color: Colors.gold }}>
        {props.location}
      </h6>
      <Table
        className={styles["match-item"]}
        sx={{ minWidth: 300, minHeight: 50 }}
        size="small"
        aria-label="match item"
      >
        <TableBody>
          <TableRow>
            <StyledPlayerCell align="center">
              {props.match.team1?.players.map((player) => (
                <>
                  <p className="m-0 lead fs-6 fw-normal">
                    {player.first_name} {player.last_name}
                  </p>
                </>
              ))}
            </StyledPlayerCell>
            <StyledScoreCell align="center">
              <p className="m-0 lead fs-6 fw-normal">
                {props.match.score
                  ? props.match.score.substring(
                      0,
                      props.match.score.indexOf("-")
                    )
                  : "--"}
              </p>
            </StyledScoreCell>
          </TableRow>
          <TableRow>
            <StyledPlayerCell align="center">
              {props.match.team2?.players.map((player) => (
                <>
                  <p className="m-0 lead fs-6 fw-normal">
                    {player.first_name} {player.last_name}
                  </p>
                </>
              ))}
            </StyledPlayerCell>
            <StyledScoreCell align="center">
              <p className="m-0 lead fs-6 fw-normal">
                {props.match.score
                  ? props.match.score.substring(
                      props.match.score.indexOf("-") + 1
                    )
                  : "--"}
              </p>
            </StyledScoreCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MatchItem;
