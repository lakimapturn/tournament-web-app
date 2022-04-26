import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { Col, Container, Row, Table } from "reactstrap";
import styles from "./Fixtures.module.css";

import MatchItem from "./MatchItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatchList } from "../../Store/Actions/MatchActions";
import Loading from "../Loading";

const Fixtures = (props) => {
  // const matches = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const matches = useSelector((state) => state.match.matches);
  const initialTeams = useSelector((state) => state.match.initialNumTeams);
  const dispatch = useDispatch();
  const [fixtures, setFixtures] = useState([[]]);

  const isFetching = useSelector((state) => state.match.isFetching);

  useEffect(() => {
    try {
      dispatch(
        fetchMatchList(
          props.tournament,
          props.category,
          props.gender,
          props.event
        )
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setFixtures(generateMatches(initialTeams, matches));
  }, [matches, initialTeams]);

  // if (isFetching) return <Loading loading={true} />;

  return (
    <>
      <div className={`m-auto ${styles["container"]}`}>
        <Table>
          {fixtures.map((col) => (
            <th
              key={Math.random().toString()}
              className={styles["fixture-col"]}
            >
              {col.map((row) => (
                <tr key={Math.random().toString()}>
                  {<row.item match={row.props} location={row.location} />}
                </tr>
              ))}
            </th>
          ))}
        </Table>
      </div>
    </>
  );
};

const generateMatches = (nTeams, matches) => {
  const fix = [];
  let counter = 0;
  let alphabet = 65;
  while (nTeams > 1) {
    nTeams = (nTeams + 1) >> 1;
    const row = [];
    for (let i = 0; i < nTeams; i++) {
      row.push({
        location: `${String.fromCharCode(alphabet)}${i + 1}`,
        item: MatchItem,
        props: matches[counter++],
      });
    }
    fix.push(row);
    alphabet++;
  }
  return fix;
};

export default Fixtures;
