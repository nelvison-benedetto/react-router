//ButtonTrash.jsx
export default function ButtonTrash({mangaId, onTrashManga}){ //i nomi delle props devono essere IDENTICI a quelli dichiarati nelfather
    return(
        <button onClick={()=>onTrashManga(mangaId)} className="btn btn-danger" aria-label="Delete manga">  
          {/*() => onTrashManga(mangaId), non va bene onTrashManga(mangaId) viene eseguito al rendering e non al click del button!*/}
            <i className='bi bi-trash'></i>
        </button>
    );
}