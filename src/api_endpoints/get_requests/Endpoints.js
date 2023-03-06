export const get_species = async ({queryKey}) => {
    const res = await fetch(`http://swapi.dev/api/species/?page=${queryKey[1]}`);
    const data = await res.json();  
    return data;
}
export const get_person = async ({queryKey}) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${queryKey[1]}`);
    const data = await res.json();  
    return data;
}