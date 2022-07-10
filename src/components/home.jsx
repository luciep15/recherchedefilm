import React from 'react';
import {Link} from 'react-router-dom';
import {searchMovieTendance} from '../api/moviedb'
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		}
	}

    componentDidMount(){
		
		searchMovieTendance()
		.then((res)=>{
			console.log(res);
			this.setState({movies: res.results}, ()=>{console.log(this.state)});
		})
		.catch(err=>console.log(err))
	}	
	
	render(){
		 const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
	    return (
	     <div>
    	     <h1>Les 20 films tendances du moment</h1>
    	     	{this.state.movies.length > 0 && <article className="articleHome">
					{this.state.movies.map((movie)=>{
						return <div className="movieHome" key={movie.id}>
						<Link to={"/detail/"+movie.id}>{movie.original_title} 
						<img  src={url_img+ movie.poster_path} /></Link>
						<p>Note : {movie.vote_average} / 10 </p>
						<p>Description : {movie.overview.substr(0, 50)}... </p>
						</div>
					})}
					</article>}
	     </div>
	        
	        )
	}
}