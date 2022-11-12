import './App.css';
import React, {useEffect, useState} from 'react'

function App() {

const [games,setGames] = useState([])

useEffect(() => {

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2dd546e72dmsh540546b64658ae0p141ce0jsnbfa9db400034',
		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
	}
};

fetch('https://api-basketball.p.rapidapi.com/games?date=2019-11-26', options)
	.then(response => response.json())
	.then(response => setGames(response))
	.catch(err => console.error(err));
},[])




  return (
    <div className="App">
      <form>
        
      </form>
      hello {JSON.stringify(games.response[0])}
    </div>
  );
}

export default App;
