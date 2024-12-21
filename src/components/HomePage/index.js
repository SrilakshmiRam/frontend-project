import { Link } from 'react-router-dom'
import './index.css'

import ListPage from '../LIstPage'

const Home=()=>(
    <div className='home-container'>
        <nav className='navbar'>
            <Link to='/' className='nav-link'>
            <button className='nav-button'>Home</button>
            </Link>
            <Link to='/contact' className='nav-link'>
            <button className='nav-button'>Contact</button></Link>
            <Link to='/about' className='nav-link'>
            <button className='nav-button'>About</button></Link>
            <Link to='/add-edit-item' className='nav-link'>
            <button className='nav-button'>Add Item</button>
            </Link>
        </nav>
        <ListPage/>
    </div>
)


export default Home