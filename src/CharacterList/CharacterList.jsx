import { useEffect, useState } from "react";
import CharacterCard from "./characterCard/Character";
import axios from "axios";

export default function CharacterContainer(){
    const [characters, setCharacters] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`https://rickandmortyapi.com/api/character`);
                setCharacters(data.results);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])

    return ( 
        <div class="content_container my-3  border rounded">
            <div className="character_container p-3">
                {characters.map(character => (
                    <CharacterCard key={character.id} {...character} url={character.episode[0]}/>
                ))}
            </div>


            {/* Tried to get Pagination to work within the alloted time, unfortunately I could not get it to work. */}
            {/* <div className="pagination">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            </div> */}
        </div>
    )
}