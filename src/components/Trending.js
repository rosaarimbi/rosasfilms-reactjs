import { Card, Container, Row, Col, Image } from "react-bootstrap"
import thorImage from "../assets/images/trending/thor.jpg"
import pspImage from "../assets/images/trending/psp.jpg"
import glassonionImage from "../assets/images/trending/glassonion.jpg"


const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={thorImage} alt="Thor Movies" className="images"/>
                            <div className="bg-dark"> 
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THOR</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={glassonionImage} alt="GlassOnion Movies" className="images"/>
                            <div className="bg-dark"> 
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">GLASS ONION</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={pspImage} alt="Psp Movies" className="images"/>
                            <div className="bg-dark"> 
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">PSP</Card.Title>
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


export default Trending