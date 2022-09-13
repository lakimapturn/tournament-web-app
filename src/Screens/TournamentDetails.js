import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import styles from "./TournamentDetails.module.css";
import { useDispatch, useSelector } from "react-redux";

import Leaderboard from "../Components/Leaderboard/Leaderboard";
import Tabbar from "../Components/Nav/Tabbar";
import { tabs } from "../Constants/Data";
import CategorySelect from "../Components/CategorySelect";
import { fetchTournamentDetails } from "../Store/Actions/TournamentActions";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { fetchPlayerData } from "../Store/Actions/PlayerActions";
import PlayerList from "../Components/PlayerList/PlayerList";
import PlayerSchoolList from "../Components/PlayerList/PlayerSchoolList";
import Fixtures from "../Components/Fixtures/Fixtures";
import { Typography } from "@mui/material";
import Title from "./Title";
import { getCategory } from "../Constants/Functions";
import { fetchMatchList } from "../Store/Actions/MatchActions";

const TournamentDetails = (props) => {
  const dispatch = useDispatch();
  const tournamentId = useParams().tournamentId;
  const eventId = useParams().eventId;

  const isFetching = useSelector((state) => state.tournament.isFetching);
  const tournament = useSelector((state) =>
    state.tournament.tournaments?.find(
      (tournament) => tournament.id === parseInt(tournamentId)
    )
  );
  const players = useSelector((state) => state.player);
  const matches = useSelector((state) => state.match.matches);

  const [selectedCategory, setSelectedCategory] = useState("");
  const onSelectCategoryHandler = (category) => {
    setSelectedCategory(category);
  };

  const [selectedGender, setSelectedGender] = useState("");
  const onSelectGenderHandler = (gender) => {
    setSelectedGender(gender);
  };

  const [activeTab, setActiveTab] = useState(0);
  const onTabChangeHandler = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    dispatch(fetchTournamentDetails(tournamentId));
  }, [dispatch, tournamentId]);

  useEffect(() => {
    if (selectedCategory && selectedGender) {
      const age = parseInt(
        selectedCategory.substring(selectedCategory.indexOf("-") + 1)
      );
      dispatch(
        fetchMatchList(tournamentId, selectedCategory, selectedGender, eventId)
      );
      dispatch(fetchPlayerData(tournamentId, selectedGender, age, eventId));
    }
  }, [selectedCategory, selectedGender]);

  return (
    <>
      <Loading isFetching={isFetching} />
      <div className={styles["container"]}>
        {/* <Header
          title="Tournament Details"
          image="https://images.wallpaperscraft.com/image/single/shuttlecock_badminton_cover_206634_1600x900.jpg"
        /> */}
        <Title
          title="Tournament Details"
          size="md"
          image="https://images.wallpaperscraft.com/image/single/shuttlecock_badminton_cover_206634_1600x900.jpg"
        />
        <Row className={`${styles["card"]}`}>
          <Card body className={`text-center`}>
            <CardHeader className={`bg-transparent display-5`} tag="h3">
              {tournament?.name}
            </CardHeader>
            <CardBody>
              <CategorySelect
                categories={tournament?.categories}
                category={selectedCategory}
                gender={selectedGender}
                onSelectCategory={onSelectCategoryHandler}
                onSelectGender={onSelectGenderHandler}
              />
              <br />
              <Row>
                <Col>
                  <Card>
                    <Tabbar
                      onTabChange={onTabChangeHandler}
                      activeTabId={activeTab}
                      tabs={tabs}
                    />
                    <TabContent activeTab={`${activeTab}`}>
                      {selectedCategory && selectedGender ? (
                        <>
                          <TabPane tabId="0">
                            <Row className={`${styles["fixtures-container"]}`}>
                              {matches[
                                getCategory(
                                  selectedGender,
                                  selectedCategory,
                                  eventId
                                )
                              ] && (
                                <Fixtures
                                  tournament={tournamentId}
                                  category={selectedCategory}
                                  gender={selectedGender}
                                  event={eventId}
                                  matches={
                                    matches[
                                      getCategory(
                                        selectedGender,
                                        selectedCategory,
                                        eventId
                                      )
                                    ]
                                  }
                                />
                              )}
                            </Row>
                          </TabPane>
                          <TabPane tabId="1">
                            <Row>
                              <Leaderboard schools={tournament.schools} />
                            </Row>
                          </TabPane>
                          <TabPane tabId="2">
                            <Row>
                              <PlayerList players={players} />
                            </Row>
                          </TabPane>
                          <TabPane tabId="3">
                            <Row>
                              <Col sm="12">
                                <PlayerSchoolList players={players} />
                              </Col>
                            </Row>
                          </TabPane>
                        </>
                      ) : (
                        <Container className={styles["default-text-container"]}>
                          <Typography variant="h4" component="h5">
                            Please Select A Category and Gender
                          </Typography>
                        </Container>
                      )}
                    </TabContent>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Row>
      </div>
    </>
  );
};

export default TournamentDetails;
