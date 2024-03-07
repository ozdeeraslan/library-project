import React, { useContext } from 'react';
import '../assets/styles/search.scss';
import DataContext from '../context/DataContext';


const Search = () => {
  const { dispatch } = useContext(DataContext)
  return (
    <div className='search-container'>
      {/* case-8 */}
      <input onChange={(e) => dispatch({ type: "search", payload: e.target.value })} type="text" placeholder='Search Books...' />
      <input type="submit" value="&#128269;" />
    </div>
  );
};

export default Search;
