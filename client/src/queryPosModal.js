import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import {  Button, Modal, Figure } from 'react-bootstrap';


function QueryPosModal(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            // dialogClassName="modal-80w"
            keyboard={false}
            size='xl'
        >
            <Modal.Header closeButton>
                <Modal.Title className='center-modal'>{props.dataset.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className='mb-3 center-modal'>
                    Examples of 2 images taken from the {props.dataset.name}; a query and one of its positive matching.
                </div>
                
                <div className="text-center mt-4 mx-auto d-flex">
                    <Figure className='ml-auto mr-3'>
                        <Figure.Image
                            width={400}
                            height={350}
                            alt="Query image"
                            src={props.dataset.queryImg}
                        />
                        <Figure.Caption>
                            Query example from {props.dataset.name} dataset
                        </Figure.Caption>
                    </Figure>
                    <Figure className='ml-3 mr-auto'>
                        <Figure.Image
                            width={400}
                            height={350}
                            alt="Positive image"
                            src={props.dataset.posImg}
                        />
                        <Figure.Caption>
                            Matching example from {props.dataset.name} dataset
                        </Figure.Caption>
                    </Figure>                    
                        
                
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}


export { QueryPosModal };