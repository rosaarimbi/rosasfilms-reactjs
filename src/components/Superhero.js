import { Card, Container, Row, Col, Image } from "react-bootstrap"
import avengersImage from "../assets/images/superhero/avengers.jpg"
import shangchiImage from "../assets/images/superhero/shangchi.jpg"
import sriasihImage from "../assets/images/superhero/sriasih.jpg"


const SuperHero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={avengersImage} alt="Avengers Movies" className="images"/>
                            <div className="bg-dark"> 
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">AVENGERS</Card.Title>
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
                            <Image src={sriasihImage} alt="Sriasih Movies" className="images"/>
                            <div className="bg-dark"> 
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SRI ASIH</Card.Title>
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
                            <Image src={shangchiImage} alt="Shangchi Movies" className="images"/>
                            <div className="bg-dark"> 
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SHANG CHI</Card.Title>
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


export default SuperHero