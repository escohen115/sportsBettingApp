import React from 'react'

export default function Countries ({countries, handleChange, formState}){
    
    console.log(countries)
    
    let countriesMapped = countries.map(country=>
        (
            <option key={country.id} value={country.id}>{country.name}</option>
        )
    )
    
    return countries.length > 1 ? 
    <select 
        name="country"
        className="select"
        onChange={handleChange} 
        value={formState.name}
    >
        {countriesMapped}	
    </select>
     : <div></div>
    
}