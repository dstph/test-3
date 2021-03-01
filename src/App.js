import React, {useState, useEffect} from 'react';
import UniversityInfo from './components/UniversityInfo/UniversityInfo'
import './App.css';

function App() {
  const [country, setCountry] = useState('');
  const [submit, setSubmit] = useState(false);
  const [university, setUniversity] = useState([]);
  useEffect( () => {
		fetch(`http://universities.hipolabs.com/search?country=${country}`)
		.then( response => response.json() )
		.then( data => setUniversity(data) )
		.catch( (error) => console.log(error) )
	}, [submit, country] );

  return (
    <div className="App">
      <div className="form">
        <input onChange={(e)=>setCountry(e.target.value)} />
        <button onClick={()=>setSubmit(!submit)}>submit</button>
        <button onClick={()=>{
          setSubmit(!submit);
          setUniversity([]);
        }}>clear</button>
      </div>
      {university && submit &&
        <table align="center">
          <caption>University of {country}</caption>
          <th>№</th>
          <th>University name</th>
          <th>Link</th>
          <tbody>
        {university.map((el,index)=>(
          <UniversityInfo key={el.name} number={index+1} name={el.name} url={el.web_pages} />
        ))}
          </tbody>
        </table>
      }
    </div>
  );
}

export default App;
