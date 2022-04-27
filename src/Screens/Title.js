import { Button, Col, Row } from "reactstrap";
import styles from "./Title.module.css";
import { FaChevronCircleRight } from "react-icons/fa";

const Title = (props) => {
  let size = "";

  switch (props.size) {
    case "md": {
      size = "calc(55vh - 5rem)";
      break;
    }
    case "xl": {
      size = "calc(100vh - 5rem)";
      break;
    }
    default: {
      size = "calc(20vh - 5rem)";
    }
  }

  return (
    <div
      className={`container-fluid ${styles["header"]} m-0 mb-3 p-0`}
      style={{ height: size }}
    >
      {props.image ? (
        <img
          src={props.image}
          alt="background"
          className={`${styles["background-image"]}`}
          style={props.contain && { height: "100%" }}
        />
      ) : (
        <div
          className={`${styles["background-image"]}`}
          style={{ height: "100%" }}
        />
      )}

      <div className={`${styles["content-container"]}`}>
        <Row className={`mb-3`}>
          <h1 className={`display-3 ${styles["title"]} m-auto`}>
            {props.title}
          </h1>
        </Row>
        {props.subtitle && (
          <Row className={`mb-5`}>
            <h4 className="lead">{props.subtitle}</h4>
          </Row>
        )}

        {props.buttonText && (
          <Button
            onClick={props.onButtonClick}
            color="danger"
            className={`${styles["header-button"]} p-3`}
          >
            <Row>
              <Col className={`m-auto`}>
                <h5 className={`m-0`}>VIEW TOURNAMENTS</h5>
              </Col>
              <Col className={`m-auto`} xs={2}>
                <FaChevronCircleRight size={32} />
              </Col>
            </Row>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Title;
