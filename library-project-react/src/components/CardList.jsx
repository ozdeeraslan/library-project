import React, { useContext } from 'react'
import Card from './Card'
import '../assets/styles/cardlist.scss'
import DataContext from '../context/DataContext'

const CardList = () => {
  const { search, kitaplik } = useContext(DataContext);
  return (
    <div className='card-list'>
      {
        kitaplik.map(kitap =>
          !kitap.isDeleted&&
          (   
            (         
            kitap.kitapAdi.toLowerCase().startsWith(search.toLowerCase())
            ||
            kitap.kitapYazari.toLowerCase().startsWith(search.toLowerCase())
            )          
          &&
          <Card key={kitap.id} kitap={kitap} />
          )
        )
      }
    </div>
  )
}

export default CardList