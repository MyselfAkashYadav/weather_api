import React from 'react'
import searchCss from './searchbar.module.css'

function Searchbar() {
  return (
    <div>
         <div className={searchCss.search_container}>
            <div className={searchCss.search}>
              
              <input type="text" placeholder='search location' />
              </div>
              <div className={searchCss.btn}>

            <button>search</button>
              </div>

        </div>

    </div>
  )
}

export default Searchbar