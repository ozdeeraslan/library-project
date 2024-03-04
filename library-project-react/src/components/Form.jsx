import { useContext } from 'react'
import '../assets/styles/form.scss'
import DataContext from '../context/DataContext'

const Form = () => {
  const {
    handleSubmit, secilenKitap,
    kitapAdi,
    kitapYazari,
    kitapKategorisi,
    kitapSayfaSayisi,
    kitapResmi,
    kitapAciklamasi,
    setKitapAdi,
    setKitapYazari,
    setKitapKategorisi,
    setKitapSayfaSayisi,
    setKitapResmi,
    setKitapAciklamasi
  } = useContext(DataContext)

  // buradaki yapilan context'e tasindi.
  return (
    <div className='form-container'>
      <h2>{secilenKitap ? "Edit a Book!" : "Add a Book!"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input value={kitapAdi} onChange={(e) => { setKitapAdi(e.target.value) }} type="text" placeholder='Book Name' />
        </div>
        <div>
          <input value={kitapYazari} onChange={(e) => { setKitapYazari(e.target.value) }} type="text" placeholder='Book Author' />
        </div>
        <div>
          <select value={kitapKategorisi} onChange={(e) => { setKitapKategorisi(e.target.value) }}>
            <option>--Choose a Category--</option>
            <option>Software</option>
            <option>Literature</option>
            <option>History</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <input value={kitapSayfaSayisi} onChange={(e) => { setKitapSayfaSayisi(e.target.value) }} type="number" placeholder='Number of Pages' />
        </div>
        <div>
          <input value={kitapResmi} onChange={(e) => { setKitapResmi(e.target.value) }} type="text" placeholder='Book Image (Url)' />
        </div>
        <div>
          <textarea value={kitapAciklamasi} onChange={(e) => { setKitapAciklamasi(e.target.value) }} placeholder='Book Description'></textarea>
        </div>
        <input disabled={kitapAdi === "" || kitapYazari === "" || kitapKategorisi === "" || kitapSayfaSayisi === 0 || kitapAciklamasi === ""} type="submit" value={secilenKitap ? "Edit" : "Add"} />
      </form>

    </div>
  )
}

export default Form
