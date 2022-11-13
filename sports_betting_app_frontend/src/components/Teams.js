import React from 'react'


export default function Teams ({teams, handleChange, formState}){
    if (teams.length>0){
        teams.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
    
        
        let teamsMapped = teams.map(team=>
            (
                <option key={team.id} value={team.id}>{team.name}</option>
            )
        )
    
        return (
        <select 
            name="team"
            className="select"
            onChange={handleChange} 
            value={formState.team}
        >
            {teamsMapped}	
        </select>
        )
    }else{
        return (
            <select 
            name="league"
            className="select"
            onChange={handleChange} 
            value={formState.team}
        >
            	<option>Unavailable</option>
        </select>
        )
    }
    
   

    
}