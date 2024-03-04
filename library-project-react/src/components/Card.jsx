import React from 'react'
import '../assets/styles/card.scss'
import Book from '../assets/img/defaultResim.jpg'
import DataContext from '../context/DataContext';
import { useContext } from 'react';


const Card = ({ kitap }) => {
  const { kitapSil, cardDuzenle } = useContext(DataContext);
  return (
    <div key={kitap.id} className="card">
      <button onClick={() => kitapSil(kitap.id)} className='delete'>&#10008;</button>
      <button onClick={() => cardDuzenle(kitap.id)} className='edit'>&#10000;</button>
      <img src={kitap.kitapResmi ? kitap.kitapResmi : Book} alt="kitap-kapak" />
      <div className="card-body">
        <p>{kitap.kitapAdi}</p>
        <p>Author: {kitap.kitapYazari}</p>
        <p>Category: {kitap.kitapKategorisi}</p>
        <p>Pages: {kitap.kitapSayfaSayisi}</p>
        <p>Description: {kitap.kitapAciklamasi.length > 170 ? kitap.kitapAciklamasi.substring(0, kitap.kitapAciklamasi.substring(0, 170).lastIndexOf(" ")) + "..." : kitap.kitapAciklamasi}</p>
      </div>
    </div>
  )
};

export default Card
