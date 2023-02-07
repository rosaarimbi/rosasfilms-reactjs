import { Card, Container, Row, Col, Image } from "react-bootstrap"
import inceptionImage from "../assets/images/action/inception.jpg"
import afterearthImage from "../assets/images/action/afterearth.jpg"
import godzillaImage from "../assets/images/action/godzilla.jpg"


const Action = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">ACTION MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} id="action">
                        <Card className="movieImage">
                            <Image src={inceptionImage} alt="Inception Movies" className="images"/>
                            <div className="bg-dark"> 
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">INCEPTION</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} >
                        <Card className="movieImage">
                            <Image src={godzillaImage} alt="Godzilla Movies" className="images"/>
                            <div className="bg-dark"> 
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">GODZILLA</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} >
                        <Card className="movieImage">
                            <Image src={afterearthImage} alt="Afterearth Movies" className="images"/>
                            <div className="bg-dark"> 
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">AFTER EARTH</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
   )
}


export default Action