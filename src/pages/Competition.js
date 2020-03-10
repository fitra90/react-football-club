import React, { useState, useEffect } from "react";
import { Table, Breadcrumb } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function Competition({ match }) {
  useEffect(() => {
    getCompetition();
  }, []);

  let history = useHistory();

  const [competitions, setCompetitions] = useState([]);
  const [area, setArea] = useState([]);
  const isDataExist = false;

  const getCompetition = async () => {
    const data = await fetch(
      `http://api.football-data.org/v2/competitions?plan=TIER_ONE&areas=${match.params.countryId}`,
      {
        headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
      }
    );
    const items = await data.json();
    setCompetitions(items.competitions);
    if (items.competitions.length < 1) {
        alert("Sorry, no data found!")
        history.push("/");
    } else {
      setArea(items.competitions[0].area);
    }
  };

  if (competitions.length < 1) {
    return null;

    history.push("/");
  } else {
    return (
      <div className="container">
        <Breadcrumb style={{ marginTop: 10 }}>
          <Breadcrumb.Item>
            <Link to="/">Country</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{area.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Table hover>
          <thead>
            <tr>
              <th>Select Competition: </th>
            </tr>
          </thead>
          <tbody>
            {competitions.map(competition => (
              <tr key={competition.id}>
                <td>
                  <Link to={"/clubs/" + competition.id}>
                    {competition.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Competition;
