import React, { useContext } from 'react'
import Card from './Card'
import '../assets/styles/cardlist.scss'
import DataContext from '../context/DataContext'

const CardList = () => {
  const { state } = useContext(DataContext);
  return (
    <div className='card-list'>
      {
        state.kitaplik.map(kitap=>
            !kitap.isDeleted&&
            (
              (
              kitap.kitapYazari.toLowerCase().startsWith(state.search.toLowerCase())
              ||
              kitap.kitapAdi.toLowerCase().startsWith(state.search.toLowerCase())
              )
              &&
              <Card key={kitap.id} kitap={kitap}/>
            )
          )
      }
    </div>
  )
}

export default CardList