import {Link} from 'react-router-dom'
import './style.css'

function VerticalNavigation() {
    const date = new Date().getFullYear()
    return (
        <aside className='sidebar'>
            <button className='activity'><Link to ='/:id/activities/yoga' ><img src={process.env.PUBLIC_URL + '/assets/meditation.png'} alt='yoga activity' /></Link></button>
            <button className='activity'><Link to ='/:id/activities/swimming' ><img src={process.env.PUBLIC_URL + '/assets/swimming.png'} alt='swimming activity' /></Link></button>
            <button className='activity'><Link to ='/:id/activities/cycling' ><img src={process.env.PUBLIC_URL + '/assets/cycling.png'} alt='cycling activity' /></Link></button>
            <button className='activity'><Link to ='/:id/activities/bodybuilding' ><img src={process.env.PUBLIC_URL + '/assets/bodybuilding.png'} alt='bodybuilding activity' /></Link></button>
            <p>{'Copyright, Sportsee ' + date}</p>
        </aside>

    )
}

export default VerticalNavigation