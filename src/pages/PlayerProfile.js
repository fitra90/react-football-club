import React, { useState, useEffect } from "react";
import { Table, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

function PlayerProfile({ match }) {
  useEffect(() => {
    getPlayerProfile();
  }, []);

  const [playerProfile, setPlayerProfile] = useState([]);
//   const [clubArea, setClubArea] = useState([]);
//   const [players, setPlayers] = useState([]);

  const getPlayerProfile = async () => {
    const data = await fetch(
      `http://api.football-data.org/v2/players/${match.params.playerId}`,
      {
        headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
      }
    );
    const items = await data.json();
    // console.log(items);
    setPlayerProfile(items);
    // setClubArea(items.area);
    // setPlayers(items.squad);
  };
  console.log(PlayerProfile);

  return (
    <div className="container">
       {/* <Breadcrumb style={{ marginTop: 10 }}>
        <Breadcrumb.Item>
          <Link to="/">Country</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/competition/" + clubArea.id}>{clubArea.name}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{PlayerProfile.name}</Breadcrumb.Item>
      </Breadcrumb> */}
     <h5 style={{ marginTop: 10 }}>Player Profile</h5>
      <Table hover style={{ marginTop: 10 }}>
          <tr>
            <th>Name</th>
            <td>{playerProfile.name}</td>
          </tr>
          <tr>
            <th>Birth</th>
            <td>{playerProfile.dateOfBirth}</td>
          </tr>
          <tr>
            <th>Nationality</th>
            <td>{playerProfile.nationality}</td>
          </tr>
          <tr>
            <th>Position</th>
            <td>{playerProfile.position}</td>
          </tr>
       
      </Table>
    </div>
  );
}

export default PlayerProfile;
