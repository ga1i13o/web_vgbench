import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { useState } from 'react';
import { Button, Container, Row, Col, Card, Table, Dropdown } from 'react-bootstrap';
import data from './tab.json';
import {ResultsList} from './result';

function BenchResults(props){
    let info = new ResultsList(data);
    const [dataset, setDataset] = useState('pitts');
    console.log(info);

    return (
        <>
            <div className='d-flex' style={{marginBottom:'2rem'}}>
            <h2 style={{marginLeft:'20rem', marginRight:'5rem'}}>
                Results after training on { dataset === 'pitts' ? 'Pitts30k' : 'Mapillary SLS'}
            </h2>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Switch training dataset
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"  className={ dataset === 'pitts' ? 'active' : ''}>Pitts30k</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className={ dataset === 'msls' ? 'active' : ''}>Mapillary SLS</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <Table striped bordered hover style={{width:'20rem', marginLeft:'20rem'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        {
                            info.results[0].params_fields.map( name => <th>{name}</th>)
                        }
                        {
                            dataset === 'pitts' ?
                            info.results[0].pitts_trained_fields.map( name => <th style={{width:'2rem'}}>{name}</th>)
                        :
                            info.results[0].msls_trained_fields.map( name => <th>{name}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {info.results.map( (el, pos) =>
                        <tr>
                            <td style={{width:'2rem'}}>{pos}</td>
                            {
                                el.params.map( name => <td style={{width:'2rem'}}>{name}</td>)
                            }
                            {
                                dataset === 'pitts' ?
                                el.pitts_trained.map( name => <td style={{width:'2rem'}}>{name}</td>)
                            :
                                el.msls_trained.map( name => <td style={{width:'2rem'}}>{name}</td>)
                            }
                            
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}

export { BenchResults };