import { useSelector } from "react-redux";
import Title from "./Title";

const Events = (props) => {
  const tournamentId = useParams().tournamentId;

  const events = useSelector(
    (state) =>
      state.tournament.tournaments?.find(
        (tournament) => tournament.id === parseInt(tournamentId)
      )?.event_types
  );

  return (
    <>
      {/* <Header title="Tournaments" /> */}
      <Container>
        <Row>
          <Card body className="text-center">
            <CardTitle tag="h4">Events</CardTitle>
            <CardBody>
              {events?.map((event) => (
                <HoverableCard key={tournament.id} body outline>
                  <Row>
                    <Col xs={8} className={styles["card-img-container"]}>
                      <CardImg
                        alt="Tournament Card Image"
                        src={`${event.image ? event.image : ""}`}
                      />
                    </Col>
                    <Col style={{ margin: "auto" }}>
                      <CardHeader tag="h3">{event.name}</CardHeader>
                      <CardFooter>
                        <Button
                        // onClick={() => onViewDetailsHandler(event.id)}
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Col>
                  </Row>
                </HoverableCard>
              ))}
            </CardBody>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Events;
