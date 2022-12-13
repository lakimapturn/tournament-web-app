import { Card } from "reactstrap";
import styles from "./HoverableCard.module.css";

const HoverableCard = (props) => {
  return (
    <Card {...props} className={`${props.className} ${styles["card"]}`}>
      {props.children}
    </Card>
  );
};

export default HoverableCard;
