import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { Container } from "reactstrap";
import styles from "./PlayerList.module.css";

const PlayerSchoolList = (props) => {
  const schools = Object.keys(props.players.school_players);
  return (
    <>
      <List>
        <Divider />

        {schools.map((school) => {
          return (
            <Container key={Math.random().toString()}>
              <ListItem className={styles["player-list-container"]}>
                <ListItemText primary={school} />
                {props.players.school_players[school].map((player) => (
                  <ListSubheader key={player.id}>
                    {player.first_name} {player.last_name}
                  </ListSubheader>
                ))}
              </ListItem>
              <Divider />
            </Container>
          );
        })}
      </List>
    </>
  );
};

export default PlayerSchoolList;
