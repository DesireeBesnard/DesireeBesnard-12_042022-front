import {NavLink, Link} from 'react-router-dom'
import './style.css'

function NavBar() {
    return (
        <header className='container header'>
            <Link to ='/' ><img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt='logo Kasa' className='logo' /></Link>
            <nav>
                <NavLink to='/' >Accueil</NavLink>
                <NavLink to='/user/profil' >Profil</NavLink>
                <NavLink to='/user/settings' >Réglage</NavLink>
                <NavLink to='/user/community' >Communité</NavLink>
            </nav>
        </header>
    )
}

export default NavBar