import "./App.css";
import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import Leagues from "./components/Leagues";
import Teams from "./components/Teams";
import Countries from "./components/Countries";

const basketballLeagues = require("./data/basketballLeagues.json");
const footballCountries = require("./data/footballCountries.json");
const basketballCountries = require("./data/basketballCountries.json");
const footballLeagues = require("./data/footballLeagues.json");

function App() {
  const [formState, setFormState] = useState({
    sport: "basketball",
    country: "USA",
    team: "Atlanta Hawks",
    date: new Date(),
  });

  
  // const [sport, setSport] = useState(null);
  const [sportsCountries, setSportsCountries] = useState(basketballCountries);
  const [teams, setTeams] = useState([]);
  const [leagues, setLeagues] = useState(basketballLeagues);
  const [league, setLeague] = useState(null);

  useEffect(() => {
    if (league) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2dd546e72dmsh540546b64658ae0p141ce0jsnbfa9db400034",
          "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
        },
      };

      fetch(
        `https://api-basketball.p.rapidapi.com/teams?league=${league}&season=2022-2023`,
        options
      )
        .then((response) => response.json())
        .then((response) => setTeams(response.response))
        .catch((err) => console.error(err));
    }
  }, [league]);

  useEffect(() => {
    console.log(formState)
    if (formState.sport === "basketball") {
      setSportsCountries(basketballCountries);
    } else if (formState.sport === "football") {
      setSportsCountries(footballCountries);
    }
  }, [formState]);

  function handleChange(e) {
    console.log(e.target.value)
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  function handleCountryChange(e) {
    //when a country is switched, set the league to the first league id of that country
    setLeague(basketballLeagues.find(league=>league.country.name === e.target.value).id)
  

    setTeams([]);
    setFormState({
      ...formState,
      team: "",
      [e.target.name]: e.target.value,
    });
  }

  function handleLeagueChange(e) {
    setLeague(e.target.value);
    // setFormState({
    //   ...formState,
    //   [e.target.name]: e.target.value,
    // });
  }

  function dateChange(e) {
    setFormState({
      ...formState,
      date: e,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="header">
        <h3>What are the odds?</h3>
      </div>
      <div className="main">
        <form className="form" onSubmit={handleSubmit}>
          <label>Sport</label>
          <select
            className="select"
            onChange={handleChange}
            value={formState.sport}
            name="sport"
          >
            <option id="1" value="basketball">
              Basketball
            </option>
            <option id="2" value="football">
              Football
            </option>
          </select>
          <label>Region</label>
          <Countries
            countries={sportsCountries}
            handleCountryChange={handleCountryChange}
            formState={formState}
          />
          <label>League</label>
          <Leagues
            formState={formState}
            leagues={leagues}
            handleLeagueChange={handleLeagueChange}
            league={league}
          />
          <label>Team</label>
          <Teams
            teams={teams}
            handleChange={handleChange}
            formState={formState}
          />
          <label>Date</label>
          <DatePicker onChange={dateChange} value={formState.date} />
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;

// const options = {
// method: 'GET',
// headers: {
// 		'X-RapidAPI-Key': '2dd546e72dmsh540546b64658ae0p141ce0jsnbfa9db400034',
// 		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
// 		}
// };

// fetch('https://api-basketball.p.rapidapi.com/leagues', options)
// 	.then(response => response.json())
// 	.then(response => {
// 		response.response.sort((a, b) => a.name.localeCompare(b.name))
// 		console.log(JSON.stringify(response.response))
// 		setLeagues(response.response)
// 	})
// 	.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
// 		'X-RapidAPI-Host': `api-${formState.sport}.p.rapidapi.com`
// 	}
// };

// fetch(`https://api-${formState.sport}.p.rapidapi.com/games?date=2019-11-26`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// console.log(formState);
// 	const options1 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2dd546e72dmsh540546b64658ae0p141ce0jsnbfa9db400034',
// 		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://api-football-v1.p.rapidapi.com/v3/leagues', options1)
// 	.then(response => response.json())
// 	.then(response => console.log(29,response.response,response.response.length,JSON.stringify(response.response)))
// 	.catch(err => console.error(err))

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2dd546e72dmsh540546b64658ae0p141ce0jsnbfa9db400034',
// 		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
// 	}
// };

// fetch(`https://api-${formState.sport}.p.rapidapi.com/teams?league=${formState.league}&season=2019-2020`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
