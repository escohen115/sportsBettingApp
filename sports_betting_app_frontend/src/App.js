import './App.css';
import React, {useEffect, useState} from 'react'

function App() {


const [games,setGames] = useState({response:[]})

useEffect(() => {

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
	}
};

fetch('https://api-basketball.p.rapidapi.com/games?date=2019-11-26', options)
	.then(response => response.json())
	.then(response => setGames(response))
	.catch(err => console.error(err));
},[])

function handleSubmit(){

}

  return (
    <div className="App">
		<form >
			<label>Select Sport
				<select>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option selected value="coconut">Coconut</option>
						<option value="mango">Mango</option>
				</select>
			</label>
			<input type="submit" value="Submit" />
		</form>
      
      {/* hello {JSON.stringify(games.response[0])} */}
    </div>
  );
}

export default App;
