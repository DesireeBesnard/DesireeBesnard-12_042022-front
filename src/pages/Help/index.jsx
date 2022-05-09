import React from "react";
import {Link} from 'react-router-dom'
import './style.css'


function Help() {


  return (
    <div className="help">
        <h1>Pour le moment seuls deux utilisateurs ont été moqués. Ils ont respectivement les ID utilisateur 12 et 18.</h1>
        <p>Leurs dashboards sont accessibles grâce aux routes <Link to ='/12' >http://localhost:3001/12</Link> et <Link to ='/18' >http://localhost:3001/18</Link> </p>
    </div>
  )
}

export default Help;
