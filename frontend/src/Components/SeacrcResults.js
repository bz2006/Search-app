import React from 'react'
import { Collapse } from 'antd';
import "./search.css"

function SeacrcResults({Results}) {

    const items = Results

  return (
    <Collapse items={items} size='middle' className='mn-results'  />
  )
}

export default SeacrcResults