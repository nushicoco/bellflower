/**
 * Created by einavcarmon on 12/04/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavigationBar extends Component
{
    constructor(props) {
        super();
    }

    render () {
        console.log ("render");

        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">bellflower</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}> <Link to="/search">Search</Link></NavItem>
                            <NavItem eventKey={2}> About </NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );

    }
}

// function mapStateToProps(state) {
//     return {
//         userName: state.userName
//     }
// }

NavigationBar.propTypes = {
    userName:React.PropTypes.string,

    // Custom validations your component requires
    // email(props, propName, component){
    //     if (!(propName in props)){
    //         return new Error(`missing ${propName}`)
    //     }
    // }
}

NavigationBar.defualtProps = {
    userName: "Default user name"
}

// export default connect(mapStateToProps)(Profile);

export default NavigationBar
