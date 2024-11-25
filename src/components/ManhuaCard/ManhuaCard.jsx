//ManhuaCard.jsx
import ButtonBuy from '../Buttons/ButtonBuy'

export default function ManhuaCard({data, children}){
    console.log(data);
    console.log(data.file);
    console.log(data.fileObl);
    return(
        <div id='manhuas' className='col'>
            <div className="bg-white rounded px-3 pt-3 d-flex justify-content-center position-relative custom-card">
                <div className="d-flex flex-column gap-2 card-content">
                    <div className="inner-image bg-blue2 d-flex justify-content-center align-items-center">
                        <img src={data.fileObl} alt="cover image" className="img-fluid"/>
                    </div>
                    <h1 className="title">{data.title}</h1>
                    <p>{data.content}</p>
                </div>
                {/* <img
                    src='../../public/imgs/pin.svg'
                    className="pin-card position-absolute top-0"
                    alt="pin card"
                />    */}
            </div>
        </div>
    );
} 