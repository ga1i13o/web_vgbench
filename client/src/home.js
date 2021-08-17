import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import pipeline from './imgs/pipeline.png';
import { Button, Container, Row, Col } from 'react-bootstrap';


function Home(props){
    return (
        <>
        <div className="text-center">
        <img src={pipeline} className="esc-logo slide-top center-block"  
        alt='pipeline representation'
        style={{
    flex: 1,
    width: '750px',
    height: '350px',
    resizeMode: 'contain' }}
        />
        </div>

        <div className="d-block mt-5 justify-content-between" 
        style={{ marginLeft: '10rem', marginRight: '20rem' }}>
        
            <h2>The Visual Place Recognition benchmark</h2>
            <div className="mt-4">
            Visual place recognition is, broadly speaking, the task of
recognizing the place depicted in an image (or a sequence
of images). This task is commonly addressed as an image
retrieval problem. In this formulation, the prior knowledge
of the places of interest for the task is represented as a
collection of images (database). Each image in the database
is tagged with an identifier of its location, e.g., the name
of a landmark or a GPS coordinate. When a new picture
needs to be localized (query), the place recognition system
searches through the database for images that are similar to it.
If similar pictures are found, their tagged locations are used
to infer the location of the query. This retrieval process is
typically implemented as a three-stages pipeline :
<ul>
    <li> An encoding procedure extracts from each image a vec-
tor representation of its content (image representation)
    </li>
    <li> A similarity search performs a pairwise comparison be-
tween the representations of the query and of every image in the database according to a scoring function (e.g.,
Euclidean distance or cosine similarity), and returns the
best matches
    </li>
    <li>A post-processing stage refines the results produced by
the similarity search
    </li>
</ul>

The need for a standardized and systematic way to benchmark visual geo-localization methods is largely acknowledged and few benchmarks 
have already been proposed; therefore in order to:
<ul>
<li>
pinpoint the impact of each individual component, and
</li>
<li>
fairly compare the core contribution of different methods
</li>
</ul> 

 we propose a new benchmark for visual geo-localization that is organized as a modular open
  source software that allows the user to get a clear picture of the tools available,
  their potential and how they interact.
The benchmark also tries to connect these evaluations to real world impacts, addressing practical aspects of these methods and allowing to understand how they may provide a trade-off between accuracy, 
memory and computational requirements, training and test time.
We think that this benchmark can become a tool to assist both researchers, 
in developing and evaluating new solutions, and industry practitioners, 
who can use the software to tune at best their architectures for their specific use-case.
            </div>
            </div></>
    )
}

export { Home };