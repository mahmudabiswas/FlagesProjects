import React, { useEffect, useState } from 'react'
import Country from './Country';
import "./Country.css"

const Countries = () => {
    const [data, SetData] = useState([]);
    const [ visitedCountries, setVisitedCountries]=useState([])
    const [visitedFlags, setVisitedFlages] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
        .then(data=>SetData(data))
    }, [])
    
    // visited COuntry info

    const handlecVisitedCountry = country => {
        console.log(country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = flag => {
        console.log("flag adding")
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlages(newVisitedFlags)
    }

  return (
      <div>Countries:{data.length}
          
          <div>
              <h5>Visited Countries:{visitedCountries.length}</h5>
              <ol>
                  {
                      visitedCountries.map(country => <li key={country.cca2}> {country.name.common}</li>)
                  }
              </ol>
          </div>
          
          {/* show visited flages */}
          <div className='flag-container'>
              {
                  visitedFlags.map((flag, idx)=> <img className='flag-container' key={idx} src={flag} alt='flags'/>  )
              }
              
          </div>

          {/*  remove item from an array in a state */}
          {/* use filter to select all the element expect  */}

{/* display countries */}
          <div className='country-container'>
              
         
      {
              data.map(country =>  <Country key={country.cca2}
                  handlecVisitedCountry={handlecVisitedCountry}
                  handleVisitedFlags={handleVisitedFlags}
                  country={country} />)
          }

          </div>


          </div>
  )
}

export default Countries