import { Container, Table } from "reactstrap";
import styles from "./Leaderboard.module.css";

const Leaderboard = (props) => {
  return (
    <Container>
      <Table responsive bordered className={`${styles["table"]} my-5`}>
        <thead>
          <tr className="table-dark">
            <th>Ranking</th>
            <th>School</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {props.schools.map((school, index) => {
            return (
              <tr key={school.id}>
                <th scope="row">{index + 1}</th>
                <td>{school.name}</td>
                {/* <td>{school.wins ? school.wins : 0}</td>
                <td>{school.draws ? school.draws : 0}</td>
                <td>{school.losses ? school.losses : 0}</td> */}
                <td>{school.points}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Leaderboard;
