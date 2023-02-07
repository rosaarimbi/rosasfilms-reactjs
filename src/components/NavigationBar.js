import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div> 
        <Navbar variant="dark">
            <Container>
                <Nav className="navHeadTitle text-white" href="/">ROSASFILMS</Nav>
                <Nav className="navTitle">
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#action">ACTION</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar