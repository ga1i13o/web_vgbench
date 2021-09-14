import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { useState, useEffect } from 'react';
import { Table, Dropdown, Form, Alert } from 'react-bootstrap';


function BenchResults(props){
    const [dataset, setDataset] = useState('pitts');
    const [table, setTable] = useState('Aggregation');
    const [sorted, setSorted] = useState('');
    const [sortOrder, setSortOrder] = useState('ascending');
    //const data = new AllTables('./tables');
    const data = props.data;
    const tables = data.table_list;

    useEffect( () =>{
        //applySorting(table, sortOrder);
    }, [table]);

    const getOppositeOrder = (order) => {
        if (order === 'ascending')
            return 'descending';
        else if (order === 'descending')
            return 'ascending';
    }

    const changeTable = (val) => {
        if (val !== table ){
            setTable(val);
            applySorting(val, sortOrder);
        }
    }
    
    const comparator = (el1, el2, order) => {
        const sign = order === 'ascending' ? 1 : -1;
        if (el1 === '-'){
            console.log('diocan');
            return 1*sign;
        }
        if (el2 === '-')
            return -1;

        if (el1 > el2 )  
            return 1*sign;
        else if (el2 > el1) 
            return -1*sign;
        return 0;
    }
    
    const changeSortOrder = () => {
        applySorting(table, getOppositeOrder(sortOrder));
        setSortOrder(getOppositeOrder(sortOrder));
    }

    const applySorting = (tab, order) => {
        let key = -1; 
        let type = -1;
        if (data.all[tab].results[0].params_fields.includes(sorted)){
            key = data.all[tab].results[0].params_fields.indexOf(sorted);
            type = 'params';
        }
        else{
            type = dataset;
            if (dataset === 'pitts'){
                key = data.all[tab].results[0].pitts_trained_fields.indexOf(sorted);
            }
            else if (dataset === 'msls'){
                key = data.all[tab].results[0].msls_trained_fields.indexOf(sorted);
            }
        }

        changeSorting(key, sorted, type, order, tab);
    }

    const changeSorting = (key, name, type, order=sortOrder, tab=table) => {
        let sortingObj = -1;
        if (name !== ''){
            if (type === 'params')
                sortingObj = 'params';
            else if (type === 'pitts')
                sortingObj = 'pitts_trained';
            else if (type === 'msls')
                sortingObj = 'msls_trained';

            if (data.all[tab].results[0][sortingObj+'_fields'][key] !== 'FLOPs'){
                console.log(data.all[tab].results[0][sortingObj[key]]);
                console.log(sortingObj, key);
                console.log(data.all[tab].results[0]);
                data.all[tab].results.sort((a,b) => {
                    const el1 = isNaN(parseFloat(a[sortingObj][key])) ? a[sortingObj][key] : parseFloat(a[sortingObj][key]);
                    const el2 = isNaN(parseFloat(b[sortingObj][key])) ? b[sortingObj][key] : parseFloat(b[sortingObj][key]);
                    //(a[sortingObj][key] > b[sortingObj][key] ) ? 1 : ((b[sortingObj][key] > a[sortingObj][key]) ? -1 : 0)
                    return comparator(el1, el2, order);
                });
                console.log(data.all[tab].results[0][sortingObj[key]]);


            }
            else{
                data.all[tab].results.sort((a,b) => {
                    const vals1 = a[sortingObj][key].split(' ');
                    const vals2 = b[sortingObj][key].split(' ');

                    const sign = order === 'ascending' ? 1 : -1;
                    if (vals1[1] === 'GF' && vals2[1] === 'MF')
                        return 1*sign;
                    else if ((vals2[1] === 'GF' && vals1[1] === 'MF'))
                        return -1*sign;

                    const el1 = parseFloat(vals1[0]);
                    const el2 = parseFloat(vals2[0]);
                    return comparator(el1, el2, order);
                });
            }
            setSorted(name);
        }
    }

    const renderSortOrderButton = () => {
        return (
            <div className='mt-3 mr-auto ml-1' onClick={changeSortOrder}>
                { sortOrder === 'ascending' ?
                        <> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/></svg>
                            Ascending
                        </>
                    :
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
                            Descending
                        </>
                }
            </div>
        )
    }

    return (
        <div className='row'>
            <div className='d-flex mx-auto' style={{marginBottom:'2rem'}}>
                <h2 style={{marginLeft:'0rem', marginRight:'5rem'}}>
                    Results after training on { dataset === 'pitts' ? 'Pitts30k' : 'Mapillary SLS'}
                </h2>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
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
                            checked={table === tab ? 'active' : '' }
                            type='radio'
                            label={tab}/>
                    )}
                </Form.Group>
            </div>
            <div className='row d-flex w-100 mx-auto'>

            <Table striped bordered hover className='ml-auto' style={{width:'60rem', textAlign:'center'}}>
                <thead>
                    <tr>
                        <th className='align-middle'>#</th>
                        {
                            data.all[table].results[0].params_fields.map( name => <th className='align-middle' key={name}>{name}</th>)
                        }
                        { dataset === 'pitts' ?
                            data.all[table].results[0].pitts_trained_fields.map( name => <th className='align-middle' key={name}>{name}</th>)
                        :
                            data.all[table].results[0].msls_trained_fields.map( name => <th className='align-middle' key={name}>{name}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {data.all[table].results.map( (el, pos) =>
                        <tr key={pos}>
                            <td className='align-middle' style={{width:'2rem'}} key={pos+1}>{pos}</td>
                            {
                                el.params.map( (name, posC) => <td key={pos+posC} className='align-middle'>{name}</td>)
                            }
                            {
                                dataset === 'pitts' ?
                                    el.pitts_trained.map( (name, posC) => <td key={pos+posC} className='align-middle'>{name}</td>)
                                :
                                    el.msls_trained.map( (name, posC) => <td key={pos+posC} className='align-middle'>{name}</td>)
                            }
                            
                        </tr>
                    )}
                </tbody>
            </Table>
            <Dropdown className='mt-3 ml-3 ml-3'>
                <Dropdown.Toggle variant="primary">
                    Sort by
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        data.all[table].results[0].params_fields.map( (name, pos) => 
                            <Dropdown.Item 
                                key={pos}
                                className={ sorted === name ? 'active' : ''}
                                value={pos}
                                onClick={(ev) => changeSorting(ev.target.attributes[0].value, name, 'params')}>{name}</Dropdown.Item>
                        )
                    }
                    { dataset === 'pitts' ?
                        data.all[table].results[0].pitts_trained_fields.map( (name, pos) => 
                                <Dropdown.Item 
                                    key={pos}
                                    className={ sorted === name ? 'active' : ''}
                                    value={pos}
                                    onClick={(ev) => changeSorting(ev.target.attributes[0].value, name, 'pitts')}>{name}</Dropdown.Item>
                            )
                    :
                        data.all[table].results[0].msls_trained_fields.map( (name, pos) => 
                                <Dropdown.Item 
                                    key={pos}
                                    className={ sorted === name ? 'active' : ''}
                                    value={pos}
                                    onClick={(ev) => changeSorting(ev.target.attributes[0].value, name, 'msls')}>{name}</Dropdown.Item>
                            )
                    }
                </Dropdown.Menu>
            </Dropdown>
            { renderSortOrderButton() }
            <Alert variant='secondary' className='mx-auto mt-5'>
                The code for the NetVLAD layer was used from the official repository, released under MIT license.<br/>
                Also the pretrained backbones with GeM + FC aggregator by Radenovic et al. were downloaded under
                MIT license.
            </Alert>
            </div>
            
        </div>
    )
}

export { BenchResults };