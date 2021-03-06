import React, { useState, useEffect } from "react";
import { Table, Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ClubProfile({ match }) {
  useEffect(() => {
    getClubProfile();
  }, []);

  const [clubProfile, setClubProfile] = useState([]);
  const [clubArea, setClubArea] = useState([]);
  const [players, setPlayers] = useState([]);

  const getClubProfile = async () => {
    const data = await fetch(
      `http://api.football-data.org/v2/teams/${match.params.clubId}`,
      {
        headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
      }
    );
    const items = await data.json();
    // console.log(items);
    setClubProfile(items);
    setClubArea(items.area);
    setPlayers(items.squad);
  };
  console.log(clubProfile);

  return (
    <div className="container">
      <Breadcrumb style={{ marginTop: 10 }}>
        <Breadcrumb.Item>
          <Link to="/">Country</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/competition/" + clubArea.id}>{clubArea.name}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{clubProfile.name}</Breadcrumb.Item>
      </Breadcrumb>

      <Row style={{ marginBottom: 40, marginTop: 20 }}>
        <Col md={4}>
          <center>
            <img src={clubProfile.crestUrl} style={{ width: 300 }} />
          </center>
        </Col>
        <Col md={3}>
          <center>
            <br />
            <br />
            <h4>{clubProfile.name}</h4>
            <a href={clubProfile.website}>{clubProfile.website}</a>
            <br />
            <br />
            {clubProfile.venue}
            <br />
            {clubProfile.address}
            <br />
            {clubProfile.phone}
          </center>
        </Col>
      </Row>

      <h5>Squad</h5>
      <Table hover style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.id}>
              <td>
                <Link to={"/player-profile/" + player.id}>{player.name}</Link>
              </td>
              <td>
                {player.position == null ? <b>Coach</b> : player.position}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ClubProfile;
