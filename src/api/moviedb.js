import axios from 'axios';

const API_KEY = "cd73caafabf98c482128893bc7376f8f"

export const searchMovieWithKeyWord = (keyword)=>{
    return axios.get("https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&query="+keyword)
        .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        })
}

// recherche par film en fonction d'un id
//https://api.themoviedb.org/3/company/'+id+'?api_key='+API_KEY

export const getMovieWithId = (id)=>{
    return axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+API_KEY)
        .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        })
}
 export const searchMovieTendance =(movie)=>{
     return axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key="+ API_KEY)
        .then((response)=>{
         console.log("axios", response.data)
         return response.data;
        })
        .catch((err)=>{
             return err
        })
}