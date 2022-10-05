import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <NavbarBrand href="/">Website Brand</NavbarBrand>
                    <Nav>
                        <NavLink href="#tranding">Trending</NavLink>
                        <NavLink href="#superhero">Superhero</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar