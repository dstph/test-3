import React from 'react'

const UniversityInfo = ({number, name, url})=>(
  <tr>  
    <td><p>{number}</p></td>
    <td><p>{name}</p></td>
    <td><a href={url}>link</a></td>
  </tr>  
)

export default UniversityInfo;