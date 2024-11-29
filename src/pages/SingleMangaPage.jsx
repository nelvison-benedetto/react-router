import { useParams , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

export default function SingleMangaPage(){

    const navigate = useNavigate();
    const [manga, setManga] = useState(null);
    const {id} = useParams();   //get the id when you insert in url ...manga/2 get 2
    console.log({id});
    const url = `http://localhost:3001/manga/${id}`;

    useEffect(()=>{
        fetch(url)
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            const keys = Object.keys(data);
            console.log(keys);
            if (keys.includes('error')) {
              navigate('*');
            } else {
              setManga(data.data);
            }
          })
          .catch(err=>{
            console.log(err);
          })
    },[]);
    return(
        <>
          <h1>Manga id: {id}</h1>
          {
            manga? (
              <section className="manga_details">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="card border-0 rounded-4 shadow-lg">
                        <img className="card-img-top rounded-4" src={`http://localhost:3001/${manga.file}`} alt="" />
                      </div>
                    </div>
                    <div className="col">
                      <h3>{manga.title}</h3>
                      <div>
                        <p>
                          {manga.content}
                        </p>
                        <div className="price">€{manga.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          ) : (<div>loading...</div>)
          }
        </>
    );
}