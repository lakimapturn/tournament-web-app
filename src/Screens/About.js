import { Col, Container, Row } from "reactstrap";
import Image from "../assets/under-construction.png";

const About = (props) => {
  return (
    <>
      <hr></hr>
      <Container fluid className="p-4">
        <Row>
          <Col className="text-center m-auto">
            <h3 className="display-6 fw-bold">Page Under Maintainance!</h3>
          </Col>
          <Col>
            <a href="https://www.freepik.com/vectors/website-design">
              <img
                alt="under-construction"
                style={{ width: "60vw" }}
                src={Image}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};
//

export default About;
