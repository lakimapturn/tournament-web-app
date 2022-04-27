import { Table } from "reactstrap";
import styles from "./Fixtures.module.css";

import MatchItem from "./MatchItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatchList } from "../../Store/Actions/MatchActions";

const Fixtures = (props) => {
  const matches = useSelector((state) => state.match.matches);
  const initialTeams = useSelector((state) => state.match.initialNumTeams);
  const dispatch = useDispatch();
  const [fixtures, setFixtures] = useState([[]]);

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
  let currentRows = Math.ceil(nTeams / 2);

  while (currentRows > 0) {
    const row = [];
    for (let j = 0; j < currentRows; j++) {
      row.push({
        location: `${String.fromCharCode(alphabet)}${j + 1}`,
        item: MatchItem,
        props: matches[counter++],
      });
    }
    fix.push(row);
    alphabet++;
    currentRows = Math.floor(currentRows * Math.pow(0.5, 1));
  }

  return fix;
};

export default Fixtures;
