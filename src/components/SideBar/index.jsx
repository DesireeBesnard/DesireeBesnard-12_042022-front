import {Link} from 'react-router-dom'
import '../../style/Home.css'
import '../../style/VerticalNavigation.css'

function VerticalNavigation() {
    return (
        <aside className='sidebar'>
            <button className='activity'><Link to ='/activity/yoga' ><img src={process.env.PUBLIC_URL + '/assets/meditation.png'} alt='yoga activity' /></Link></button>
            <button className='activity'><Link to ='/activity/swimming' ><img src={process.env.PUBLIC_URL + '/assets/swimming.png'} alt='swimming activity' /></Link></button>
            <button className='activity'><Link to ='/activity/cycling' ><img src={process.env.PUBLIC_URL + '/assets/cycling.png'} alt='cycling activity' /></Link></button>
            <button className='activity'><Link to ='/activity/bodybuilding' ><img src={process.env.PUBLIC_URL + '/assets/bodybuilding.png'} alt='bodybuilding activity' /></Link></button>
        </aside>

    )
}

export default VerticalNavigation