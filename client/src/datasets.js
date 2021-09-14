import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { useState } from 'react';

import { Table, Card , Image, Button } from 'react-bootstrap';
import data_table from './tables/datasets/dataset_table.json';
import { DatasetTable } from './table_data';
import { datasetTexts } from './textWalls';
import { availableDatasets } from './modelDatasets';
import { QueryPosModal } from './queryPosModal';


function Datasets(props){
    const [showQueryPos, setShowQueryPos] = useState(false);
    const [datasetToShow, setDatasetToShow] = useState({name:'', queryImg: '', posImg: ''});
    const handleClose = () => setShowQueryPos(false);
    const handleShow = () => setShowQueryPos(true);
    const datasets_table = new DatasetTable(data_table);
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
                    <caption>
                        {datasetTexts.tableCaption()}
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
                                <Card.Text>
                                    <div className='d-flex'>
                                        <div>
                                            {dataset.textWall()}
                                            <div className='mt-3'>
                                            <Button variant='primary' onClick={()=>{
                                                setDatasetToShow({name: dataset.subtitle, 
                                                                  queryImg: dataset.imgExamples.query, 
                                                                  posImg: dataset.imgExamples.pos});
                                                setShowQueryPos(true);
                                            }}>
                                                See query/positive example
                                            </Button>
                                        </div>
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
            <QueryPosModal dataset={datasetToShow} 
                           show={showQueryPos}
                           handleShow={handleShow} 
                           handleClose={handleClose}/>
        </>
    )
}

export { Datasets };