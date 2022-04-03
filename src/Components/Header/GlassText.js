import styles from "./Header.module.css";

const GlassEffectContainer = (props) => {
  return (
    <div
      {...props}
      className={`${styles["text-container"]} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default GlassEffectContainer;
