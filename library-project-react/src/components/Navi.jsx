import React, { useContext } from 'react'
import LibLogo from '../assets/img/navLogo.png'
import '../assets/styles/navi.scss'
import DataContext from '../context/DataContext'


const Navi = () => {
  const { kategoriler, setSecilenKategori } = useContext(DataContext)
  return (
    <nav>
      <div className='brand'>
        <img src={LibLogo} alt="logo" />
        <h3>My Library</h3>
      </div>
      <ul>
        {kategoriler.map((item) => (
          <li onClick={(e) => setSecilenKategori(e.target.innerText)} key={item.id}>{item.kategoriAdi}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navi