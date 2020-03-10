import React, { useState, useEffect } from "react";
import { Table, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

function Clubs({ match }) {
  useEffect(() => {
    getClubs();
  }, []);

  const [clubs, setClubs] = useState([]);
  const [competition, setCompetition] = useState([]);
  const [competitionArea, setCompetitionArea] = useState([]);
  

  const getClubs = async () => {
    const data = await fetch(
      `http://api.football-data.org/v2/competitions/${match.params.competitionId}/teams`,
      {
        headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
      }
    );
    const items = await data.json();
    // console.log(items);
    setClubs(items.teams);
    setCompetition(items.competition)
    setCompetitionArea(items.competition.area)
  };

console.log(competition.area)
  return (
    <div className="container">

      <Breadcrumb style={{ marginTop: 10 }}>
        <Breadcrumb.Item>
          <Link to="/">Country</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
        <Link to={"/competition/"+competitionArea.id}>{competitionArea.name}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
         {competition.name}
        </Breadcrumb.Item>
      </Breadcrumb>

      <Table hover>
        <thead>
          <tr>
            <th>Select Club: </th>
          </tr>
        </thead>
        <tbody>
          {clubs.map(club => (
            <tr key={club.id}>
              <td>
                <Link to={"/club-profile/" + club.id}>{club.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Clubs;
