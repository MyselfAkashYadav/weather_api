import React,{useState} from 'react';
import searchCss from './searchbar.module.css';
import PropTypes from 'prop-types';
function Searchbar({submitSearch}) {
  
  // getting input field data
  const [location,setloacation]=useState('');
  // default reloading behavior of form stoped
  const onSubmit = e=>{
    e.preventDefault();
    // console.log({location})
    if(!location || location==='') return;
    submitSearch(location);
  }

  
   
  return (
    <div>
         <div className={searchCss.search_container}>
              <form onSubmit={onSubmit} className='form'>
            <div className={searchCss.search}>
              <input type="text" placeholder='search location'value={location}
              onChange={e=>setloacation(e.target.value)} />
              </div>
              <div className={searchCss.btn}>

            <button type="submit" onClick={onSubmit}>search</button>
              </div>
              </form>
              

        </div>

    </div>
  )
};
Searchbar.propTypes={
submitSearch:PropTypes.func.isRequired,
};
export default Searchbar