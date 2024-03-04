import React, { useContext } from 'react';
import '../assets/styles/search.scss';
import DataContext from '../context/DataContext';


const Search = () => {
  const {setSearch} = useContext(DataContext)
  return (
    <div className='search-container'>
        <input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder='Search Books...' />
        <input type="submit" value="&#128269;" />
    </div>
  );
};

export default Search;
