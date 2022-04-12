import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Row,
} from "reactstrap";
import styles from "./TournamentList.module.css";

import HoverableCard from "../HoverableCard/HoverableCard";
import GlassEffectContainer from "../Header/GlassText";
import Colors from "../../Constants/Colors";

const TournamentListItem = (props) => {
  const imageUrl = "https://gma-tournament-admin.herokuapp.com";
  return (
    <>
      <HoverableCard body outline>
        <Row>
          <Col xs={8} className={styles["card-img-container"]}>
            <CardImg
              alt="tournament Card Image"
              src={
                props.tournament.image
                  ? `${imageUrl + props.tournament.image}`
                  : "https://static.toiimg.com/thumb/msid-87873582,width-1070,height-580,imgsize-39124,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
              }
            />
          </Col>
          <Col className="m-auto">
            <CardHeader className={`bg-transparent`} tag="h2">
              {props.tournament.name}
            </CardHeader>
            <br />
            <CardSubtitle className="text-muted" tag="h5">
              {props.tournament.sport.name}
            </CardSubtitle>
            <br />
            <CardText>
              Start Date:{" "}
              {new Date(props.tournament.start_date).toLocaleDateString()}
            </CardText>
            <CardText>
              End Date:{" "}
              {new Date(props.tournament.end_date).toLocaleDateString()}
            </CardText>
            <br />
            <CardText
              style={{
                color:
                  props.tournament.status === "Ongoing" ? "#198754" : "#dc3545",
              }}
            >
              Status: {props.tournament.status}
            </CardText>
            <CardFooter className={`bg-transparent`}>
              <Button
                onClick={() =>
                  props.onViewDetails(
                    props.viewEventDetails ? -1 : props.tournament.id
                  )
                }
                color="outline-danger"
              >
                {props.viewEventDetails ? "Hide" : "View"} Details
              </Button>
            </CardFooter>
          </Col>
        </Row>
        <br />
        <Row>
          <Collapse
            isOpen={props.viewEventDetails}
            className={styles["collapse-layout"]}
          >
            {props.tournament.event_types.map((event) => (
              <Card
                body
                key={event.id}
                className={`${styles["event-container"]}`}
              >
                <CardImg
                  alt="Card image cap"
                  src={
                    event.image
                      ? imageUrl + event.image
                      : "https://global-uploads.webflow.com/5b44edefca321a1e2d0c2aa6/5fc43672e4b222bbdc7d6325_Dimensions-Sports-Badminton-Racket-Dimensions.svg"
                  }
                  height={225}
                />
                <CardImgOverlay
                  onClick={() => props.onViewTournament(event.id)}
                >
                  <GlassEffectContainer
                    className={`${styles["event-title-container"]} text-white`}
                    style={{ backgroundColor: Colors.dark_blue }}
                  >
                    <CardTitle
                      className={`${styles["event-title"]} m-0 `}
                      tag="h4"
                    >
                      {event.name}
                    </CardTitle>
                    <CardText tag="em" className={`${styles["helper-text"]}`}>
                      Click To View Details
                    </CardText>
                  </GlassEffectContainer>
                </CardImgOverlay>
              </Card>
            ))}
          </Collapse>
        </Row>
      </HoverableCard>
    </>
  );
};

export default TournamentListItem;
