import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { get_person } from '../api_endpoints/get_requests/Endpoints';

const People = () => {
  const [page,setPage] = useState(1);
  const {data, status, error} = useQuery({
    queryKey: ["people",page],
    queryFn: get_person,
    keepPreviousData: true
  })
  return ( 
    <div>
      {status === "loading" ? <div>Loading....</div> : null}
      {status === "error" ? <div>Error fetching data....</div> : null}
      {status === "success" && (
        <>
          <nav>
            <button onClick={() => {
              setPage(old => Math.max(1,old - 1));
            }}>Previous Page</button>
            <button onClick={() => {
              {data.next !== null ? setPage(old => old + 1) : alert("No more content to view")}
            }}>Next Page</button>
            <h3 style = {{paddingTop: "10px"}}> You are on page: {page} </h3>
          </nav> 
          <ul className = "species_details">
            {data?.results?.map((value,index) => {
              return (
                <li key = {index}>
                  <h2>Name: {value.name}</h2>
                  <h4>Height: {value.height}</h4>
                  <h4>Mass: {value.mass}</h4>
                  <h4>Gender: {value.gender}</h4>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
   );
}
 
export default People;