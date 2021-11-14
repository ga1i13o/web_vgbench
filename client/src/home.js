import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import pipeline from './imgs/pipeline.png';
import { Container, Alert } from 'react-bootstrap';
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
                <Alert variant='warning'>
                    Disclaimer: this website is related to the VG benchmark project, a paper which is currently under review for 
                    the CVPR 2022 conference. To not undermine the double-blind review process, all links to software and authors
                    have been removed and will be restored upon acceptance of the paper.
                </Alert>
                {homeText()}
            </div>
        </div></>
    )
}

export { Home };