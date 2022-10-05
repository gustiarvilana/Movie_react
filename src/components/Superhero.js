import { Card, CardImg, Col, Container, Row } from "react-bootstrap"
import hero1 from "../assets/superhero/hero1.jpg"
import hero2 from "../assets/superhero/hero2.jpg"
import hero3 from "../assets/superhero/hero3.jpg"
import hero4 from "../assets/superhero/hero4.jpg"
import hero5 from "../assets/superhero/hero5.jpg"
import hero6 from "../assets/superhero/hero6.jpg"

const Superhero = () => {
    return (
        <Container>
            <div>
                <br />
                <h1 className="text-light">superhero Movie</h1>
                <br />
            </div>
            <Row>
                <Col md={4} className="movieWrapper" id='superhero'>
                    <Card className="cardImage">
                        <Card.Img src={hero1} alt="Card image" className='card-images' />
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
                        <Card.Img src={hero2} alt="Card image" className='card-images' />
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
                        <Card.Img src={hero3} alt="Card image" className='card-images' />
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
                        <Card.Img src={hero4} alt="Card image" className='card-images' />
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
                        <Card.Img src={hero5} alt="Card image" className='card-images' />
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
                        <Card.Img src={hero6} alt="Card image" className='card-images' />
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
export default Superhero