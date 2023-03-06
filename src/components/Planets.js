import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { get_species } from "../api_endpoints/get_requests/Endpoints";

const Planes = () => {
  const [page,setPage] = useState(1);
  const {data, status, error} = useQuery({
    queryKey: ["species",page],
    queryFn: get_species
  })
  return ( 
    <div>
      {status === "loading" ? <div>Loading....</div> : null}
      {status === "error" ? <div>Error fetching data....</div> : null}
      {status === "success" && (
        <>
          <h2>Species</h2>
          <nav>
            <button onClick={() => {
              setPage(old => Math.max(1,old - 1));
            }}>Previous Page</button>
            <button onClick={() => {
              {data.next !== null ? setPage(old => old + 1) : alert("No more content to view")}
            }}>Next Page</button>
          </nav> 
          <ul className = "species_details">
            {data?.results?.map((value,index) => {
              return (
                <li key = {index}>
                  <h2>Name: {value.name}</h2>
                  <h4>Classificatoin: {value.classification}</h4>
                  <h4>Average Life Span: {value.average_lifespan}</h4>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
   );
}
 
export default Planes;
