import './App.css'
import CardList from './components/CardList';
import Form from './components/Form';
import Navi from './components/Navi'
import Search from './components/Search';
// import { data, kategori } from './assets/data/data';

function App() {
    // buradaki yapilan context'e tasindi.
  return (
    <>
      <Navi />
      <Form />
      <Search />
      <CardList />
    </>
  )
}

export default App
