import React from 'react'
import { Link } from 'react-router-dom'

export default function ListDogs({dogs}) {
    // console.log("dogs :",dogs);
  return (
    <div>
        <Link to={`/list/${dogs}`} relative="path">
        <div id="dogList">
            {dogs}
        </div>
        </Link>
    </div>
  )
}
