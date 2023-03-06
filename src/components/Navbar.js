import React from 'react';

const Navbar = ({ setPage }) => {
  return ( 
    <nav>
      <button onClick={() => setPage('planets')}>Species</button>
      <button onClick={() => setPage('chars')}>People</button>
    </nav>
  );
}
 
export default Navbar;