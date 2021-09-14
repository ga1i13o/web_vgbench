import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import pipeline from './imgs/pipeline.png';
import { Container} from 'react-bootstrap';
import { homeText } from './textWalls';


function Home(props){
    return (
        <>
        <div className="text-center">
        <img src={pipeline} className="esc-logo slide-top center-block"  
        alt='pipeline representation'
        style={{
    flex: 1,
    width: '750px',
    height: '350px',
    resizeMode: 'contain' }}
        />
        </div>

        <div className="d-block mt-5 justify-content-between" 
            style={{ marginLeft: '10rem', marginRight: '10rem' }}>
        
            <h2>The Visual Geo-localization benchmark</h2>
            <div className="mt-4">
                {homeText()}
            </div>
        </div></>
    )
}

export { Home };