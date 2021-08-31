import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { Table, Card , Image} from 'react-bootstrap';
import pitts_map from './imgs/map_pitts30k.png';
import msls_map from './imgs/map_msls.png';
import tokyo_map from './imgs/map_tokyo247.png';
import sf_map from './imgs/map_san_francisco.png';
import eyn_map from './imgs/map_eynsham.png';
import lucia_map from './imgs/map_st_lucia.png';
import data_table from './tables/datasets/dataset_table.json';
import { DatasetTable } from './table_data';


function Datasets(props){
    const datasets_table = new DatasetTable(data_table);
    return (
        <>
            <div className="d-block mx-xxl-10 mx-sm-5">
        
            <h3>Geo-Localization datasets</h3>
            <div className="mt-4">
                Below you may find some general information about the visual place recognition datasets, as well as 
                informations about the license terms and conditions for the use of the mentioned datasets.<br/> 
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
                <br/><br/>
                Below is reported first a table summary of the datasets that satisfy the conditions above and that were
                used in our work, and then a presentation more in detail for each one of them.<br/>
                The datasets used in the benchmark provide not only a broad variability in terms of geographical
                locations and domains, but also in the extension of the covered area and how the images 
                are collected (densely on the whole area, or only on some routes).
                </div>
            </div>
            <div>
                <Table striped bordered hover className='mx-auto mt-4' style={{width:'70rem', textAlign:'center'}}>
                    <caption>Table: <b>Summary of the datasets used</b>.Regarding images types:  "panorama" means that the images are 
                    cropped from a 360°panorama image (and eventually undistorted); "front-view" means that only one (forward facing)
                     view is available; "phone" means that photos were collected with a smartphone. "panorama" and "front-view"
                      images were taken with cameras on the roof of a car.
                      <br/>∗ForMSLS a limited amount of sideways images is
                       available.
                    </caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            {
                               datasets_table.data[0].fields.map( name => <th className='mx-5'  key={name}>{name}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {datasets_table.data.map( (el, pos) =>
                            <tr key={pos}>
                                <td style={{width:'2rem'}}>{pos}</td>
                                {
                                    el.data.map( name => <td style={{}}>{name}</td>)
                                }
                                
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <div className="mx-xxl-10 mx-sm-5" >
                <Card className="mt-4">
                    <Card.Header>Pittsburgh</Card.Header>
                   
                    <Card.Body>
                        <Card.Title>Pitts30k</Card.Title>
                        <Card.Text>
                            <div className='d-flex'>
                                <div>
                            Developed by Arandjelovic et al., presented together with the
                            widely used NetVLAD layer. It is available in an extended (Pitts250k) and 
                            reduced (Pitts30k) version. <br/>
                            It is split in train, val and test set; its images are collected from Google Street
                            View imagery from the city of Pittsburgh. Gallery and query are collected two 
                            years apart, and there are no noticeable weather variations.
                            <br/>
                            In our benchmark we used Pitts30k, together 
                            with Mapillary SLS, to train all models. The other datasets were used
                            to test the generalization capabilities after training on one of the aforementioned.
                            <br/><br/>
                            It is available from the author's website on request, on a non-commercial basis. Copyright and all rights therein are maintained by 
                            the authors It is understood that all persons copying this information will adhere to the terms and constraints invoked 
                            by each author's copyright.
                            It is also conveniently downloadable using our specific software.
                            Links to our software are on the <i>'Our Software'</i> section, and instructions for using it
                            in the repository README.
                            </div>
                            <div className="text-center ml-5">
                        <Image src={pitts_map} className="esc-logo slide-top center-block"  
                                alt='pipeline representation'
                                style={{
                            flex: 1,
                            width: '750px',
                            height: '450px',
                            resizeMode: 'contain' }}
                                /></div>
                                </div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mt-4">
                    <Card.Header>Mapillary</Card.Header>
                    <Card.Body>
                        <Card.Title>Mapillary Street-level Sequences</Card.Title>
                        <Card.Text>
                        <div className='d-flex'>
                                <div>
                            Mapillary Street-level Sequences (MSLS) is a large-scale long-term place recognition
                            dataset that contains 1.6M street-level images developed by the homonymous company.
                            <br/>
                            It is a huge project that contains images spanning over a decade from 30 cities all over
                            the world, as well as different domains (night/day, winter/summer, Sunny/Rainy..),
                            cameras and seasons.
                            <br/>
                            As for Pitts30k, it is split in train, val and test set, although the
                            test set's ground truths are not currently released. 
                            We therefore report the validation recalls, following previous works.
                            Together with Pitts30k it is one of the 2 datasets that we use for training.
                            <br/><br/>
                            The Mapillary Street-level Sequences Dataset is provided under the 
                            <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'> Creative Commons Attribution NonCommercial Share Alike (CC BY-NC-SA) license. </a>
                            It is available from the author's website on request, 
                            but also, and more conveniently, downloadable using our specific software.
                            Links to our software are on the <i>'Our Software'</i> section, and instructions for using it
                            in the repository README.   
                            </div>
                            <div className="text-center ml-5">
                        <Image src={msls_map} className="esc-logo slide-top center-block"  
                                alt='pipeline representation'
                                style={{
                            flex: 1,
                            width: '750px',
                            height: '450px',
                            resizeMode: 'contain' }}
                                /></div>
                                </div>                     
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mt-4">
                    <Card.Header>Tokyo</Card.Header>
                    <Card.Body>
                        <Card.Title>Tokyo 24/7</Card.Title>
                        <Card.Text>
                        <div className='d-flex'>
                                <div>
                            Collected again by Arandjelovic et al., the dataset contains images from the city of
                            Tokyo and presents a relatively large gallery (from Google Street View) against a smaller number of 
                            queries, which are split into three equally sized sets: day, sunset and night.
                            The latter are manually collected with phones. <br/>
                            In some cases Tokyo Time Machine (Tokyo TM) is used as a training set for Tokyo 24/7.
                            <br/> We use it to test the transferability of the learnt feature descriptor extractors of 
                            models trained on either Pitts30k or MSLS.
                            <br/><br/>
                            It is available from the author's website on request, on a non-commercial basis. Copyright and all rights therein are maintained by 
                            the authors It is understood that all persons copying this information will adhere to the terms and constraints invoked 
                            by each author's copyright.
                            It is also conveniently downloadable using our specific software.
                            Links to our software are on the <i>'Our Software'</i> section, and instructions for using it
                            in the repository README.
                            </div>
                            <div className="text-center ml-5">
                        <Image src={tokyo_map} className="esc-logo slide-top center-block"  
                                alt='pipeline representation'
                                style={{
                            flex: 1,
                            width: '750px',
                            height: '450px',
                            resizeMode: 'contain' }}
                                /></div>
                                </div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mt-4">
                    <Card.Header>San Francisco</Card.Header>
                    <Card.Body>
                        <Card.Title>SF-0</Card.Title>
                        <Card.Text>
                        <div className='d-flex'>
                                <div>

                            Similarly to Tokyo 24/7, the San Francisco dataset is composed of a large gallery collected by a 
                            car-mounted camera and orders of magnitude less queries taken by phone.
                            Of the multiple Structure from Motion reconstructions available, we use the one from 
                            <a href='https://hal.inria.fr/hal-01513083/file/Sattler17.pdf'>Torii-2021</a> as it offers
                            the most accurate query 6DoF coordinates.
                            <br/> We use it to test the generalization of the 
                            models trained on either Pitts30k or MSLS.
                            <br/><br/>
                            It is distributed by the authors via the Stanford Digital Repository;  User agrees that content will not be used
                            to identify or to otherwise infringe the privacy or confidentiality rights of individuals. 
                            It is also conveniently downloadable using our specific software.
                            Links to our software are on the <i>'Our Software'</i> section, and instructions for using it
                            in the repository README.
                            </div>
                            <div className="text-center ml-5">
                        <Image src={sf_map} className="esc-logo slide-top center-block"  
                                alt='pipeline representation'
                                style={{
                            flex: 1,
                            width: '750px',
                            height: '450px',
                            resizeMode: 'contain' }}
                                /></div>
                                </div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mt-4">
                    <Card.Header>Eynsham</Card.Header>
                    <Card.Body>
                        <Card.Title>Eynsham</Card.Title>
                        <Card.Text>
                        <div className='d-flex'>
                                <div>

                            This dataset was created back in 2009 and consists of grayscale images from cameras 
                            mounted on a car going around around a loop twice, in the city and countryside of Oxford. 
                            <br/>
                            We use the first loop as gallery, and second as queries.
                            <br/> We test on it models trained on either Pitts30k or MSLS to evaluate the transferability
                             of the learnt feature descriptor extractors.
                            <br/><br/>
                            It is available from the author's website on request, under the 
                            <a href='https://creativecommons.org/licenses/by/4.0/legalcode'>  Creative Commons Attribution 4.0 International </a> license.
                            It is also conveniently downloadable using our specific software.
                            Links to our software are on the <i>'Our Software'</i> section, and instructions for using it
                            in the repository README.
                            </div>
                            <div className="text-center ml-5">
                        <Image src={eyn_map} className="esc-logo slide-top center-block"  
                                alt='pipeline representation'
                                style={{
                            flex: 1,
                            width: '750px',
                            height: '450px',
                            resizeMode: 'contain' }}
                                /></div>
                                </div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mt-4">
                    <Card.Header>St Lucia</Card.Header>
                    <Card.Body>
                        <Card.Title>St Lucia</Card.Title>
                        <Card.Text>
                        <div className='d-flex'>
                                <div>

                            The St Lucia dataset is collected by driving a car with a forward facing camera around the riverside
                            suburb of St Lucia, Brisbane. Of the nine drives, we use the first and the last one
                            as gallery and queries. Given the high density of the images (extracted from videos),
                            we select only one frame every 5 meters. Note that all these pre-processing steps 
                            (as well as downloading) are performed automatically with our open source codebase, that you
                            can find linked on this website.
                            <br/> We use this dataset to test the transferability of the learnt feature descriptor extractors of 
                            models trained on either Pitts30k or MSLS.
                            <br/><br/>
                            It is available from the author's website on request, under the 
                            <a href='http://creativecommons.org/licenses/by-nc/3.0/au/'>  Creative Commons Attribution-NonCommercial 3.0 </a> license.
                            It is also conveniently downloadable using our specific software.
                            Links to our software are on the <i>'Our Software'</i> section, and instructions for using it
                            in the repository README.
                            </div>
                            <div className="text-center ml-5">
                        <Image src={lucia_map} className="esc-logo slide-top center-block"  
                                alt='pipeline representation'
                                style={{
                            flex: 1,
                            width: '750px',
                            height: '450px',
                            resizeMode: 'contain' }}
                                /></div>
                                </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export { Datasets };