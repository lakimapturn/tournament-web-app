import "./Sidebar.css";
import Colors from "../../Constants/Colors";
import { FaCross } from "react-icons/fa";

const Sidebar = (props) => {
  return (
    <div
      className="sidebar-container"
      style={{
        backgroundColor: Colors.white,
        // opacity: props.isOpen ? 1 : 0,
        // top: props.isOpen ? 0 : "-100%",
      }}
    >
      <div>
        <FaCross size={25} />
      </div>
      {props.children}
    </div>
  );
};

export default Sidebar;
