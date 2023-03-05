import React from 'react'
import Search from './Searchbar'
import LandingCss from './landing.module.css'

function Landing() {
  return (
    <div className={LandingCss.conatiner}>
        <div className={LandingCss.heading}>
            <h1>Weather Report</h1>

        </div>

        <div className={LandingCss.text}>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos deserunt magni quibusdam cupiditate. Numquam repellat similique quasi blanditiis nobis dolor vel, beatae expedita, consectetur, officiis quisquam exercitationem. Ullam soluta odio facere consequuntur, eius porro amet natus quisquam hic minima.</h3>

        </div>

        <div className={LandingCss.display}>
        <Search/>


        </div>

       
         
        

    </div>
  )
}

export default Landing