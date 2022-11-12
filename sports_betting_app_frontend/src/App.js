import './App.css';
import React, {useState, useEffect} from 'react'
import DatePicker from 'react-date-picker'
import Leagues from './components/Leagues'

function App() {
	console.log(process.env.REACT_APP_API_KEY)
	
	const [formState, setFormState] = useState({sport: ""})
	const [leagues, setLeagues] = useState([{id:1}])
	const [date, setDate] = useState(new Date())


	useEffect(()=>{
		console.log(formState)
		console.log(date)
		console.log(leagues)
	},
	[formState,date,leagues]
	)




	function handleChange(e){
		setFormState({
			sport: e.target.value,
		})
		const options = {
		method: 'GET',
		headers: {
				'X-RapidAPI-Key': '2dd546e72dmsh540546b64658ae0p141ce0jsnbfa9db400034',
				'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
				}
		};
	
		fetch('https://api-basketball.p.rapidapi.com/leagues', options)
			.then(response => response.json())
			.then(response => {
				response.response.sort((a, b) => a.name.localeCompare(b.name))
				console.log(JSON.stringify(response.response))
				setLeagues(response.response)
			})
			.catch(err => console.error(err));
	}

	function dateChange(e){
		setDate(e)
	}

	function handleSubmit(e){
		e.preventDefault()
		
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
				'X-RapidAPI-Host': `api-${formState.sport}.p.rapidapi.com`
			}
		};
			
		fetch(`https://api-${formState.sport}.p.rapidapi.com/games?date=2019-11-26`, options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));

	}

  return (
    <div className="App">
		<div className="header">
			<h3>What are the odds?</h3>
		</div>
		<div className="main">
			<form className="form" onSubmit={handleSubmit}>
				<label>sport </label>

					<select 
						className="select"
						onChange={handleChange} 
						value={formState.sport}
					>
						<option value="football">football</option>
						<option value="basketball">basketball</option>
					</select>
					<label>league </label>

					<select 
						className="select"
						onChange={handleChange} 
						value={formState.sport}
					>	
					</select>

				<label>select date</label>
				<DatePicker 
					onChange={dateChange} 
					value={date} 
				/>
				<input type="submit" className="button" value="Submit" />
			</form>
			<div>
				<Leagues leagues={leagues}/>
			</div>

		</div>
      {/* {formState.sport} */}
      {/* hello {JSON.stringify(games.response[0])} */}

    </div>
  );
}

export default App;
