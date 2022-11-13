import React from 'react'

export default function Leagues ({leagues, handleChange, formState}){
    
    let leaguesFiltered = leagues.filter(l=>l.country.name===formState.country)
    
    let leaguesMapped = leaguesFiltered.map(league=>
        (
            <option key={league.id} value={league.id}>{league.name}</option>
        )
    )
    return (
        <select 
        name="league"
        className="select"
        onChange={handleChange} 
        value={formState.league}
        // id={formState.id}
        >
            {leaguesMapped}	
        </select>
    )
    


    
}


    // leagues.sort(function(a, b){
    //     if(a.name < b.name) { return -1; }
    //     if(a.name > b.name) { return 1; }
    //     return 0;
    // })