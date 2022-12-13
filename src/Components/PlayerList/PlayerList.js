import {
  Paper,
  styled,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Container, Table } from "reactstrap";
import Colors from "../../Constants/Colors";
import styles from "./PlayerList.module.css";

const PlayerList = (props) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: Colors.black,
      color: Colors.white,
      fontSize: "1rem",
      fontWeight: 1000,
    },
  }));

  return (
    <Container>
      <Table responsive bordered className={`${styles["table"]} my-5`}>
        <thead>
          <tr className="table-dark">
            <th>Ranking</th>
            <th>School</th>
            <th>Players</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>
          {props.players.teams.map((team, index) => {
            return (
              <tr key={team.id}>
                <th className="align-middle" scope="row">
                  {index + 1}
                </th>
                <td className="align-middle">{team.school.name}</td>
                <td className={`${styles["player-list-container"]}`}>
                  {team.players.map((player) => (
                    <td key={player.id}>
                      {player.first_name} {player.last_name}
                    </td>
                  ))}
                </td>
                <td className="align-middle">{team.wins ? team.wins : 0}</td>
                <td className="align-middle">{team.draws ? team.draws : 0}</td>
                <td className="align-middle">
                  {team.losses ? team.losses : 0}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
    // <TableContainer component={Paper} style={{ padding: "1rem" }}>
    //   <Table
    //     stickyHeader
    //     sx={{ minWidth: 650 }}
    //     aria-label="players table"
    //     className={styles["table"]}
    //   >
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell align="center"></StyledTableCell>

    //         <StyledTableCell align="center">Schools</StyledTableCell>
    //         <StyledTableCell align="center">Players</StyledTableCell>
    //         <StyledTableCell align="center">Wins</StyledTableCell>
    //         <StyledTableCell align="center">Draws</StyledTableCell>
    //         <StyledTableCell align="center">Losses</StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {props.players.teams.map((team) => {
    //         return (
    //           <TableRow key={team.id}>
    //             <TableCell align="center">
    //               <img
    //                 alt="School-logo"
    //                 src={team.school.logo}
    //                 width="50"
    //                 height="50"
    //               />
    //             </TableCell>

    //             <TableCell align="center">{team.school.name}</TableCell>

    //             <TableCell
    //               align="center"
    //               className={styles["player-list-container"]}
    //             >
    //               {team.players.map((player) => (
    //                 <TableCell
    //                   size="small"
    //                   align="center"
    //                   className={styles["player-list"]}
    //                   key={player.id}
    //                 >
    //                   {player.first_name} {player.last_name}
    //                 </TableCell>
    //               ))}
    //             </TableCell>

    //             <TableCell align="center">{team.wins}</TableCell>
    //             <TableCell align="center">{team.draws}</TableCell>
    //             <TableCell align="center">{team.losses}</TableCell>
    //           </TableRow>
    //         );
    //       })}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};

export default PlayerList;
