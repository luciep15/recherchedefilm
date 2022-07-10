import React from 'react';
import {Link} from 'react-router-dom';
import {searchMovieWithKeyWord} from '../api/moviedb'
export default class Recherche extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			movies: []
		}
	}
	onChangeValue = (e)=>{
	this.setState({value: e.currentTarget.value})
	}
	
    onClickSearchMovie = (e)=>{
		e.preventDefault();
		console.log(this.state.value);
		
		searchMovieWithKeyWord(this.state.value)
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
    	     <h1>Moteur de recherche de film</h1>
    	     <div className="recherche">
    	     <h2>Trouver un film : </h2>
    	     <form>
    	        <input type="text"
				    value={this.state.value}
					onChange={(e)=>{
					this.onChangeValue(e);
				}}
				/>
				<button
					onClick={(e)=>{
					this.onClickSearchMovie(e)
					}}
				>
			    chercher
				</button>
    	     </form>
    	     </div>
    	     
    	     	{this.state.movies.length > 0 && <article className="result">
					{this.state.movies.map((movie)=>{
						return <div className="movie" key={movie.id}>
						<Link to={"/detail/"+movie.id}>{movie.original_title} 
						<img  src={url_img+ movie.poster_path} /></Link>
						
						</div>
						
					})}
				</article>}
		
	     </div>
	        
	        
	        )
	}
}