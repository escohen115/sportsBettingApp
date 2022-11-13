import React from 'react'

export default function Countries ({countries, handleChange, formState}){
    
    let countriesMapped = countries.map(country=>
        (
            <option key={country.id} value={country.name}>{country.name}</option>
        )
    )
    
    return countries.length > 1 ? 
    <select 
        name="country"
        className="select"
        onChange={handleChange} 
        value={formState.country}
    >
        {countriesMapped}	
    </select>
     : <div></div>
    
}