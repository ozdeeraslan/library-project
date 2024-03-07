import { useContext } from 'react'
import '../assets/styles/form.scss'
import DataContext from '../context/DataContext'

const Form = () => {
  const {
    handleSubmit,
    state, dispatch
    // case-10/15 formCaseleri
  } = useContext(DataContext)

  // buradaki yapilan context'e tasindi.
  return (
    <div className='form-container'>
      <h2>{state.secilenKitap ? "Edit a Book!" : "Add a Book!"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input value={state.kitapAdi} onChange={(e) => { dispatch({ type: "kitapAdi", payload: e.target.value }) }} type="text" placeholder='Book Name' />
        </div>
        <div>
          <input value={state.kitapYazari} onChange={(e) => { dispatch({ type: "kitapYazari", payload: e.target.value }) }} type="text" placeholder='Book Author' />
        </div>
        <div>
          <select value={state.kitapKategorisi} onChange={(e) => { dispatch({ type: "kitapKategorisi", payload: e.target.value }) }}>
            <option>--Choose a Category--</option>
            <option>Software</option>
            <option>Literature</option>
            <option>History</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <input value={state.kitapSayfaSayisi} onChange={(e) => { dispatch({ type: "kitapSayfaSayisi", payload: e.target.value }) }} type="number" placeholder='Number of Pages' />
        </div>
        <div>
          <input value={state.kitapResmi} onChange={(e) => { dispatch({ type: "kitapResmi", payload: e.target.value }) }} type="text" placeholder='Book Image (Url)' />
        </div>
        <div>
          <textarea value={state.kitapAciklamasi} onChange={(e) => { dispatch({ type: "kitapAciklamasi", payload: e.target.value }) }} placeholder='Book Description'></textarea>
        </div>
        <input disabled={state.kitapAdi === "" || state.kitapYazari === "" || state.kitapKategorisi === "" || state.kitapSayfaSayisi === 0 || state.kitapAciklamasi === ""} type="submit" value={state.secilenKitap ? "Edit" : "Add"} />
      </form>

    </div>
  )
}

export default Form
