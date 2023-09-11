import React, { useState } from 'react'
import "./Country.css"
import CountryDetail from '../Countrydetail.jsx/CountryDetail'
const Country = ({country, handlecVisitedCountry,handleVisitedFlags}  ) => {
    console.log(country)
    const { continents, flags, population, area, cca3 } = country
    const [visited, setVisited] = useState(false)

    const hadleClickVisited = () => {
        setVisited(!visited)
    }
    
    const passWithparams = () => {
        handlecVisitedCountry(country)
    }

  return (
      <div className={`flag ${visited ? "visited":"red"} `}>
          <h3>name : {continents}</h3>
          <img src={flags.png} alt="" className='img_container' />
          <p>population : {population}</p>
          <p> area : {area}</p>
          <p> code : {cca3}</p>
          <button onClick={passWithparams} >Mark Visited</button>
          <button onClick={()=>handleVisitedFlags(country.flags.png)} >Add Visited Flage</button>
          <br/>
          <button onClick={hadleClickVisited} >{visited ? "visited" : " i want to go"}</button>
          {visited ? " i have visited this country" : ""}
          <CountryDetail/>
      </div>
  )
}

export default Country