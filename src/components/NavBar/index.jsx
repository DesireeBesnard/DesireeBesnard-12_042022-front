import {NavLink, Link} from 'react-router-dom'
import '../../style/Home.css'
import '../../style/HorizontalNavigation.css'

function HorizontalNavigation() {
    return (
        <header className='container header'>
            <Link to ='/' ><img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt='logo Kasa' className='logo' /></Link>
            <nav>
                <NavLink to='/' >Accueil</NavLink>
                <NavLink to='/profil' >Profil</NavLink>
                <NavLink to='/settings' >Réglage</NavLink>
                <NavLink to='/community' >Communité</NavLink>
            </nav>
        </header>
    )
}

export default HorizontalNavigation