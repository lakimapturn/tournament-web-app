import styles from "./GlassText.module.css";

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
