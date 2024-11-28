import { useParams } from "react-router-dom";

export default function SingleMangaPage(){
    const {id} = useParams(); 
    return(
        <>
        <h1>Manga id: {id}</h1>
        </>
    );
}