import React, {  useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {getMovieCredits} from '../../Service/Api';
import defaultImg from '../../images/Unknown Profile Picture Png.png';
import { Character, Img, Item, List, Title } from "./Cast.styled";

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
            <List>
                {cast.map(item=>(
                    
                    <Item key={item.id}>
                        <Img src= {item.profile_path ? (`https://image.tmdb.org/t/p/w500${item.profile_path}`) : (defaultImg)} alt={item.name}></Img>
                        <Title>{item.name}</Title>
                        <Character>Character:{item.character}</Character>
                    </Item>
                ))}
            </List> 
            )}
        </>
         
    );
    
}