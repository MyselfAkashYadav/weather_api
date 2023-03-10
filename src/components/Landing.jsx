import React from 'react';
import Search from './Searchbar';
import LandingCss from './landing.module.css';
import Forecast from './Forecast';
import Result from './Result';
import Preloader from './Preloader.jsx';
import Error from './Error.jsx';
// import Loader from './Preloader.jsx'
function Landing() {
  // Result();
  const [isError,isLoading,forecast,submitRequest]=Result();
  const onSubmit = (value) =>{
          // call in here 
          // console.log({value});
          submitRequest(value)
  };
  return (
    <div className={LandingCss.conatiner}>
        <div className={LandingCss.heading}>
            <h1>Weather Report</h1>

        </div>

        <div className={LandingCss.text}>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos deserunt magni quibusdam cupiditate. Numquam repellat similique quasi blanditiis nobis dolor vel, beatae expedita, consectetur, officiis quisquam exercitationem. Ullam soluta odio facere consequuntur, eius porro amet natus quisquam hic minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore quidem fuga laudantium est vero quis similique tempore qui. Similique!</h3>

        </div>

        <div className={LandingCss.display}>
        {/* <Search/> */}
        {!isLoading && <Search submitSearch={onSubmit}/>}
        {/* we can store error message in - iserror insted of only showing true.... */}
        {isError && <Error message={isError}/>}
        {isLoading && <Preloader/>}
        {forecast && <Forecast/>}

        {/* <Result/> */}

        
        </div>



       
         
        

    </div>
  )
}

export default Landing