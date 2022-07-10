import React from 'react';
import {getMovieWithId} from '../api/moviedb';
import moment from 'moment';

moment.locale('fr');

export default class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie: null
        }
    }
    
    componentDidMount() {
        console.log(this.props.params.id);
        getMovieWithId(this.props.params.id)
        .then((res)=>{
            this.setState({movie: res})
        })
        .catch(err=>console.log(err))
        
    }
    
    render(){
        
        const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
        return(
            <div className="detail">
                {this.state.movie !== null && <div>
                        <img className="image" src={url_img+this.state.movie.poster_path} />
                        <h2>{this.state.movie.original_title}</h2>
                        <h3>Description:</h3>
                        <p className="description">{this.state.movie.overview}</p>
                        <h3>Date:</h3>
                        <p>{moment(this.state.movie.release_date).format('DD-MM-YYYY')}</p>
                        <h3>Compagnies:</h3>
                        <ul id="list">
                        {this.state.movie.production_companies.map((company)=>{
                            return <li key={company.id}>
                                        <a href={company.homepage}>{company.name}</a>
                                    </li>
                        })}
                        </ul>
                    </div>
                }
            </div>
        )
    }
    
}