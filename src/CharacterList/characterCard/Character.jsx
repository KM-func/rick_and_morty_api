import { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterCard(props){

    const [episode, setEpisode] = useState([]);
    
    useEffect(() =>{
        const fetchData = async () => {
          try {
            const {data} = await axios.get(props.episode[0]);
            setEpisode(data.results);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, [])
      
      console.log(episode);
      console.log(props.episode[0])
    return (
        <div className="character_card border border-light rounded">
            <img src={props.image} alt={props.name}/>

            <div className="px-3 py-3 desc">
                <div>
                    <h3><a target="_blank" href={props.url} className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{props.name}</a></h3>
                    <p>Status: {props.status} </p>
                    <p>Race: {props.species} </p>
                </div>
                <div>
                    <p className="text-muted">Last known locations:</p>
                    <p>{props.location.name}</p>
                </div>
            </div>
        </div>
    )
}