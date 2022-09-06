import React from 'react'
import TeamCardArea from '../components/TeamCardArea'

import "../assets/css/Collections.css";

function Team() {
  return (
    <div className='collections'>
        <h1 className='display-1 text-light text-center'>Contributors</h1>
        <TeamCardArea />
    </div>
  )
}

export default Team