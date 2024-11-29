//ManhuaCard.jsx
import ButtonBuy from '../Buttons/ButtonBuy'
import ButtonTrash from '../Buttons/ButtonTrash';
import { Link } from 'react-router-dom';

export default function ManhuaCard({data, onTrashManga}){

    // console.log(process.env.REACT_APP_TARGET_HOST); errori quando usao la env var
    // console.log(process.env.REACT_APP_TARGET_PORT);

    // const targetHOST = process.env.REACT_APP_TARGET_HOST;
    // const targetPORT = process.env.REACT_APP_TARGET_PORT;
    // const targetBaseURL = `${targetHOST}:${targetPORT}/`;

    return(
        <div id='manhuas' className='col'>
            <div className="bg-white rounded px-3 pt-3 d-flex justify-content-center position-relative custom-card">
                <div className="d-flex flex-column gap-2 card-content">
                    <Link to={`/manga/${data.id}`}>
                        <div className="inner-image bg-blue2 d-flex justify-content-center align-items-center">
                            <img src={`http://localhost:3001/${data.file}`} alt="cover image" className="img-fluid"/>  {/*better env vars x link localhost*/}
                        </div>
                        <h1 className="title">{data.title}</h1>
                        <p>{data.content}</p>
                    </Link>
                    <ButtonTrash mangaId={data.id} onTrashManga={onTrashManga}/>
                </div>
                <img
                    src='../../public/imgs/pin.svg'
                    className="pin-card position-absolute top-0"
                    alt="pin card"
                />   
            </div>
        </div>
    );
} 