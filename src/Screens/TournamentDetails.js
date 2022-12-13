import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
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
import { formatScore, getCategory } from "../Constants/Functions";
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

  const [showScoreDetails, setShowScoreDetails] = useState(false);
  const [scoreDetails, setScoreDetails] = useState({});
  const toggleScoreDetails = (setScores, team1, team2) => {
    console.log(team1, team2);
    setShowScoreDetails((prevState) => {
      if (prevState === false)
        setScoreDetails({ score: setScores, team1: team1, team2: team2 });
      return !prevState;
    });
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
              {tournament?.status === "Ended" && (
                <Alert>
                  <p className="lead">This tournament has ended!</p>
                  <p className="lead mb-0">
                    Winner - {tournament?.winner.name}
                  </p>
                </Alert>
              )}
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
                                  onPressMatch={(setScores, team1, team2) =>
                                    toggleScoreDetails(setScores, team1, team2)
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
      <Modal centered isOpen={showScoreDetails} toggle={toggleScoreDetails}>
        <ModalHeader toggle={toggleScoreDetails}>Match Details</ModalHeader>
        <ModalBody>
          <Table className="text-center" borderless responsive size="sm">
            <thead class="border-bottom">
              <tr>
                <th className="lead">
                  {scoreDetails.team1?.logo ? (
                    <img src={scoreDetails.team1?.logo} />
                  ) : (
                    scoreDetails.team1?.name
                  )}
                </th>
                <th className="lead">Set</th>
                <th className="lead">
                  {scoreDetails.team2?.logo ? (
                    <img src={scoreDetails.team2?.logo} />
                  ) : (
                    scoreDetails.team2?.name
                  )}
                </th>
              </tr>
              <div style={{ height: "2px", width: "2px" }} />
            </thead>
            <tbody>
              {scoreDetails?.score?.map((score, index) => {
                const [team1Score, team2Score] = formatScore(score);
                return (
                  <tr key={index}>
                    <td>{team1Score}</td>
                    <td>{index + 1}</td>
                    <td>{team2Score}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </>
  );
};

export default TournamentDetails;
