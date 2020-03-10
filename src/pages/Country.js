import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Country() {
  useEffect(() => {
    getCountry();
  }, []);

  const [countries, setCountries] = useState([]);

  const getCountry = async () => {
    const data = await fetch("http://api.football-data.org/v2/areas", {
      headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
    });
    const items = await data.json();
    // console.log(countries);
    setCountries(items.areas);
  };

  return (
    <div className="container">
      <Table hover>
        <thead>
          <tr>
            <th>Select Country: </th>
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country.id}>
              <td>
                {" "}
                <Link to={"/competition/" + country.id}>{country.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Country;
