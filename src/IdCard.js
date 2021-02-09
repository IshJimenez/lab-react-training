import React from 'react'

function IdCard({props}){
    return (
      <div className='container'>
        <div>
          <img className='infoPic' src={props.picture}></img>
        </div>
        <div className='tperson'>
          <p><b>First Name:</b> {props.firstName}</p>
          <p><b>Last Name:</b> {props.lastName}</p>
          <p><b>Gender:</b> {props.gender}</p>
          <p><b>Height:</b> {props.height}</p>
          <p><b>Birth:</b> {props.birth}</p>
        </div>
  
      </div>
    );
  }
  
  export default IdCard 