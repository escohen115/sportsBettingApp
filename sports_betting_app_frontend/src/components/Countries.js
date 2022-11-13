import React from 'react'

export default function Countries ({countries, handleCountryChange, formState}){

    
    
    let countriesMapped = countries.map(country=>
        (
            <option key={country.id} value={country.name}>{country.name}</option>
        )
    )
    
    return countries.length > 0 ? 
    <select 
        name="country"
        className="select"
        onChange={handleCountryChange} 
        value={formState.country}
    >
        {countriesMapped}	
    </select>
     : <div></div>
    
}