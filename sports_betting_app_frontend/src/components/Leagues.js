import React from 'react'


export default function Leagues ({leagues, handleChange, formState}){
    

    leagues.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    
    let leaguesMapped = leagues.map(league=>
        (
            <option key={league.id} value={league.id}>{league.name} - {league.country.name}</option>
        )
    )

    return leagues.length > 1 ? 
    <select 
        name="league"
        className="select"
        onChange={handleChange} 
        value={formState.name}
        // id={formState.id}
    >
        {leaguesMapped}	
    </select>
     : <div></div>

    
}