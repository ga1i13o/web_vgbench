import 'bootstrap/dist/css/bootstrap.min.css';
import { Image} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./footerStyles";
import git_logo from './imgs/git_logo.svg';
import { links } from './links';


function Footer(props) {
    return (
      <Box>
        <h1 style={{ color: "#007bff", 
                     textAlign: "center", 
                     marginTop: "-50px" }}>
          The VG benchmark
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="/home">Aim</FooterLink>
              <FooterLink href={links.vandal}>Our group</FooterLink>
            </Column>
            <Column>
              <Heading>Software</Heading>
              <FooterLink href={links.bench_repo}>
              <Image src={git_logo} width='32' height='32' className='ml-n4 mr-2'/> 
                  Benchmarking
              </FooterLink>
              <FooterLink href={links.data_repo}>
              <Image src={git_logo} width='32' height='32' className='ml-n4 mr-2'/> 
                  Datasets
              </FooterLink>
              <FooterLink href={links.pretrain_repo}>
              <Image src={git_logo} width='32' height='32' className='ml-n4 mr-2'/> 
                  Pretraining
              </FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink onClick={props.handleShowContacts}>via Email</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Coming soon
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    );
  };

export { Footer};