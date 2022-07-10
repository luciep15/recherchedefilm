import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render(){
        return(
           <div className="header">
           <nav>
           <Link to= "/" className="a">Home</Link>
		   <Link to="/recherche" className="a" >Recherche d'un film</Link>
           </nav>
           </div>
        )
    }
}