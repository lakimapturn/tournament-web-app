import Title from "./Title";
// import styles from "./Home.module.css";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const navigateToTournaments = () => {
    navigate("/tournaments");
  };

  return (
    <>
      <Title
        size="xl"
        title="GMA Tournaments"
        subtitle="add a subtitle here..."
        buttonText="VIEW TOURNAMENTS"
        image="https://content3.jdmagicbox.com/comp/def_content/badminton-courts/1-badminton-courts-1-m069r.jpg?clr=2b3b2b"
        onButtonClick={navigateToTournaments}
        contain
      />
      <Footer />
    </>
  );
};

export default Home;
