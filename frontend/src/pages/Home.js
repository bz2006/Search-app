import React from 'react'
import SearchComp from '../Components/search'
import "./home.css"
import Header from '../Components/header'

function HomePage() {
  return (
    <>
      <Header />
      <div className='main'>

        <div className='searcharea'>
          <SearchComp />
        </div>

      </div>
    </>
  )
}

export default HomePage