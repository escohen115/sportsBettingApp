import React from 'react'


export default function Teams ({teams, handleChange, formState}){
    

    teams.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.firstname) { return 1; }
        return 0;
    })

    
    let teamsMapped = teams.map(team=>
        (
            <option key={team.id} value={team.id}>{team.name}</option>
        )
    )

    return teams.length > 1 ? 
    <select 
        name="league"
        className="select"
        onChange={handleChange} 
        value={formState.team.name}
    >
        {teamsMapped}	
    </select>
     : <div></div>

    
}