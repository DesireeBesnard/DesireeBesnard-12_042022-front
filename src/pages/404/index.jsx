import {Link} from 'react-router-dom'
import './style.css'

function Error404() {
    return (
        <div className='error'>
            <h1>Oops, la page que vous demandez semble ne pas exister</h1>
            <Link to ='/'> Retourner à l'accueil </Link>
        </div>
    )
  }
  
  export default Error404;