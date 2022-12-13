import { Card, CardBody, Container, Row } from "reactstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchTournamentList } from "../Store/Actions/TournamentActions";
import TournamentListItem from "../Components/TournamentList/TournamentListItem";
import Title from "./Title";
import Footer from "../Components/Footer/Footer";

const Tournaments = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedTournament, setSelectedTournament] = useState(-1);

  useEffect(() => {
    dispatch(fetchTournamentList());
  }, [dispatch]);
  const tournaments = useSelector((state) => state.tournament.tournaments);

  const onViewDetailsHandler = (tournamentId) => {
    setSelectedTournament(tournamentId);
  };

  const onViewTournamentHandler = (eventId) => {
    navigate(`/tournament/${selectedTournament}/${eventId}`);
  };

  return (
    <>
      <Title
        size="md"
        title="Events"
        // image="https://media.istockphoto.com/videos/tournament-bracket-background-video-id92577359?s=640x640"
      />
      <Container>
        <Row>
          <Card body className="text-center">
            <CardBody>
              {tournaments?.map((tournament) => (
                <TournamentListItem
                  tournament={tournament}
                  onViewDetails={onViewDetailsHandler}
                  viewEventDetails={tournament.id === selectedTournament}
                  key={tournament.id}
                  onViewTournament={onViewTournamentHandler}
                />
              ))}
            </CardBody>
          </Card>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Tournaments;
