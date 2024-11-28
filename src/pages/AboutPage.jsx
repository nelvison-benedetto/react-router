import {Link} from 'react-router-dom'
import postCyberunk from '../../public/imgs/cyberpunk1.png'
import Jumbotron from '../components/jumbotron'


export default function AboutPage(){
    const pageTitle = "Jumbotron About Page";
    const pageDescription = "Blablablablablahshshshshshsh";

    return(
      <>
        <h2 className="color-otherpages">About Page</h2>
        <Jumbotron pageTitle={pageTitle} pageDescription={pageDescription}/>
        <section>
          <div className="container">
            <div className="row">
              <div className='col'>
                <img src={postCyberunk} alt="post cyberpunk" />
              </div>
              <div className='col'>
                <h3>Our Company</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eaque quos architecto reiciendis sint, provident tenetur debitis dicta autem quibusdam?
                </p>
                <Link className='btn btn-primary' to='/contacts'>Get in touch</Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}