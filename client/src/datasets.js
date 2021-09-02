import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { Table, Card , Image} from 'react-bootstrap';
import data_table from './tables/datasets/dataset_table.json';
import { DatasetTable } from './table_data';
import { datasetTexts } from './textWalls';
import { availableDatasets } from './modelDatasets';


function Datasets(props){
    const datasets_table = new DatasetTable(data_table);
    console.log(availableDatasets);
    return (
        <>
            <div className="d-block mx-xxl-10 mx-sm-5">
                <h3>Geo-Localization datasets</h3>
                <div className="mt-4">
                    {datasetTexts.intro()}
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
                                    el.data.map( (name, posC) => <td key={pos+posC}>{name}</td>)
                                }
                                
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <div className="mx-xxl-10 mx-sm-5" >
                {
                    availableDatasets.map( dataset =>
                        <Card className="mt-4">
                            <Card.Header>{dataset.title}</Card.Header>
                        
                            <Card.Body>
                                <Card.Title>{dataset.subtitle}</Card.Title>
                                <Card.Text>
                                    <div className='d-flex'>
                                        <div>
                                            {dataset.textWall()}
                                        </div>

                                        <div className="text-center ml-5">
                                            <Image src={dataset.img} className="esc-logo slide-top center-block"  
                                                    alt='pipeline representation'
                                                    style={{
                                                flex: 1,
                                                width: '750px',
                                                height: '450px',
                                                resizeMode: 'contain' }}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className='mt-4'>
                                        Credits: 
                                        <ul>
                                            {dataset.refs.map(ref =>
                                                <li>
                                                    {ref}
                                                </li>)}
                                        </ul>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </>
    )
}

export { Datasets };