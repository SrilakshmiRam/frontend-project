import {BrowserRouter,Routes,Route} from 'react-router-dom'

import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import AddorEditPage from './components/AddorEditPage';
import DeletePage from './components/DeletePage';
import Edit from './components/Edit';

import './App.css';

const App=()=>(
  <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/add-edit-item' element={<AddorEditPage/>}/>
        <Route excat path='/delete/:id' element={<DeletePage/>} />
        <Route exact path='/details/:id' element={<DetailsPage/>} />
        <Route exact path='/edit/:id' element={<Edit/>} />
      </Routes>
  </BrowserRouter>
)

export default App;
