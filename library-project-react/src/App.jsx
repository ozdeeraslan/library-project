import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './services/PrivateRoute';
import Form from './components/Form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  // buradaki yapilar context'e tasindi.

  return (
    <AuthProvider>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<Home/>}>
            <Route path='/' element={<PrivateRoute element={<Form />}/>}/>
          </Route>
        </Routes>  
      </BrowserRouter>
      
    </AuthProvider>
  )
}

export default App
