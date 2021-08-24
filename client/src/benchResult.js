import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { useState } from 'react';
import { Button, Container, Row, Col, Card, Table, Dropdown, Form } from 'react-bootstrap';


function BenchResults(props){
    const [dataset, setDataset] = useState('pitts');
    const [table, setTable] = useState('Aggregation');
    //const data = new AllTables('./tables');
    const data = props.data;
    const tables = data.table_list;

    const changeTable = (val) => {
        if (val !== table ){
            setTable(val);
        }
    }

    return (
        <div className='row'>
            <div className='d-flex mx-auto' style={{marginBottom:'2rem'}}>
                <h2 style={{marginLeft:'0rem', marginRight:'5rem'}}>
                    Results after training on { dataset === 'pitts' ? 'Pitts30k' : 'Mapillary SLS'}
                </h2>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Switch training dataset
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>setDataset('pitts')} className={ dataset === 'pitts' ? 'active' : ''}>Pitts30k</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setDataset('msls')} className={ dataset === 'msls' ? 'active' : ''}>Mapillary SLS</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className='row d-flex w-100'>
                <Form.Group className='mx-auto' style={{paddingLeft:'0rem'}}>
                    {tables.map( tab => 
                        <Form.Check
                            key={tab} 
                            inline
                            value={tab}
                            onChange={()=>{}}
                            onClick={ev => changeTable(ev.target.value)}
                            checked={table == tab ? 'active' : '' }
                            type='radio'
                            label={tab}/>
                    )}
                </Form.Group>
            </div>

            <Table striped bordered hover className='mx-auto' style={{width:'20rem', marginLeft:'0rem'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        {
                            data.all[table].results[0].params_fields.map( name => <th key={name}>{name}</th>)
                        }
                        { dataset === 'pitts' ?
                            data.all[table].results[0].pitts_trained_fields.map( name => <th key={name} style={{width:'2rem'}}>{name}</th>)
                        :
                            data.all[table].results[0].msls_trained_fields.map( name => <th key={name}>{name}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {data.all[table].results.map( (el, pos) =>
                        <tr key={pos}>
                            <td style={{width:'2rem'}}>{pos}</td>
                            {
                                el.params.map( name => <td style={{width:'2rem'}}>{name}</td>)
                            }
                            {
                                dataset === 'pitts' ?
                                    el.pitts_trained.map( name => <td tyle={{width:'2rem'}}>{name}</td>)
                                :
                                    el.msls_trained.map( name => <td style={{width:'2rem'}}>{name}</td>)
                            }
                            
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export { BenchResults };