import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import {  Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ContactsModal(props) {

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            size='lg'
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title className='center-modal'>Contacts</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className='mb-3 center-modal'>
                    This benchmark is provided by the VANDAL research group @ Polytechnic of Turin. 
                    If you have any questions or concerns regarding the benchmark, feel free to contact us at e-mail addresses listed below. 
                    <br/>If you experience any issues when using our software, please open an issue on the github page, or again use e-mail.
                </div>
                <div className='center-modal'>
                    <h4>Researchers</h4>
                    <ul>
                        <li><b className='d-inline-block' style={{width:'10rem'}}>Carlo Masone</b>: 
                            <Link className='ml-1' to='#' onClick={ev=> {
                                window.location = 'mailto:car.masone@gmail.com ';
                                ev.preventDefault();
                            }}>  
                                car.masone@gmail.com 
                            </Link>
                        </li>
                        <li><b className='d-inline-block' style={{width:'10rem'}}>Gabriele M. Berton</b>:
                            <Link className='ml-1' to='#' onClick={ev=> {
                                window.location = 'mailto:bertongabri@gmail.com';
                                ev.preventDefault();
                            }}> 
                                bertongabri@gmail.com
                            </Link>
                        </li>
                    </ul>

                    <h4>Collaborators</h4>
                    <ul>
                        <li><b className='d-inline-block' style={{width:'10rem'}}>Riccardo Mereu</b>: 
                            <Link className='ml-1' to='#' onClick={ev=> {
                                window.location = 'mailto:s277004@studenti.polito.it';
                                ev.preventDefault();
                            }}> 
                                s277004@studenti.polito.it
                            </Link>
                        </li>
                        <li><b className='d-inline-block' style={{width:'10rem'}}>Gabriele Trivigno</b>: 
                            <Link className='ml-1' to='#' onClick={ev=> {
                                window.location = 'mailto:gabriele.trivigno@studenti.polito.it';
                                ev.preventDefault();
                            }}> 
                                gabriele.trivigno@studenti.polito.it
                            </Link>
                        </li>
                    </ul>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}


export { ContactsModal };