import {NavLink, Link} from 'react-router-dom'
import './style.css'

function NavBar() {
    return (
        <header className='container header'>
            <Link to ='/' ><img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt='logo Kasa' className='logo' /></Link>
            <nav>
                <NavLink to='/12' >Accueil</NavLink>
                <NavLink to='/profil' >Profil</NavLink>
                <NavLink to='/settings' >Réglage</NavLink>
                <NavLink to='/community' >Communité</NavLink>
            </nav>
        </header>
    )
}

export default NavBar