import React from 'react'


export default function Leagues ({leagues}){
    leagues.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.firstname) { return 1; }
        return 0;
    })

    console.log(leagues)
    let leaguesMapped = leagues.map(league=>
        (
            <li>
                {league.name}
            </li>
        )
    )

    return (
        <ul>{leaguesMapped}</ul>
    )

    
}