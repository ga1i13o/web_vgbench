import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { Button, Nav, Tabs, Tab, Container, Row, Col, Card, Table, Dropdown, Form } from 'react-bootstrap';

function Software(props){
    return (
        <div className='row'>
        <div className="d-block mt-2 justify-content-between" 
                style={{ marginLeft: '10rem', marginRight: '10rem' }}>
        
            <h3>Our Software</h3>
            <div className="mt-4">
                Together with the analysis in our paper, we release
                our software in the form of an open source framework with the goal of 
                enabling researchers and industry professionals to:
                <ul>
                <li> easily reproduce 
                results
                </li>
                <li> plug in their modules </li>
                <li> quickly obtain an understanding of the options at hand 
                and which solution works best for their use-case.                  
                </li>
                </ul>
                We release 3 different repositories, the main one with the implementation of all the different steps
                of a VPR pipeline; a second one to properly download and format the datasets; and a third one to experiment with 
                pretrained networks on other datasets such as Google Landmark and Places365.
            </div>
     
  <Tabs defaultActiveKey="bench" className="mb-3 mt-4">
  <Tab eventKey="bench" title="Benchmark">
      <Card>
  <Card.Body>
    <Card.Title>Benchmarking</Card.Title>
    <Card.Text>
        Repository implementing all the options for the possible steps of a VPR pipeline
    </Card.Text>
    <Button href='https://github.com/s252805/benchmarking_vg' variant="primary">Repository</Button>
  </Card.Body>
  </Card>
  </Tab>
  <Tab eventKey="data" title="Datasets" >
    <Card>
  <Card.Body>
    <Card.Title>Datasets</Card.Title>
    <Card.Text>
        This piece of software provides a utility to easily download the datasets analyzed and format them
        the way that the benchmarking software expects
    </Card.Text>
    <Button href='https://github.com/s252805/datasets_vg' variant="primary">Repository</Button>
  </Card.Body>
  </Card>
  </Tab>
  <Tab eventKey="pt" title="Pretrain" >
      <Card>
  <Card.Body>
    <Card.Title>Pretraining</Card.Title>
    <Card.Text>
        This repository allows to experiment by pre-training the various architectures on 
        landmark recognition datasets such as Google Landmark and Places365
    </Card.Text>
    <Button href='https://github.com/rm-wu/pretrain_vg' variant="primary">Repository</Button>
  </Card.Body>
  </Card>
  </Tab>
</Tabs>
    

</div>

        </div>
    )
}

export { Software };