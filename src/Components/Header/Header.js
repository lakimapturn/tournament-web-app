import styles from "./Header.module.css";

import Colors from "../../Constants/Colors";
import GlassEffectContainer from "./GlassText";

const Header = (props) => {
  const textColor = Colors.white;
  return (
    <div
      className={styles["header-container"]}
      style={
        props.image
          ? {
              background: `repeat 100% url(${props.image})`,
            }
          : { backgroundColor: Colors.black }
      }
    >
      <GlassEffectContainer>
        <h1 className={`${styles["header-title"]} display-3`}>{props.title}</h1>
        {props.subtitle && (
          <h3 className={styles["header-subtitle"]}>{props.subtitle}</h3>
        )}
      </GlassEffectContainer>
    </div>
  );
};

// https://images.wallpaperscraft.com/image/single/shuttlecock_badminton_cover_206634_1600x900.jpg

export default Header;
