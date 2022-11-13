import React from 'react'


export default function Teams ({teams, handleChange, formState}){

    console.log(teams)
    if (teams){
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
            name="league"
            className="select"
            onChange={handleChange} 
            value={formState.team}
        >
            {teamsMapped}	
        </select>
        )
    }else{
        return <div></div>
    }
    
   

    
}