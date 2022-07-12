import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {getMovieReviews} from '../../Service/Api';


export const Reviews = () =>{
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    

    useEffect(()=>{
        getMovieReviews(movieId).then(data=>setReviews(data.results));
    },[movieId]);
        
    return(
        <>
            {reviews&&(
            <ul>
                {reviews.map(review=>(
                    <li key={review.author_details.username}>
                        <p>Author:{review.author}</p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul> 
            )}
        </>
         
    );
    
}