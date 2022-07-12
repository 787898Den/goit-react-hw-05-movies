import React, {  useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {getMovieCredits} from '../../Service/Api';
import defaultImg from '../../images/Unknown Profile Picture Png.png';
import styles from '../Cast/Cast.module.css';

export const Cast = () =>{
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    
    useEffect(()=>{
        getMovieCredits(movieId).then(data=>{
            setCast(data.cast);
            
        });
    },[movieId]);
    
    return(
        <>
            {cast&&(
            <ul className={styles.list}>
                {cast.map(item=>(
                    
                    <li className={styles.item} key={item.id}>
                        <img className={styles.roleImg} src= {item.profile_path ? (`https://image.tmdb.org/t/p/w500${item.profile_path}`) : (defaultImg)} alt={item.name}></img>
                        <p className={styles.title}>{item.name}</p>
                        <p className={styles.character}>Character:{item.character}</p>
                    </li>
                ))}
            </ul> 
            )}
        </>
         
    );
    
}