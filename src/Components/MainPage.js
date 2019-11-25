import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';
import './MainPage.css';
import CountrySelect from './Top/CountrySelect'
class MainPage extends Component {

    render()
    {
        return (
        <Container className='MainPage' fluid={true}>

            <Row>
                <CountrySelect />
                <Col xs="6"></Col>
                <Col xs="6"></Col>
            </Row>
        </Container>
        );
    }
    

}
export default MainPage;
