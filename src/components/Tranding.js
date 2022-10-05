import { Card, CardImg, Col, Container, Row } from "react-bootstrap"
import trending1 from "../assets/tranding/trending1.jpg"
import trending2 from "../assets/tranding/trending2.jpg"
import trending3 from "../assets/tranding/trending3.jpg"

const Tranding = () => {
    return (
        <Container>
            <div>
                <br />
                <h1>Tranding Movie</h1>
                <br />
            </div>
            <Row>
                <Col md={4} className="movieWrapper" id='tranding'>
                    <Card className="cardImage">
                        <Card.Img src={trending1} alt="Card image" className='card-images' />
                        <div className="p-2 m-1 bg-dark text-white">
                            <Card.Title className='text-center'>Card title</Card.Title>
                            <Card.Text>
                                Ini Deskripsi Filmnya
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="cardImage">
                        <Card.Img src={trending2} alt="Card image" className='card-images' />
                        <div className="p-2 m-1 bg-dark text-white">
                            <Card.Title className='text-center'>Card title</Card.Title>
                            <Card.Text>
                                Ini Deskripsi Filmnya
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="cardImage">
                        <Card.Img src={trending3} alt="Card image" className='card-images' />
                        <div className="p-2 m-1 bg-dark text-white">
                            <Card.Title className='text-center'>Card title</Card.Title>
                            <Card.Text>
                                Ini Deskripsi Filmnya
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Tranding