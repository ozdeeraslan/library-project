import React, { useContext } from 'react'
import LibLogo from '../assets/img/navLogo.png'
import '../assets/styles/navi.scss'
import DataContext from '../context/DataContext'


const Navi = () => {
  const { state, dispatch } = useContext(DataContext)
  return (
    <nav>
      <div className='brand'>
        <img src={LibLogo} alt="logo" />
        <h3>My Library</h3>
      </div>
      <ul>
        {state.kategoriler.map((item) => (
          // case-9
          <li onClick={(e) => dispatch({type:"secilenKategori", payload:e.target.innerText})} key={item.id}>{item.kategoriAdi}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navi