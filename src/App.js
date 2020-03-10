import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/NavigationBar";
import Country from "./pages/Country";
import Competition from "./pages/Competition";
import Clubs from "./pages/Clubs";
import ClubProfile from "./pages/ClubProfile";
import PlayerProfile from "./pages/PlayerProfile";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Country} />
          <Route path="/competition/:countryId" component={Competition} />
          <Route path="/clubs/:competitionId" component={Clubs} />
          <Route path="/club-profile/:clubId" component={ClubProfile} />
          <Route path="/player-profile/:playerId" component={PlayerProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
