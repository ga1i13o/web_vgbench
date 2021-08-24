import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';


function Datasets(props){
    return (
        <>
            <div className="d-block mt-5 justify-content-between" 
        style={{ marginLeft: '10rem', marginRight: '10rem' }}>
        
            <h3>Geo-Localization datasets</h3>
            <div className="mt-4">
                Below you may find some general information about, and links to, the visual place recognition datasets.<br/> 
                For more detailed documentation about the organization of each dataset, please refer to the accompanying readme file for each dataset. 
                The license terms and conditions are also laid out in the readme files. 
                <br/>
                During the years, a large number of datasets has been proposed for visual geolocalization.
                An ideal dataset for visual geolocalization should have the following properties: 
                <ul>
                    <li>dense</li>
                    <li>large-scale</li>
                    <li>include GPS labels</li>
                    <li>include a time machine, for training only</li>
                </ul> 
                Dense datasets require for the gallery images to be located within one (or sometimes more)  
                given area, so that an unseen query can have at least one positive if taken within such
                area. <br/> Note that datasets commonly used in image retrieval, such as Google Landmarks, Oxford and Paris, do not satisfy this
                requirement. Moreover, some datasets are very dense, usually because they were collected with a 
                driving car taking photos at many frames-per-second, making most images very close to their
                nearest neighbor.<br/> Such datasets usually cover a smaller area than visual geolocalization datasets, and are often 
                used for pose estimation, which aims at finding the precise 6DoF of the camera. 
                <br/>Time machine refers to the presence of images collected at different times in the same location.
                Note that time machine is essential for training a neural network, because it allows the
                model to build robustness to temporal change.
                </div>

                <Card className="mt-4">
                    <Card.Header>Pittsburgh</Card.Header>
                    <Card.Body>
                        <Card.Title>Pitts30k</Card.Title>
                        <Card.Text>
                            Developed by Arandjelovic et al., presented together with the
                            widely used NetVLAD layer. It is available in an extended (Pitts250k) and 
                            reduced (Pitts30k) version. <br/>In our benchmark we used predominantly the latter.
                            It is available from the author's website on request.
                        </Card.Text>
                        <Button href="https://www.di.ens.fr/willow/research/netvlad/" variant="primary">Download Pittsburgh</Button>
                    </Card.Body>
                </Card>


                <Card className="mt-4">
                    <Card.Header>Mapillary</Card.Header>
                    <Card.Body>
                        <Card.Title>Mapillary Street-level Sequences</Card.Title>
                        <Card.Text>
                            Mapillary Street-level Sequences (MSLS) is a large-scale long-term place recognition
                            dataset that contains 1.6M street-level images developed by the homonymous company.
                            It is a huge project that contains images spanning over a decade from 30 cities all over
                            the world, as well as different domains (night/day, winter/summer, Sunny/Rainy..).
                            It is also possible to use seq2seq, im2seq, seq2im data; the focus is on 
                            Lifelong place recognition, to build robust and efficient geo-localization systems.
                            It is free to download upon registration on their website. 
                        </Card.Text>
                        <Button href="https://www.mapillary.com/dataset/places" variant="primary">Download Mapillary</Button>
                    </Card.Body>
                </Card>

                <Card className="mt-4">
                    <Card.Header>Tokyo</Card.Header>
                    <Card.Body>
                        <Card.Title>Tokyo 24/7</Card.Title>
                        <Card.Text>
                            Collected again by Arandjelovic et al., the dataset contains images from the city of
                            Tokyo with a focus on domain shifts: each place in the query set is captured at 
                            different times of day: daytime, sunset, and night.  
                            Therefore there can be major changes in appearance (illumination and viewpoint changes in the scene) 
                            Available upon request on the related website.
                        </Card.Text>
                        <Button href="http://www.ok.ctrl.titech.ac.jp/~torii/project/247/" variant="primary">Download Tokyo 24/7</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export { Datasets };