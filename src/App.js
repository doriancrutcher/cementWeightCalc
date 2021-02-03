import 'regenerator-runtime/runtime'
import React, { useEffect, useState, useRef } from 'react'
import { login, logout } from './utils'
import './global.css'
import './scss/App.scss'
import { Container, Row, Col, Card,Button , Nav,Navbar, NavDropdown} from 'react-bootstrap'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')



const App = props => {

    const [cementdensity, changeDensity] = useState(2.6/500); //  lbs/ml
    const [waterPerLbs,changeWaterPerLbs]=useState(946.353/80);//  ml/lbs
    const [waterVol, changeWaterVol] = useState(0);
    const [cementVol, changeCementVol] = useState(0);

    const desiredWeightRef=useRef()

    const calculateStuff=(desiredWeight)=>{
        changeWaterVol(
            desiredWeight*waterPerLbs  //lbs*ml/lbs
        )
        changeCementVol(
            desiredWeight/cementdensity //lbs*ml/lbs
        )
    }

    return (<React.Fragment>
        <Navbar style={{marginBottom:'10px'}} bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
     
         Dumbbell Ingredient Calculator
        </Navbar.Brand>
      </Navbar>
        <Container style={{paddingBottom:'20px'}}>

            <Row style={{marginBottom:'20px'}}className="d-flex justify-content-center">
                <input ref={desiredWeightRef} style={{height:'30vw', width:'30vw',borderRadius:'10px',backgroundColor:'black',color:'white', marginRight:'10px',textAlign:'center'}} placeholder="--lbs"></input>
                <Button onClick={()=>{calculateStuff(desiredWeightRef.current.value)}}>Enter</Button>
            </Row>
            <Row >
                <Col className="d-flex justify-content-center"><Card style={{ width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Amount of Water</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">ml</Card.Subtitle>
                        <Card.Text>
                            {waterVol}
                        </Card.Text>
                        
                    </Card.Body>
                </Card></Col>
                <Col className="d-flex justify-content-center"><Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Amount of Cement</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">ml</Card.Subtitle>
                        <Card.Text>
                            {cementVol}
                        </Card.Text>
                
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container>
        </React.Fragment>
    );
};

App.propTypes = {

};

export default App;