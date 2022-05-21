import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import Home from "./Screens/Home";
import TournamentDetails from "./Screens/TournamentDetails";
import Tournaments from "./Screens/Tournaments";
import Loading from "./Components/Loading";
import { useSelector } from "react-redux";
import About from "./Screens/About";

function App() {
  const isMatchFetching = useSelector((state) => state.match.isFetching);
  const isTournamentFetching = useSelector(
    (state) => state.tournament.isFetching
  );
  const isPlayerFetching = useSelector((state) => state.player.isFetching);

  const isFetching =
    isMatchFetching || isTournamentFetching || isPlayerFetching;

  return (
    <div className="App">
      <Loading loading={isFetching} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route
          path="/tournament/:tournamentId/:eventId"
          element={<TournamentDetails />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
